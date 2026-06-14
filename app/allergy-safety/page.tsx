import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ImageSlot, type ImageSlotProps } from '@/components/ui/ImageSlot';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { allergySafety as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

const TOOL_IMAGES: ImageSlotProps[] = [
  {
    src: '/media/allergy/ask-the-kitchen-card.png',
    alt: 'An ask-the-kitchen card showing a tree-nut allergy question in the local language and English',
    source: 'app-screenshot',
    frame: 'phone',
    ratio: '9 / 13',
    brief: 'App screenshot. The ask-the-kitchen card for a tree-nut allergy, the question in the local language and English, sized to show at a counter. Clean, legible, one clear question. Text labels throughout, never colour alone.',
  },
  {
    src: '/media/allergy/meal-time-reminder.png',
    alt: 'A pre-meal reminder listing the flags for the chosen venue and what to confirm before eating',
    source: 'app-screenshot',
    frame: 'phone',
    ratio: '9 / 13',
    brief: "App screenshot. A meal-time reminder notification that appears before a planned meal: the venue, its flags, and a short 'confirm before you order' checklist. Amber caution row with an explicit text label. The 'more useful on day six' tool.",
  },
  {
    src: '/media/allergy/on-the-ground-check.png',
    alt: 'The companion suggesting nearby places to eat, each already carrying the family allergy flags and confirm-on-the-day notes',
    source: 'app-screenshot',
    frame: 'phone',
    ratio: '9 / 13',
    brief: "App screenshot. The on-the-ground check: a parent asks what is nearby, and two suggestions return with the family's tree-nut flags and confirm-on-the-day notes already applied. Shows the safety layer following them off-plan.",
  },
];

export const metadata: Metadata = {
  title: 'Allergy and dietary safety',
  description:
    'How Yaycay handles food allergies: flags, checks and reminders that help you stay in control, exactly what we check, and exactly where the limits are. We never claim a meal is "100% safe".',
  alternates: { canonical: '/allergy-safety' },
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
              {p.tools.items.map((t, i) => (
                <article key={t.title} className={s.tool}>
                  <h3 className={s.toolTitle}>{t.title}</h3>
                  <p className={s.toolBody}>{t.body}</p>
                  {TOOL_IMAGES[i] && (
                    <ImageSlot {...TOOL_IMAGES[i]} className={s.stepShot} />
                  )}
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
