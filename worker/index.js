// Lead proxy for the landing page. Static assets are served by Cloudflare;
// only /api/* reaches this Worker (see wrangler.jsonc run_worker_first).
//
// POST /api/lead  {name, phone, email?, town?, message?, privacy_consent, website?}
//   -> validates, then forwards to the Profilo CRM ingest endpoint with the
//      tenant token, which lives only in the Worker secret CRM_INGEST_TOKEN.
//   `sito` (which landing page) comes from the SITO var, never from the visitor.
//
// POST /api/abandon  (navigator.sendBeacon from main.js when the visitor leaves the form without sending it)
//   -> forwarded to the CRM, which emails "COMPILAZIONE ABBANDONATA". Always answers 204: the visitor never waits on it.

const CRM_ORIGIN_DEFAULT = 'https://crm.profilomarketing.it'; // env.CRM_ORIGIN overrides it for local tests only
const MAX_BODY = 8 * 1024;
const MAX_LEN = { name: 120, phone: 40, email: 200, town: 120, message: 2000 };

const json = (status, body, extra = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'DENY',
      ...extra,
    },
  });

const clean = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, max) : '');

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/abandon') return abandon(request, env, url);
    if (url.pathname !== '/api/lead') return env.ASSETS.fetch(request);

    if (request.method !== 'POST') return json(405, { ok: false }, { allow: 'POST' });

    // Same-origin browser posts only (the form is on this very host).
    let originHost = '';
    try { originHost = new URL(request.headers.get('origin') || request.headers.get('referer') || '').host; } catch { /* missing/invalid */ }
    if (originHost !== url.host) return json(403, { ok: false });

    const raw = await request.text().catch(() => '');
    if (!raw || raw.length > MAX_BODY) return json(413, { ok: false });
    let body;
    try { body = JSON.parse(raw); } catch { return json(400, { ok: false }); }
    if (!body || typeof body !== 'object') return json(400, { ok: false });

    // Honeypot: bots fill it, people never see it. Pretend success.
    if (clean(body.website, 200)) return json(200, { ok: true });

    const lead = {
      name: clean(body.name, MAX_LEN.name),
      phone: clean(body.phone, MAX_LEN.phone),
      email: clean(body.email, MAX_LEN.email),
      town: clean(body.town, MAX_LEN.town),
      message: clean(body.message, MAX_LEN.message),
    };
    const consent = body.privacy_consent === true || body.privacy_consent === 'true' || body.privacy_consent === 'on';
    const digits = lead.phone.replace(/\D/g, '');
    if (!lead.name || digits.length < 6) return json(422, { ok: false, error: 'required' });
    if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return json(422, { ok: false, error: 'email' });
    if (!consent) return json(422, { ok: false, error: 'consent' });

    if (!env.CRM_INGEST_TOKEN) return json(500, { ok: false });

    const payload = { ...lead, privacy_consent: true, sito: env.SITO || '' };
    for (const k of Object.keys(payload)) if (payload[k] === '') delete payload[k];

    let res;
    try {
      res = await fetch(`${env.CRM_ORIGIN || CRM_ORIGIN_DEFAULT}/api/leads/ingest/${encodeURIComponent(env.CRM_INGEST_TOKEN)}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-forwarded-for': request.headers.get('cf-connecting-ip') || '',
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      return json(502, { ok: false });
    }
    if (!res.ok) return json(res.status === 429 ? 503 : 502, { ok: false });
    return json(200, { ok: true });
  },
};

async function abandon(request, env, url) {
  const quiet = new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
  if (request.method !== 'POST' || !env.CRM_INGEST_TOKEN) return quiet;
  // beacons carry Origin on modern browsers; fall back to Referer
  let from = '';
  try { from = new URL(request.headers.get('origin') || request.headers.get('referer') || '').host; } catch { /* none */ }
  if (from !== url.host) return quiet;

  const raw = await request.text().catch(() => '');
  if (!raw || raw.length > MAX_BODY) return quiet;
  let body;
  try { body = JSON.parse(raw); } catch { return quiet; }
  if (!body || typeof body !== 'object') return quiet;

  try {
    await fetch(`${env.CRM_ORIGIN || CRM_ORIGIN_DEFAULT}/api/leads/abandon/${encodeURIComponent(env.CRM_INGEST_TOKEN)}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': request.headers.get('cf-connecting-ip') || '' },
      body: JSON.stringify({ ...body, sito: env.SITO || '' }),
      signal: AbortSignal.timeout(8000),
    });
  } catch { /* best effort */ }
  return quiet;
}
