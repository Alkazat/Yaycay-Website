import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { sampleDay as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'A real free day',
  description:
    "A real, unpolished free day: the Walker family's day 2 in Singapore. Per-child morning adventures, an allergy-vetted hawker lunch with the reasoning shown, a rain plan loaded in advance, and the journal page.",
  alternates: { canonical: '/sample-day' },
  robots: { index: false, follow: false },
};

export default function SampleDayPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.contextHeader} aria-labelledby="sd-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="sd-title" className={s.heroTitle}>
                {p.contextHeadline}
              </h1>
              <p className={s.heroSub}>{p.contextSub}</p>
            </div>
          </div>
        </section>

        <section className="section" aria-label="The sample day">
          <div className="container">
            <div className={s.artefactWrap}>
              <article className={s.artefact}>
                <div className={s.artefactHead}>
                  <h2 className={s.artefactTitle}>{p.artefact.title}</h2>
                  <p className={s.artefactSub}>{p.artefact.sub}</p>
                </div>
                {p.artefact.blocks.map((b) => (
                  <div key={b.time} className={s.dayBlock}>
                    <span className={s.blockTime}>{b.time}</span>
                    <h3 className={s.blockTitle}>{b.title}</h3>
                    {b.body.map((para) => (
                      <p key={para.slice(0, 24)} className={s.blockBody}>
                        {para}
                      </p>
                    ))}
                    {'allergy' in b && b.allergy && (
                      <p className={s.allergyCard}>
                        Ask-the-kitchen card included, in English and Mandarin.
                      </p>
                    )}
                    <p className={s.marginNote}>{b.note}</p>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="sd-maths">
          <div className="container">
            <div className={s.shortBlock}>
              <h2 id="sd-maths" className={s.shortTitle}>
                {p.maths.headline}
              </h2>
              <p className={s.shortBody}>{p.maths.body}</p>
            </div>
          </div>
        </section>

        <ClosingForm
          id="sd-cta"
          headline={p.closing.headline}
          subhead={p.closing.subhead}
          source="sample-day"
          secondary={p.closing.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
