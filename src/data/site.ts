// Site-wide settings. Everything marked CONFIRM is a placeholder to settle with the client
// before launch (see ../../notes/landing-to-confirm.md). Empty string = the block is hidden.
export const site = {
  // Stays false until the client signs, the domain exists and the content is approved.
  indexable: false,
  // CONFIRM: the domain the client actually bought. The preview build overrides it with PUBLIC_SITE_URL.
  url: (import.meta.env.PUBLIC_SITE_URL as string | undefined) || 'https://www.gencoserramenti.it',
  lang: 'it',
  brand: 'Genco',
  legalName: 'GENCO srl',
  tagline: 'Persiane, pergole e vetrate su misura',
  title: 'Persiane, pergole e vetrate scorrevoli su misura | Genco',
  description:
    'Persiane, pergole bioclimatiche, vetrate scorrevoli e finestre Inversa su misura. Fornitura e posa tra Milano, Bergamo, Brescia, Monza Brianza, Lodi e Pavia.',
  // Service area, from the client's feedback 2026-10-29.
  area: 'Milano, Bergamo, Brescia, Monza Brianza, Lodi e Pavia',
  areas: ['Milano', 'Bergamo', 'Brescia', 'Monza e Brianza', 'Lodi', 'Pavia'],
  street: 'Via delle Industrie 22', // from the client's own site footer 2026-10-29
  postalCode: '20060',
  locality: 'Basiano',
  region: 'MI',
  country: 'IT',
  // Public numbers taken from gencomultiservice.it/contatti. CONFIRM which ones go on the landing.
  phone: '02 91945749',
  phoneHref: '+390291945749',
  // Mobile number added by the client 2026-10-29 (338/3472517).
  phone2: '338 3472517',
  phone2Href: '+393383472517',
  whatsapp: '393534437219', // CONFIRM
  vat: '10538500967', // CONFIRM: taken from the client's own site footer 2026-10-29
  // STOPGAP: the client's existing privacy policy. Needs its own notice for the landing (form, CRM, trackers) before launch.
  privacyUrl: 'https://www.gencomultiservice.it/privacy-policy/',
  mainSiteUrl: 'https://www.gencomultiservice.it/',
  // Publication date written in the VideoObject schema: day the client videos went on the page. CONFIRM at launch.
  videoUploadDate: '2026-10-26',
  // Tracking. Empty = nothing is loaded. Consent handling to decide before turning these on.
  ga4Id: '',
  metaPixelId: '',
};

export const nav = [
  { href: '#persiane', label: 'Persiane' },
  { href: '#pergole', label: 'Pergole' },
  { href: '#vetrate', label: 'Vetrate' },
  { href: '#finestre', label: 'Finestre' },
  { href: '#domande', label: 'Domande' },
];
