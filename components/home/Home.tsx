import { Button } from '@/components/ui/Button';
import { ReturningCta } from '@/components/ui/ReturningCta';
import { Icon } from '@/components/ui/Icon';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { FreeDayForm } from '@/components/FreeDayForm';
import { HeroSim } from './HeroSim';
import { WorksWith } from './WorksWith';
import { home } from '@/lib/content';
import s from './Home.module.css';

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
          <WorksWith />
        </div>
      </section>

      {/* 2 · The promise: a tight darkened photo band — H1 + line + CTA only */}
      <section className={`section ${s.intro}`} aria-labelledby="hero-title">
        <div className="container">
          <div className={s.introHead}>
            <h1 id="hero-title" className={s.heroTitle}>
              {home.hero.headline}
            </h1>
            <p className={s.heroLine}>{home.hero.line}</p>
            <div className={s.introCtas}>
              <ReturningCta defaultLabel={home.hero.primaryCta.label} defaultHref="#free-day" variant="cta" size="lg" />
              <Button href={home.hero.secondaryCta.href} variant="ghost" size="lg" className={s.ctaGhostOnDark}>
                {home.hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · The recognition, stepped out as a pain → relief ledger */}
      <section className={`section ${s.painSection}`} aria-labelledby="rec-title">
        <div className="container">
          <div className={s.painWrap}>
            <h2 id="rec-title" className={s.painTitle}>
              {home.recognition.headline}
            </h2>
          </div>
          <ul className={s.ledger}>
            {home.recognition.pairs.map((p) => (
              <li key={p.pain} className={s.ledgerRow}>
                <span className={s.ledgerPain}>{p.pain}</span>
                <span className={s.ledgerArrow} aria-hidden="true">
                  &rarr;
                </span>
                <span className={s.ledgerHeld}>{p.held}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Proof — editorial split (image right) */}
      <section className={s.editorialSection} aria-labelledby="proof-title">
        <div className="container">
        <div className={s.editorial}>
          <div className={s.editorialText}>
            <h2 id="proof-title" className={s.sectionTitle}>
              {home.proofTeaser.headline}
            </h2>
            <p className={s.lead}>{home.proofTeaser.subhead}</p>
            <p className={s.proofBody}>{home.proofTeaser.body}</p>
            <Button href={home.proofTeaser.cta.href} variant="cta">
              {home.proofTeaser.cta.label}
            </Button>
          </div>
          <div className={s.editorialMedia}>
            <ImageSlot
              src="/media/home/sample-day-crop.png"
              alt="A cropped view of the Walkers' sample free day, showing the allergy-vetted lunch card with its reasoning"
              source="app-screenshot"
              frame="browser"
              ratio="4 / 3"
              brief="App screenshot. A cropped section of the rendered free-day document for the Walker family (Singapore day 2), centred on the Satay by the Bay lunch block: the venue, the flagged stalls, and the visible 'what we checked / confirm on the day' reasoning. One margin annotation visible. This is the proof-teaser artwork."
            />
            <p className={s.proofAnnotation}>The allergy reasoning is shown on the card, not hidden.</p>
          </div>
        </div>
        </div>
      </section>

      {/* 5 · How it works, as a horizontal numbered timeline (not cards) */}
      <section className={`section ${s.stepsSection}`} aria-labelledby="steps-title">
        <div className="container">
          <div className={s.sectionHead}>
            <h2 id="steps-title" className={s.sectionTitle}>
              {home.steps.headline}
            </h2>
          </div>
          <ol className={s.timeline}>
            {home.steps.items.map((step) => (
              <li key={step.n} className={s.tlStep}>
                <span className={s.tlNum} aria-hidden="true">
                  {step.n}
                </span>
                <h3 className={s.tlTitle}>{step.title}</h3>
                <p className={s.tlBody}>{step.body}</p>
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

      {/* 6 · Allergy trust — editorial split, image on the left, calm green */}
      <section className={`${s.editorialSection} ${s.allergyEditorial}`} aria-labelledby="allergy-title">
        <div className="container">
        <div className={`${s.editorial} ${s.reverse}`}>
          <div className={s.editorialText}>
            <span className={s.allergyIcon} aria-hidden="true">
              <Icon name="medical" />
            </span>
            <h2 id="allergy-title" className={s.allergyTitle}>
              {home.allergyBlock.headline}
            </h2>
            <p className={s.allergyBody}>{home.allergyBlock.body}</p>
            <Button href={home.allergyBlock.cta.href} variant="primary">
              {home.allergyBlock.cta.label}
            </Button>
          </div>
          <div className={`${s.editorialMedia} ${s.mediaPhone}`}>
            <ImageSlot
              src="/media/home/allergy-meal-card.png"
              alt="An allergy-checked meal suggestion card flagging tree-nut risk, with what was checked and what to confirm on the day"
              source="app-screenshot"
              frame="phone"
              ratio="9 / 14"
              brief="App screenshot. A single meal-suggestion card from the Walker plan: venue name, a soft-green 'checked' row and an amber 'confirm on the day' caution row (text labels, never colour alone), the tree-nut flag, and the 'ask the kitchen' line in English and Mandarin. Shows flags-checks-reminders without ever saying 'safe' or '100%'."
            />
          </div>
        </div>
        </div>
      </section>

      {/* 7 · Social proof — one oversized featured quote, then a quiet pair */}
      <section className={`section ${s.tstSection}`} aria-labelledby="tst-title">
        <div className="container">
          <p id="tst-title" className={s.tstKicker}>
            {home.testimonials.headline}
          </p>
          <figure className={s.featuredQuote}>
            <span className={s.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={s.quoteBig}>{home.testimonials.items[0]!.quote}</blockquote>
            <figcaption className={s.quoteWho}>{home.testimonials.items[0]!.who}</figcaption>
          </figure>
          <div className={s.tstPair}>
            {home.testimonials.items.slice(1).map((t) => (
              <figure key={t.who} className={s.tstSmall}>
                <span className={s.tstStars} aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Icon key={i} name="star" />
                  ))}
                </span>
                <blockquote className={s.tstSmallQuote}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className={s.tstSmallWho}>{t.who}</figcaption>
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
            <div className={s.priceCtas}>
              <Button href={home.pricingTeaser.primaryCta.href} variant="cta" size="lg">
                {home.pricingTeaser.primaryCta.label}
              </Button>
            </div>
            <div className={s.byoai}>
              <p className={s.byoaiText}>Already pay for an AI assistant? Bring it, and pay less.</p>
              <WorksWith />
              <Button href={home.pricingTeaser.secondaryCta.href} variant="primary">
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
