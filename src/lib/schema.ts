import { site } from '../data/site';
import { faq, products, videos } from '../data/content';

// One @graph so every entity can point at the others by @id. Only facts that exist on the client's
// own pages or in the producer's material are emitted; empty settings (vat, ratings, reviews) produce no
// property at all. `images` maps a product id to absolute URLs of its optimized photos.
const brands: Record<string, string[]> = {
  pergole: ['Biemme Finestre', 'Gaviota'],
  vetrate: ['Biemme Finestre'],
  finestre: ['Biemme Finestre'],
};

export function buildGraph(images: Record<string, string[]> = {}) {
  const base = site.url.replace(/\/$/, '');
  const biz = `${base}/#business`;
  const page = `${base}/#webpage`;
  const abs = (p: string) => new URL(p, site.url).toString();
  const areaServed = site.areas.map((name) => ({ '@type': 'AdministrativeArea', name }));

  const business: Record<string, unknown> = {
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': biz,
    name: site.legalName,
    alternateName: site.brand,
    url: `${base}/`,
    description: site.description,
    telephone: [site.phoneHref, site.phone2Href],
    image: `${base}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed,
    knowsAbout: ['Persiane', 'Pergole bioclimatiche', 'Vetrate scorrevoli', 'Finestre in PVC e alluminio', 'Serramenti', 'Oscuranti'],
    sameAs: [site.mainSiteUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Persiane, pergole, vetrate e finestre',
      itemListElement: products.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': `${base}/#${p.id}` },
      })),
    },
  };
  if (site.vat) business.vatID = `IT${site.vat}`;

  const services = products.map((p) => {
    const s: Record<string, unknown> = {
      '@type': 'Service',
      '@id': `${base}/#${p.id}`,
      name: p.kicker,
      serviceType: p.kicker,
      description: p.paras.join(' '),
      provider: { '@id': biz },
      areaServed,
      url: `${base}/#${p.id}`,
    };
    if (images[p.id]?.length) s.image = images[p.id];
    if (brands[p.id]) s.brand = brands[p.id].map((name) => ({ '@type': 'Brand', name }));
    return s;
  });

  const videoObjects = videos.map((v) => ({
    '@type': 'VideoObject',
    '@id': `${base}/#video-${v.id}`,
    name: v.title,
    description: v.description,
    thumbnailUrl: abs(v.poster),
    contentUrl: abs(v.src),
    uploadDate: site.videoUploadDate,
    duration: v.duration,
    inLanguage: 'it',
    transcript: v.transcript,
    isPartOf: { '@id': page },
    about: { '@id': `${base}/#finestre` },
    publisher: { '@id': biz },
  }));

  const allFaq = faq.flatMap((g) => g.items);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: `${base}/`,
        name: site.brand,
        inLanguage: site.lang,
        publisher: { '@id': biz },
      },
      {
        '@type': 'WebPage',
        '@id': page,
        url: `${base}/`,
        name: site.title,
        description: site.description,
        inLanguage: site.lang,
        isPartOf: { '@id': `${base}/#website` },
        about: { '@id': biz },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${base}/og-image.jpg`, width: 1200, height: 630 },
        hasPart: [{ '@id': `${base}/#faq` }, ...videos.map((v) => ({ '@id': `${base}/#video-${v.id}` }))],
      },
      ...services,
      ...videoObjects,
      {
        '@type': 'FAQPage',
        '@id': `${base}/#faq`,
        isPartOf: { '@id': page },
        mainEntity: allFaq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}
