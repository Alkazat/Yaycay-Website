/**
 * Paste-ready JSON-LD builders (work order A4). All URLs derive from SITE.url so
 * they are correct in every environment and after the go-public flip. Empty
 * founder-fill fields are omitted rather than emitted as placeholders.
 */
import { SITE, ORG, CONTENT_DATES } from '@/lib/site';

const base = SITE.url.replace(/\/$/, '');
const abs = (path: string) => (path.startsWith('http') ? path : `${base}${path.startsWith('/') ? '' : '/'}${path}`);

const ORG_ID = `${base}/#organization`;
const WEBSITE_ID = `${base}/#website`;
const APP_ID = `${base}/#app`;

type Json = Record<string, unknown>;

export function organization(): Json {
  const org: Json = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: `${base}/`,
    logo: abs(ORG.logoPath),
    description: SITE.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: ORG.supportEmail,
    },
  };
  if (ORG.founderName) {
    org.founder = { '@type': 'Person', name: ORG.founderName, url: `${base}/about` };
  }
  if (ORG.sameAs.length) org.sameAs = ORG.sameAs;
  return org;
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${base}/`,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function softwareApplication(): Json {
  return {
    '@type': 'SoftwareApplication',
    '@id': APP_ID,
    name: SITE.name,
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Web',
    url: `${base}/`,
    description:
      'Family trip planner and holiday companion. One chat builds a day-by-day family itinerary with per-child adventures and allergy-checked meals, then travels with the family and produces a keepsake memory book.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Done-for-you holiday',
        price: '129',
        priceCurrency: 'USD',
        description: 'One complete family holiday, planned and accompanied by Yaycay. One-off payment, no subscription.',
        url: `${base}/pricing`,
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Bring your own AI',
        price: '59',
        priceCurrency: 'USD',
        description: "Yaycay's family structure, allergy checks and trip companion on top of your own ChatGPT or Claude subscription. One-off payment per holiday.",
        url: `${base}/connect`,
        availability: 'https://schema.org/InStock',
      },
    ],
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumb(items: { name: string; path: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function itemList(name: string, description: string, items: { name: string; path: string }[]): Json {
  return {
    '@type': 'ItemList',
    name,
    description,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  };
}

export function article(opts: { headline: string; description: string; path: string }): Json {
  const art: Json = {
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    datePublished: CONTENT_DATES.published,
    dateModified: CONTENT_DATES.modified,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: abs(opts.path),
  };
  if (ORG.founderName) {
    art.author = { '@type': 'Person', name: ORG.founderName, url: `${base}/about` };
  }
  return art;
}

export function faqPage(qas: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  };
}

export function qaPage(question: string, answer: string): Json {
  return {
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    },
  };
}

/** Wrap one or more schema nodes into a single @graph document. */
export function graph(...nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
