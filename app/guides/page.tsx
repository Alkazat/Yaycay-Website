import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { JsonLd } from '@/components/JsonLd';
import { itemList, breadcrumb, graph } from '@/lib/schema';
import { guidesHub, guides } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Family destination guides',
  description: guidesHub.intro,
  alternates: { canonical: '/guides' },
  robots: { index: false, follow: false },
};

type Slug = keyof typeof guides;

export default function GuidesHubPage() {
  const slugs = Object.keys(guides) as Slug[];

  return (
    <>
      <JsonLd
        json={graph(
          itemList(
            'Yaycay family travel guides',
            'Destination guides for families travelling with kids, including age-by-age activities and allergy-aware food notes.',
            slugs.map((slug) => ({ name: `${guides[slug].destination} with kids`, path: `/guides/${slug}` })),
          ),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Destination guides', path: '/guides' },
          ]),
        )}
      />
      <Header />
      <main id="main">
        {/* 1 · Hub header */}
        <section className={s.soberHero} aria-labelledby="guides-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="guides-title" className={s.heroTitle}>
                {guidesHub.title}
              </h1>
              <p className={s.heroSub}>{guidesHub.intro}</p>
            </div>
          </div>
        </section>

        {/* 2 · Guide grid */}
        <section className="section">
          <div className="container">
            <div className={s.hubGrid}>
              {slugs.map((slug) => {
                const g = guides[slug];
                return (
                  <Link key={slug} href={`/guides/${slug}`} className={s.hubCard}>
                    <span className={s.hubCardAges}>{g.card.ages}</span>
                    <h2 className={s.hubCardTitle}>{g.destination} with kids</h2>
                    <p className={s.hubCardLine}>{g.card.hook}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3 · Hub closing CTA */}
        <ClosingForm
          id="guides-cta"
          headline={guidesHub.closing.headline}
          subhead={guidesHub.closing.subhead}
          source="guides-hub"
        />
      </main>
      <Footer />
    </>
  );
}
