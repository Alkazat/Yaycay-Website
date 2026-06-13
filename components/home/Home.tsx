import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { FreeDayForm } from '@/components/FreeDayForm';
import { home } from '@/lib/content';
import s from './Home.module.css';

/** Decorative "free day" preview card shown beside the hero copy. */
function PreviewCard() {
  return (
    <div className={s.preview} aria-hidden="true">
      <div className={s.previewHead}>
        <span className={s.previewDay}>Day 3</span>
        <span>Sentosa, Singapore</span>
      </div>
      <ul className={s.previewList}>
        <li className={s.previewRow}>
          <span className={`${s.previewDot} ${s.dotSky}`} />
          <span>Ollie, 9: Oceanarium shark dive</span>
        </li>
        <li className={s.previewRow}>
          <span className={`${s.previewDot} ${s.dotSun}`} />
          <span>Maya, 6: tide-pool explorer trail</span>
        </li>
        <li className={`${s.previewRow} ${s.previewFlag}`}>
          <span className={s.previewFlagIcon}>
            <Icon name="shield" />
          </span>
          <span>Lunch checked for tree-nut allergy</span>
        </li>
        <li className={s.previewRow}>
          <span className={`${s.previewDot} ${s.dotMeadow}`} />
          <span>Rain plan: ArtScience Museum, ready</span>
        </li>
      </ul>
    </div>
  );
}

export function Home() {
  return (
    <main id="main">
      {/* 1 · Hero, split media */}
      <section id="top" className={s.hero} aria-labelledby="hero-title">
        <div className="container">
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <h1 id="hero-title" className={s.heroTitle}>
                {home.hero.headline}
              </h1>
              <p className={s.heroSub}>{home.hero.subhead}</p>
              <div className={s.heroCtas}>
                <Button href="#free-day" variant="cta" size="lg">
                  {home.hero.primaryCta.label}
                </Button>
                <Button href={home.hero.secondaryCta.href} variant="ghost" size="lg">
                  {home.hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <PreviewCard />
          </div>
        </div>
      </section>

      {/* 2 · Recognition strip */}
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

      {/* 3 · Three-leg pillars */}
      <section className={`section ${s.pillars}`} aria-labelledby="pillars-title">
        <div className="container">
          <div className={s.sectionHead}>
            <h2 id="pillars-title" className={s.sectionTitle}>
              {home.pillars.headline}
            </h2>
            <p className={s.lead}>{home.pillars.subhead}</p>
          </div>
          <div className={s.pillarGrid}>
            {home.pillars.cards.map((c, i) => (
              <article key={c.title} className={s.pillar}>
                <span className={`${s.pillarIcon} ${[s.dotSky, s.dotSun, s.dotMeadow][i]}`} aria-hidden="true">
                  <Icon name={['sparkle', 'compass', 'star'][i]} />
                </span>
                <h3 className={s.pillarTitle}>{c.title}</h3>
                <p className={s.pillarBody}>{c.body}</p>
              </article>
            ))}
          </div>
          <div className={s.centerCta}>
            <Button href={home.pillars.cta.href} variant="primary">
              {home.pillars.cta.label}
            </Button>
          </div>
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
            <div className={s.proofArt} aria-hidden="true">
              <PreviewCard />
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
