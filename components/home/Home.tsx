import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { FreeDayForm } from '@/components/FreeDayForm';
import { HeroSim } from './HeroSim';
import { home } from '@/lib/content';
import s from './Home.module.css';

const claimAccent = [s.dotSky, s.dotSun, s.dotMeadow, s.dotSky];

export function Home() {
  return (
    <main id="main">
      {/* 1 · Hero: a live simulation, full-width. No headline here by design —
          the H1 lives in the section below (per the storyboard). */}
      <section id="top" className={s.hero} aria-label="A live demonstration of Yaycay building a Singapore trip">
        <div className="container">
          <div className={s.heroStage}>
            <HeroSim />
          </div>
        </div>
      </section>

      {/* 2 · The promise: the H1 + line + CTA, then the value-prop claims */}
      <section className={`section ${s.intro}`} aria-labelledby="hero-title">
        <div className="container">
          <div className={s.introHead}>
            <h1 id="hero-title" className={s.heroTitle}>
              {home.hero.headline}
            </h1>
            <p className={s.heroLine}>{home.hero.line}</p>
            <div className={s.introCtas}>
              <Button href="#free-day" variant="cta" size="lg">
                {home.hero.primaryCta.label}
              </Button>
              <Button href={home.hero.secondaryCta.href} variant="ghost" size="lg">
                {home.hero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <ul className={s.claimGrid}>
            {home.claims.map((c, i) => (
              <li key={c.title} className={s.claim}>
                <span className={`${s.claimIcon} ${claimAccent[i]}`} aria-hidden="true">
                  <Icon name={c.icon} />
                </span>
                <p className={s.claimTitle}>{c.title}</p>
                <p className={s.claimBody}>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Recognition strip */}
      <section className={`section ${s.recognition}`} aria-labelledby="rec-title">
        <div className="container">
          <div className={s.recognitionInner}>
            <h2 id="rec-title" className={s.recTitle}>
              {home.recognition.headline}
            </h2>
            <p className={s.recBody}>{home.recognition.body}</p>
          </div>
        </div>
      </section>

      {/* Documentary photo band (pairing rule: warmth beside the UI proof) */}
      <section className="section">
        <div className="container">
          <ImageSlot
            src="/media/home/present-parent.jpg"
            alt="A parent fully present on holiday with their kids at golden hour, not buried in a phone"
            source="nanobanana"
            ratio="16 / 7"
            brief="Nanobanana image. Documentary family-travel photograph, warm cream/sand grade, golden-hour available light. A parent walking a sunlit street or beach with two children mid-activity (one holding a gelato, one a map), shot from behind or over the shoulder. NO identifiable minor faces (back views, motion blur, or cropped above the face). The feeling is 'I am actually on this holiday', the opposite of being the walking itinerary. No posed smiles, no stock look."
          />
        </div>
      </section>

      {/* 4 · Proof teaser */}
      <section className={`section ${s.proof}`} aria-labelledby="proof-title">
        <div className="container">
          <div className={s.proofGrid}>
            <div>
              <h2 id="proof-title" className={s.sectionTitle}>
                {home.proofTeaser.headline}
              </h2>
              <p className={s.lead}>{home.proofTeaser.subhead}</p>
              <p className={s.proofBody}>{home.proofTeaser.body}</p>
              <Button href={home.proofTeaser.cta.href} variant="cta">
                {home.proofTeaser.cta.label}
              </Button>
            </div>
            <div className={s.proofArt}>
              <ImageSlot
                src="/media/home/sample-day-crop.png"
                alt="A cropped view of the Walkers' sample free day, showing the allergy-vetted lunch card with its reasoning"
                source="app-screenshot"
                frame="browser"
                ratio="4 / 3"
                brief="App screenshot. A cropped section of the rendered free-day document for the Walker family (Singapore day 2), centred on the Satay by the Bay lunch block: the venue, the flagged stalls, and the visible 'what we checked / confirm on the day' reasoning. One margin annotation visible. This is the proof-teaser artwork."
              />
              <p className={s.proofAnnotation}>
                The allergy reasoning is shown on the card, not hidden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · How it works, compressed */}
      <section className={`section ${s.steps}`} aria-labelledby="steps-title">
        <div className="container">
          <div className={s.sectionHead}>
            <h2 id="steps-title" className={s.sectionTitle}>
              {home.steps.headline}
            </h2>
          </div>
          <ol className={s.stepGrid}>
            {home.steps.items.map((step) => (
              <li key={step.n} className={s.step}>
                <span className={s.stepNum} aria-hidden="true">
                  {step.n}
                </span>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
          <div className={s.centerCta}>
            <Button href={home.steps.cta.href} variant="primary">
              {home.steps.cta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* 6 · Allergy trust block */}
      <section className={s.allergy} aria-labelledby="allergy-title">
        <div className="container">
          <div className={s.allergyInner}>
            <span className={s.allergyIcon} aria-hidden="true">
              <Icon name="shield" />
            </span>
            <h2 id="allergy-title" className={s.allergyTitle}>
              {home.allergyBlock.headline}
            </h2>
            <p className={s.allergyBody}>{home.allergyBlock.body}</p>
            <Button href={home.allergyBlock.cta.href} variant="primary">
              {home.allergyBlock.cta.label}
            </Button>
            <ImageSlot
              className={s.allergyShot}
              src="/media/home/allergy-meal-card.png"
              alt="An allergy-checked meal suggestion card flagging tree-nut risk, with what was checked and what to confirm on the day"
              source="app-screenshot"
              frame="phone"
              ratio="9 / 14"
              brief="App screenshot. A single meal-suggestion card from the Walker plan: venue name, a soft-green 'checked' row and an amber 'confirm on the day' caution row (text labels, never colour alone), the tree-nut flag, and the 'ask the kitchen' line in English and Mandarin. Shows flags-checks-reminders without ever saying 'safe' or '100%'."
            />
          </div>
        </div>
      </section>

      {/* 7 · Social proof */}
      <section className={`section ${s.testimonials}`} aria-labelledby="tst-title">
        <div className="container">
          <div className={s.sectionHead}>
            <h2 id="tst-title" className={s.sectionTitle}>
              {home.testimonials.headline}
            </h2>
          </div>
          <div className={s.tstGrid}>
            {home.testimonials.items.map((t) => (
              <figure key={t.who} className={s.tst}>
                <span className={s.tstStars} aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" />
                  ))}
                </span>
                <blockquote className={s.tstQuote}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className={s.tstWho}>{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · Pricing teaser */}
      <section className={s.priceBand} aria-labelledby="price-title">
        <div className="container">
          <div className={s.priceInner}>
            <h2 id="price-title" className={`${s.priceTitle} ${s.boxart}`}>
              {home.pricingTeaser.headline}
            </h2>
            <p className={s.priceBody}>{home.pricingTeaser.body}</p>
            <div className={s.heroCtas}>
              <Button href={home.pricingTeaser.primaryCta.href} variant="cta" size="lg">
                {home.pricingTeaser.primaryCta.label}
              </Button>
              <Button href={home.pricingTeaser.secondaryCta.href} variant="ghost" size="lg">
                {home.pricingTeaser.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · Closing CTA, the form */}
      <section id="free-day" className={`section ${s.closing}`} aria-labelledby="form-title">
        <div className="container">
          <div className={s.closingInner}>
            <h2 id="form-title" className={s.closingTitle}>
              {home.hero.primaryCta.label}
            </h2>
            <p className={s.closingSub}>
              Tell us three things about your trip. We will build one full day, free, so you can
              judge us on the real thing. Your free day arrives in your inbox within 24 hours.
            </p>
            <div className={s.closingForm}>
              <FreeDayForm id="home-free-day" source="homepage-closing" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
