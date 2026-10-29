// Small, dependency-free behaviour: mobile CTA bar, quote-form chips and submit
// (POST /api/lead -> Worker -> Profilo CRM), consent + tracking events.
import { track } from './consent.js';
import { u } from '../lib/url';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* hide the mobile CTA bar while the quote form is on screen */
const bar = $('.mbar');
const target = $('#preventivo');
if (bar && target && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => bar.classList.toggle('is-hidden', e.isIntersecting), { threshold: 0.15 }).observe(target);
}

/* product CTAs preselect the matching interest chip */
const chips = $$('[data-chips] .chip');
const setChip = (value) => chips.forEach((c) => { if (c.dataset.value === value) c.setAttribute('aria-pressed', 'true'); });
chips.forEach((c) => c.addEventListener('click', () => c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')));
$$('[data-interest]').forEach((a) => a.addEventListener('click', () => setChip(a.dataset.interest)));

/* phone and WhatsApp taps count as contacts (no-op unless consent was given) */
$$('a[href^="tel:"], a[href*="wa.me"]').forEach((a) => a.addEventListener('click', () => track('contact')));

/* campaign attribution: the ad parameters of the landing URL travel with the lead */
const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
const attribution = () => {
  const q = new URLSearchParams(location.search);
  const parts = ATTR_KEYS.filter((k) => q.get(k)).map((k) => `${k}=${q.get(k).slice(0, 80)}`);
  return parts.length ? `Origine: ${parts.join(' ')}` : '';
};

/* form */
const form = $('[data-form]');
if (form) {
  const status = $('[data-status]', form);
  const submit = $('[data-submit]', form);
  const f = form.elements;
  // The message goes in the live region a moment after it is unhidden, so screen readers announce it.
  const say = (msg, err) => {
    status.hidden = false;
    status.classList.toggle('is-err', !!err);
    status.textContent = '';
    setTimeout(() => { status.textContent = msg; }, 40);
  };
  const invalid = (el, msg) => { el.setAttribute('aria-invalid', 'true'); el.focus(); say(msg, true); };
  const phoneOk = (v) => /^\+?[\d\s().\/-]+$/.test(v) && v.replace(/\D/g, '').length >= 6 && v.replace(/\D/g, '').length <= 15;
  const emailOk = (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (form.classList.contains('is-busy')) return;
    status.hidden = true;
    [f.name, f.phone, f.email].forEach((el) => el.removeAttribute('aria-invalid'));
    if (!f.name.value.trim()) return invalid(f.name, 'Inserisci il tuo nome.');
    if (!phoneOk(f.phone.value.trim())) return invalid(f.phone, 'Inserisci un numero di telefono valido.');
    if (!emailOk(f.email.value.trim())) return invalid(f.email, 'Controlla l\'indirizzo email.');
    if (!f.privacy_consent.checked) { f.privacy_consent.focus(); return say('Per inviare la richiesta serve il consenso al trattamento dei dati.', true); }

    const picked = chips.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.value);
    const message = [picked.length ? `Interesse: ${picked.join(', ')}` : '', f.message.value.trim(), attribution()].filter(Boolean).join('\n');

    form.classList.add('is-busy');
    submit.disabled = true;
    try {
      if (import.meta.env.PUBLIC_PREVIEW === '1') { say("Questa è un'anteprima: il modulo non invia ancora le richieste.", false); return; }
      const res = await fetch(u('/api/lead'), {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: f.name.value, phone: f.phone.value, email: f.email.value, town: f.town.value,
          hp_url: f.hp_url.value, message, privacy_consent: true,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track('lead');
      form.reset();
      chips.forEach((c) => c.setAttribute('aria-pressed', 'false'));
      say(status.dataset.ok, false);
    } catch {
      say(status.dataset.err, true);
    } finally {
      form.classList.remove('is-busy');
      submit.disabled = false;
    }
  });
}
