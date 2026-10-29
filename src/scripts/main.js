// Small, dependency-free behaviour: scroll reveal, header state, mobile CTA bar,
// quote-form chips and submit (POST /api/lead -> Worker -> Profilo CRM), consent + tracking events.
import { track } from './consent.js';

const $ =(s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* reveal on scroll, with a small stagger inside the same parent */
const items = $$('[data-reveal]');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const siblings = $$('[data-reveal]', e.target.parentElement);
      e.target.style.setProperty('--d', `${Math.min(siblings.indexOf(e.target), 6) * 70}ms`);
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}

/* header border once the page scrolls */
const header = $('[data-header]');
const onScroll = () => header && header.classList.toggle('is-stuck', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
addEventListener('load', onScroll, { once: true }); // not at startup: reading scrollY there forces a layout

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

/* form */
const form =$('[data-form]');
if (form) {
  const status = $('[data-status]', form);
  const say = (msg, err) => { status.textContent = msg; status.hidden = false; status.classList.toggle('is-err', !!err); };

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    status.hidden = true;
    const f = form.elements;
    const phoneOk = f.phone.value.replace(/\D/g, '').length >= 6;
    [f.name, f.phone].forEach((el) => el.removeAttribute('aria-invalid'));
    if (!f.name.value.trim()) { f.name.setAttribute('aria-invalid', 'true'); f.name.focus(); return; }
    if (!phoneOk) { f.phone.setAttribute('aria-invalid', 'true'); f.phone.focus(); return; }
    if (!f.privacy_consent.checked) { f.privacy_consent.focus(); say('Per inviare la richiesta serve il consenso al trattamento dei dati.', true); return; }

    const picked = chips.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.value);
    const note = f.message.value.trim();
    const message = [picked.length ? `Interesse: ${picked.join(', ')}` : '', note].filter(Boolean).join('\n');

    form.classList.add('is-busy');
    try {
      if (import.meta.env.PUBLIC_PREVIEW === '1') { say("Questa è un'anteprima: il modulo non invia ancora le richieste.", false); return; }
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: f.name.value, phone: f.phone.value, email: f.email.value, town: f.town.value,
          website: f.website.value, message, privacy_consent: true,
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
    }
  });
}
