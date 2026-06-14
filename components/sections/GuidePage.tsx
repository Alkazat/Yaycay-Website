import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { JsonLd } from '@/components/JsonLd';
import { article, breadcrumb, graph } from '@/lib/schema';
import { guides } from '@/lib/content';
import s from '@/components/content/content.module.css';

type Slug = keyof typeof guides;

export function GuidePage({ slug }: { slug: Slug }) {
  const g = guides[slug];
  const related = (Object.keys(guides) as Slug[]).filter((k) => k !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        json={graph(
          article({ headline: g.title, description: g.subhead, path: `/guides/${slug}` }),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Destination guides', path: '/guides' },
            { name: `${g.destination} with kids`, path: `/guides/${slug}` },
          ]),
        )}
      />
      <Header />
      <main id="main">
        {/* 1 · Guide header */}
        <section className={s.soberHero} aria-labelledby="guide-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="guide-title" className={s.heroTitle}>
                {g.title}
              </h1>
              <p className={s.heroSub}>{g.subhead}</p>
            </div>
          </div>
        </section>

        {/* Image pass · destination hero photo */}
        <section className="section">
          <div className="container">
            <ImageSlot
              className={s.guideHeroPhoto}
              src={`/media/guides/${slug}-hero.jpg`}
              alt={`A family in ${g.destination}`}
              source="nanobanana"
              ratio="16 / 9"
              frame="none"
              brief={g.heroBrief}
            />
          </div>
        </section>

        {/* Summary box · the AI-extraction payload */}
        <section className="section">
          <div className="container">
            <div className={s.summaryBox}>
              <p className={s.summaryLabel}>{g.summaryLabel}</p>
              <p className={s.summaryBody}>{g.summary}</p>
            </div>
          </div>
        </section>

        {/* 2 · Why it works */}
        <section className="section" aria-labelledby="guide-why">
          <div className="container">
            <div className={s.guideWrap}>
              <h2 id="guide-why" className={s.guideSectionTitle}>
                {g.whyHead}
              </h2>
              <p className={s.guideProse}>{g.why}</p>
            </div>
          </div>
        </section>

        {/* 3 · Age-by-age */}
        <section className="section" aria-labelledby="guide-ages">
          <div className="container">
            <div className={s.guideWrap}>
              <h2 id="guide-ages" className={s.guideSectionTitle}>
                {g.ageHead}
              </h2>
            </div>
            <div className={s.ageGrid}>
              {g.ageBands.map((band) => (
                <div key={band.label} className={s.ageCard}>
                  <h3 className={s.ageLabel}>{band.label}</h3>
                  <p className={s.ageBody}>{band.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Eating with allergies and fussy eaters */}
        <section className="section" aria-labelledby="guide-food">
          <div className="container">
            <div className={s.foodBox}>
              <h2 id="guide-food" className={s.guideSectionTitle}>
                {g.foodHead}
              </h2>
              <p className={s.guideProse}>{g.food}</p>
              <Link href={g.foodCta.href} className={s.foodCta}>
                {g.foodCta.label} &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 5 · The practical bits */}
        <section className="section" aria-labelledby="guide-practical">
          <div className="container">
            <div className={s.guideWrap}>
              <h2 id="guide-practical" className={s.guideSectionTitle}>
                {g.practicalHead}
              </h2>
              <p className={s.guideProse}>{g.practical}</p>
            </div>
          </div>
        </section>

        {/* 6 · A sample day (bridge to product) */}
        <section className="section" aria-labelledby="guide-sample">
          <div className="container">
            <div className={s.sampleBridge}>
              <h2 id="guide-sample" className={s.guideSectionTitle}>
                {g.sampleHead}
              </h2>
              <p className={s.sampleBridgeBody}>{g.sample}</p>
              <Link href={g.sampleCta.href} className={s.sampleCta}>
                {g.sampleCta.label} &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="section" aria-labelledby="guide-related">
            <div className="container">
              <div className={s.guideWrap}>
                <h2 id="guide-related" className={s.guideSectionTitle}>
                  More family guides
                </h2>
              </div>
              <div className={s.relatedRow}>
                {related.map((k) => (
                  <Link key={k} href={`/guides/${k}`} className={s.relatedCard}>
                    <p className={s.relatedCardTitle}>{guides[k].destination} with kids</p>
                    <p className={s.relatedCardLine}>{guides[k].card.ages}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7 · Contextual closing CTA, destination pre-filled */}
        <ClosingForm
          id="guide-cta"
          headline={g.closing.headline}
          subhead={g.closing.subhead}
          source={`guide-${slug}`}
          defaultDestination={g.destination}
          secondary={{ label: 'More family guides', href: '/guides' }}
        />
      </main>
      <Footer />
    </>
  );
}
