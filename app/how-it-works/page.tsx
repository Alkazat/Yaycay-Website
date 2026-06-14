import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { ImageSlot, type ImageSlotProps } from '@/components/ui/ImageSlot';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { howItWorksPage as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

// One UI proof or photo per step (per the work-order asset inventory).
const STEP_IMAGES: Record<number, ImageSlotProps> = {
  1: {
    src: '/media/how/step-chat.png',
    alt: 'The Yaycay chat asking where, when and who is coming, with the Walkers answering ages and a tree-nut allergy',
    source: 'app-screenshot',
    frame: 'phone',
    ratio: '9 / 16',
    brief: 'App screenshot. The opening chat: Yaycay asking the three trip questions, the parent answering with the Walker crew (Sam 9, Pip 6, Theo 3, Pip tree-nut allergy) and a forwarded hotel confirmation appearing as an imported chip. Shows reservation + screenshot import inside the conversation.',
  },
  2: {
    src: '/media/how/step-itinerary.png',
    alt: 'A full day-by-day Singapore itinerary view, each day showing per-child adventures, an allergy-flagged meal and a weather contingency',
    source: 'app-screenshot',
    frame: 'browser',
    ratio: '16 / 11',
    brief: 'App screenshot. The full multi-day itinerary for the Walker trip: a scannable day-by-day plan, each day showing per-child morning blocks, an allergy-flagged meal, and a small rain-contingency marker. Routed sensibly, energy balanced. This is the "your holiday arrives" proof.',
  },
  4: {
    src: '/media/how/step-during-trip.png',
    alt: 'The on-trip companion answering "what is good to eat near here" with suggestions that already carry the family allergy flags',
    source: 'app-screenshot',
    frame: 'phone',
    ratio: '9 / 16',
    brief: 'App screenshot. The during-trip companion in use on location: a parent asks "what is good near here right now", and Yaycay returns two nearby options with the tree-nut flags and confirm-on-the-day notes already applied, plus a one-tap rain plan. The "this is where most planners go quiet" moment.',
  },
  5: {
    src: '/media/how/step-keepsake.jpg',
    alt: "A printed keepsake memory book open to a child's illustrated journal page from the trip",
    source: 'nanobanana',
    frame: 'none',
    ratio: '4 / 3',
    brief: "Nanobanana image. A printed, perfect-bound keepsake book open on a warm wooden table, golden light, showing a child's journal page: stamps, a wobbly drawing of a Supertree, a handwritten answer. Small hands resting at the edge of the frame, NO identifiable faces. Warm cream/sand grade. The emotional payoff shot.",
  },
};

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'Exactly what happens, from first chat to keepsake: one conversation in, a holiday built around each child out, Yaycay alongside you the whole trip, and a memory book after.',
  alternates: { canonical: '/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className={s.soberHero} aria-labelledby="hiw-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="hiw-title" className={s.heroTitle}>
                {p.hero.headline}
              </h1>
              <p className={s.heroSub}>{p.hero.subhead}</p>
              <div className={s.ctaRow}>
                <Button href="/free-day" variant="cta" size="lg">
                  Build your free day
                </Button>
              </div>
            </div>
            <div className={s.heroPhoto}>
              <ImageSlot
                src="/media/how/planning-from-the-sofa.jpg"
                alt="A parent planning the family holiday from the sofa on a laptop, relaxed, a child playing nearby"
                source="nanobanana"
                ratio="16 / 10"
                brief="Nanobanana image. Documentary photo, warm soft indoor light: a parent on the sofa with a laptop, relaxed rather than frazzled, a mug nearby, a child playing in soft focus in the background. NO identifiable minor faces. The feeling is 'the planning is easy now'. Cream/sand grade, no stock gloss."
              />
            </div>
          </div>
        </section>

        <section className="section" aria-label="The five steps">
          <div className="container">
            <ol className={s.stepList}>
              {p.steps.map((step) => (
                <li key={step.n} className={s.step}>
                  <span className={s.stepNum} aria-hidden="true">
                    {step.n}
                  </span>
                  <div>
                    <h2 className={s.stepTitle}>{step.title}</h2>
                    <p className={s.stepBody}>{step.body}</p>
                    {'cta' in step && step.cta && (
                      <Link className={s.stepCta} href={step.cta.href}>
                        {step.cta.label} &rarr;
                      </Link>
                    )}
                    {STEP_IMAGES[step.n] && (
                      <ImageSlot {...STEP_IMAGES[step.n]} className={s.stepShot} />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="hiw-faq">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="hiw-faq" className={s.heroTitle}>
                {p.faqHead}
              </h2>
            </div>
            <div className={s.faq}>
              {p.faq.map((item) => (
                <div key={item.q} className={s.faqItem}>
                  <h3 className={s.faqQ}>{item.q}</h3>
                  <p className={s.faqA}>{item.a}</p>
                </div>
              ))}
              <p className={s.closingSecondary}>
                <Link href={p.faqCta.href}>{p.faqCta.label} &rarr;</Link>
              </p>
            </div>
          </div>
        </section>

        <ClosingForm
          id="hiw-cta"
          headline={p.closing.headline}
          subhead={p.closing.subhead}
          source="how-it-works"
          secondary={p.closing.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
