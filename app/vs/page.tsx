import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { comparisonHub as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'Compare Yaycay',
  description: p.intro,
  alternates: { canonical: '/vs' },
};

export default function VsHubPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="vs-hub-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="vs-hub-title" className={s.heroTitle}>
                {p.title}
              </h1>
              <p className={s.heroSub}>{p.intro}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={s.hubGrid}>
              {p.cards.map((card) => (
                <Link key={card.slug} href={`/vs/${card.slug}`} className={s.hubCard}>
                  <h2 className={s.hubCardTitle}>{card.name}</h2>
                  <p className={s.hubCardLine}>{card.line}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
