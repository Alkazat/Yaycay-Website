import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// AI crawlers are explicitly welcome: for a young site, being retrievable and
// citable is the growth channel, not a leakage risk. Campaign and thank-you
// paths stay out of the index.
const DISALLOW = ['/api/', '/go/', '/free-day-requested'];
const AI_AGENTS = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
