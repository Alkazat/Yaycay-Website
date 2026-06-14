import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { aboutPage as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Yaycay is built by parents who build software. The founding trip, the small team you will probably hear from, and the trade-offs we accept, including never overstating what we can verify about allergies.',
  alternates: { canonical: '/about' },
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* 1 · Hero with candid family photo */}
        <section className={s.soberHero} aria-labelledby="ab-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="ab-title" className={s.heroTitle}>
                {p.hero.headline}
              </h1>
              <p className={s.heroSub}>{p.hero.subhead}</p>
            </div>
            <div className={s.heroPhoto}>
              <ImageSlot
                src="/media/about/founders-family.jpg"
                alt="The Yaycay founders on a family holiday, candid and real, not stock"
                source="founder-photo"
                ratio="16 / 9"
                brief="Founder photo (real, with consent). A candid, warm photo of the founding family on an actual holiday, not posed stock. Identifiable adult faces are allowed here with written consent; keep any minor faces angled away or cropped. Warm cream/sand grade to match the brand. This is the realness check before a parent pays."
              />
            </div>
          </div>
        </section>

        {/* 2 · The founding trip */}
        <section className="section" aria-labelledby="ab-founding">
          <div className="container">
            <div className={s.narrative}>
              <h2 id="ab-founding" className={s.heroTitle}>
                {p.founding.headline}
              </h2>
              <ImageSlot
                src="/media/about/translating-outside-restaurant.jpg"
                alt="A parent outside a restaurant on holiday translating an ingredients list on a phone while the family waits"
                source="founder-photo"
                ratio="3 / 2"
                brief="Founder photo or documentary (real, with consent). The founding scene: a parent standing outside a restaurant abroad, reading an ingredients list on a phone while the family waits nearby. The 'I am on holiday and I am working' moment that started Yaycay. No minor faces."
              />
              <p className={s.narrativeBody}>{p.founding.body}</p>
            </div>
          </div>
        </section>

        {/* 3 · Who we are (E-E-A-T payload) */}
        <section className={`section ${s.howSection}`} aria-labelledby="ab-team">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="ab-team" className={s.heroTitle}>
                {p.team.headline}
              </h2>
              <p className={s.heroSub}>{p.team.subhead}</p>
            </div>
            <div className={s.teamGrid}>
              {p.team.members.map((m, i) => (
                <article key={i} className={s.teamCard}>
                  <ImageSlot
                    className={s.teamPhoto}
                    src={`/media/about/team-${i + 1}.jpg`}
                    alt={`Portrait of a Yaycay team member, ${m.role}`}
                    source="founder-photo"
                    ratio="1 / 1"
                    brief="Founder photo (real, with consent). A warm, natural headshot of a real team member, consistent light and crop across all team cards. Identifiable adult face with consent. This is the E-E-A-T proof: real people who have lived the problem."
                  />
                  <h3 className={s.teamName}>{m.name}</h3>
                  <p className={s.teamRole}>{m.role}</p>
                  <p className={s.teamLine}>{m.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · What we believe */}
        <section className="section" aria-labelledby="ab-believe">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="ab-believe" className={s.heroTitle}>
                {p.believe.headline}
              </h2>
            </div>
            <ul className={s.principles}>
              {p.believe.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 · Closing CTA */}
        <section className={`section ${s.closing}`} aria-labelledby="ab-cta">
          <div className="container">
            <div className={s.closingInner}>
              <h2 id="ab-cta" className={s.closingTitle}>
                {p.closing.headline}
              </h2>
              <p className={s.closingSub}>{p.closing.subhead}</p>
              <div className={s.ctaRow}>
                <Button href="/free-day" variant="cta" size="lg">
                  Build your free day
                </Button>
                <Button href={p.closing.secondary.href} variant="ghost" size="lg">
                  {p.closing.secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
