import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { allergySafety as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Allergy and dietary safety',
  description:
    'How Yaycay handles food allergies: flags, checks and reminders that help you stay in control, exactly what we check, and exactly where the limits are. We never claim a meal is "100% safe".',
  alternates: { canonical: '/allergy-safety' },
  robots: { index: false, follow: false },
};

export default function AllergySafetyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="as-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="as-title" className={s.heroTitle}>
                {p.hero.headline}
              </h1>
              <p className={s.heroSub}>{p.hero.subhead}</p>
            </div>
          </div>
        </section>

        <section className="section" aria-label="What we check">
          <div className={`container ${s.listBlock} ${s.listCheck}`}>
            <h2 className={s.listTitle}>{p.check.headline}</h2>
            <p className={s.listBody}>{p.check.body}</p>
          </div>
        </section>

        <section className="section" aria-label="What we cannot check">
          <div className={`container ${s.listBlock} ${s.listCannot}`}>
            <h2 className={s.listTitle}>{p.cannot.headline}</h2>
            <p className={s.listBody}>{p.cannot.body}</p>
          </div>
        </section>

        <section className="section" aria-labelledby="as-tools">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="as-tools" className={s.heroTitle}>
                {p.tools.headline}
              </h2>
            </div>
            <div className={s.toolsRow}>
              {p.tools.items.map((t) => (
                <article key={t.title} className={s.tool}>
                  <h3 className={s.toolTitle}>{t.title}</h3>
                  <p className={s.toolBody}>{t.body}</p>
                </article>
              ))}
            </div>
            <p className={s.closingSecondary} style={{ textAlign: 'center' }}>
              <Link href={p.tools.cta.href}>{p.tools.cta.label} &rarr;</Link>
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="as-beyond">
          <div className="container">
            <div className={s.shortBlock}>
              <h2 id="as-beyond" className={s.shortTitle}>
                {p.beyond.headline}
              </h2>
              <p className={s.shortBody}>{p.beyond.body}</p>
            </div>
          </div>
        </section>

        <ClosingForm
          id="as-cta"
          headline={p.closing.headline}
          subhead={p.closing.subhead}
          source="allergy-safety"
          secondary={p.closing.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
