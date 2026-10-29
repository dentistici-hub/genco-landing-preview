// Site-wide settings. Everything marked CONFIRM is a placeholder to settle with the client
// before launch (see ../../notes/landing-to-confirm.md). Empty string = the block is hidden.
export const site = {
  // Stays false until the client signs, the domain exists and the content is approved.
  indexable: false,
  // CONFIRM: the domain the client actually bought. The preview build overrides it with PUBLIC_SITE_URL.
  url: (import.meta.env.PUBLIC_SITE_URL as string | undefined) || 'https://www.gencoserramenti.it',
  lang: 'it',
  brand: 'Genco',
  legalName: 'GENCO Multiservice srl',
  tagline: 'Persiane, pergole e vetrate su misura',
  title: 'Persiane, pergole e vetrate scorrevoli su misura | Genco',
  description:
    'Persiane in classe 6, pergole bioclimatiche Climatika e vetrate scorrevoli a pacchetto. Fornitura e posa con un solo referente. Preventivo da foto e misure.',
  area: 'Milano e hinterland', // CONFIRM
  locality: 'Basiano', // CONFIRM: from the CRM note "sono a Basiano"
  region: 'MI',
  country: 'IT',
  // Public numbers taken from gencomultiservice.it/contatti. CONFIRM which ones go on the landing.
  phone: '02 91945749',
  phoneHref: '+390291945749',
  whatsapp: '393534437219', // CONFIRM
  vat: '', // CONFIRM
  privacyUrl: 'https://www.gencomultiservice.it/cookie-policy/', // CONFIRM: dedicated privacy page
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
