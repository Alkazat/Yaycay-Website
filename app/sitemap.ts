import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { guides, answers, comparisons } from '@/lib/content';

// Only canonical, indexable URLs that return 200. Campaign (/go) and thank-you
// (/free-day-requested) pages are deliberately excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url.replace(/\/$/, '');

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
  ): MetadataRoute.Sitemap[number] => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const core: MetadataRoute.Sitemap = [
    entry('/', 1, 'weekly'),
    entry('/how-it-works', 0.9),
    entry('/sample-day', 0.9),
    entry('/pricing', 0.9),
    entry('/allergy-safety', 0.9),
    entry('/for-parents', 0.8),
    entry('/for-kids', 0.8),
    entry('/connect', 0.6),
    entry('/free-day', 0.7),
    entry('/about', 0.6),
    entry('/faq', 0.7),
    entry('/contact', 0.4),
    entry('/terms', 0.3),
    entry('/legal/privacy', 0.3),
    entry('/guides', 0.8, 'weekly'),
    entry('/answers', 0.8, 'weekly'),
    entry('/vs', 0.6),
  ];

  const guidePages = Object.keys(guides).map((slug) => entry(`/guides/${slug}`, 0.7));
  const answerPages = Object.keys(answers).map((slug) => entry(`/answers/${slug}`, 0.7));
  const vsPages = Object.keys(comparisons).map((slug) => entry(`/vs/${slug}`, 0.6));

  return [...core, ...guidePages, ...answerPages, ...vsPages];
}
