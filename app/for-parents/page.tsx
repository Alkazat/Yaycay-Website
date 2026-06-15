import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { ClosingForm } from '@/components/sections/ClosingForm';
import { WorksWith } from '@/components/home/WorksWith';
import { forParentsPage as p } from '@/lib/content';
import s from '@/components/content/content.module.css';

export const metadata: Metadata = {
  title: 'For parents',
  description:
    'For the parent who is the itinerary. Yaycay names the invisible mental load and lifts it piece by piece, with a grown-ups command centre behind a PIN: logistics, the full safety view, allergy protocol and the checklist.',
  alternates: { canonical: '/for-parents' },
};

export default function ForParentsPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* 1 · Hero, recognition-first */}
        <section className={s.soberHero} aria-labelledby="fp-title">
          <div className="container">
            <div className={s.soberInner}>
              <h1 id="fp-title" className={s.heroTitle}>
                {p.hero.headline}
              </h1>
              <p className={s.heroSub}>{p.hero.subhead}</p>
              <div className={s.ctaRow}>
                <Button href="/free-day" variant="cta" size="lg">
                  Build your free day
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2 · Two modes: planning, then travelling */}
        <section className="section" aria-labelledby="fp-modes">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="fp-modes" className={s.heroTitle}>
                {p.modes.headline}
              </h2>
              <p className={s.heroSub}>{p.modes.subhead}</p>
            </div>
            <div className={s.modeGrid}>
              {p.modes.items.map((m) => (
                <article key={m.title} className={s.mode}>
                  <span className={s.modeIcon} aria-hidden="true">
                    <Icon name={m.icon} />
                  </span>
                  <span className={s.modeTag}>{m.tag}</span>
                  <h3 className={s.modeTitle}>{m.title}</h3>
                  <p className={s.modeBody}>{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3 · Conversational, and connected (AI + bring-your-own) */}
        <section className={`section ${s.connectSection}`} aria-labelledby="fp-connect">
          <div className="container">
            <div className={s.connect}>
              <p className="eyebrow">{p.connect.eyebrow}</p>
              <h2 id="fp-connect" className={s.listTitle}>
                {p.connect.headline}
              </h2>
              <p className={s.commandBody}>{p.connect.body}</p>
              <ul className={s.commandList}>
                {p.connect.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <WorksWith />
              <div className={s.ctaRow}>
                <Button href={p.connect.cta.href} variant="primary">
                  {p.connect.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 · The invisible work, itemised */}
        <section className="section" aria-labelledby="fp-invisible">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="fp-invisible" className={s.heroTitle}>
                {p.invisible.headline}
              </h2>
            </div>
            <div className={s.notesApp}>
              <ul className={s.notesList}>
                {p.invisible.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3 · What Yaycay takes off your plate */}
        <section className="section" aria-labelledby="fp-ledger">
          <div className="container">
            <div className={s.soberInner}>
              <h2 id="fp-ledger" className={s.heroTitle}>
                {p.ledger.headline}
              </h2>
            </div>
            <div className={s.ledger}>
              {p.ledger.pairs.map((pair) => (
                <div key={pair.pain} className={s.ledgerRow}>
                  <span className={s.ledgerPain}>{pair.pain}</span>
                  <span className={s.ledgerArrow} aria-hidden="true">
                    &rarr;
                  </span>
                  <span className={s.ledgerHeld}>{pair.held}</span>
                </div>
              ))}
            </div>
            <div className={s.heroPhoto}>
              <ImageSlot
                src="/media/for-parents/shared-plan.png"
                alt="The shared family plan open on a phone, the same day everyone in the family can see, so the parent is no longer the itinerary"
                source="app-screenshot"
                frame="browser"
                ratio="16 / 10"
                brief="App screenshot. The shared day view for the Walker trip: a clean, readable plan the whole family can open, so 'what are we doing today' answers itself. Per-child blocks and one meal flag visible. Proves 'you are no longer the app'."
              />
            </div>
            <p className={s.closingSecondary} style={{ textAlign: 'center' }}>
              <Button href={p.ledger.cta.href} variant="primary">
                {p.ledger.cta.label}
              </Button>
            </p>
          </div>
        </section>

        {/* 4 · The grown-ups command centre (Grown Ups user type) */}
        <section className="section" aria-labelledby="fp-command">
          <div className="container">
            <div className={s.command}>
              <div>
                <p className="eyebrow">{p.commandCentre.eyebrow}</p>
                <h2 id="fp-command" className={s.listTitle}>
                  {p.commandCentre.headline}
                </h2>
                <p className={s.commandBody}>{p.commandCentre.body}</p>
                <ul className={s.commandList}>
                  {p.commandCentre.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
              <ImageSlot
                src="/media/for-parents/command-centre.png"
                alt="The Grown-ups command centre view: bookings, logistics, the full allergy and EpiPen protocol and the checklist, all behind a PIN"
                source="app-screenshot"
                frame="phone"
                ratio="9 / 16"
                brief="App screenshot. The Grown-ups (guardian) view after the PIN unlock: a calm command centre showing the day's logistics, a full safety note (not the kid 'ask a grown-up' cue), the allergy/EpiPen protocol banner, and a link to the grown-ups guide and checklist. Navy/cream, serious and reassuring."
              />
            </div>
          </div>
        </section>

        {/* 5 · The group trip block */}
        <section className="section" aria-labelledby="fp-group">
          <div className="container">
            <div className={s.callout}>
              <h2 id="fp-group" className={s.listTitle}>
                {p.group.headline}
              </h2>
              <p className={s.calloutSub}>{p.group.subhead}</p>
              <p className={s.calloutBody}>{p.group.body}</p>
              <ImageSlot
                className={s.stepShot}
                src="/media/for-parents/multi-generation.png"
                alt="A flat illustration of a multi-generation group: a toddler, a teenager and grandparents balanced across one day"
                source="nanobanana"
                ratio="16 / 7"
                brief="Nanobanana flat spot illustration, locked style (2.5px navy line, flat palette fills, hand-drawn wobble). Subject: a multi-generation group, a toddler, a teen, a parent and two grandparents (one with a walking stick), with the day visibly splitting into strands then rejoining for dinner. No identifiable faces. Navy and blue, restrained palette for a grown-up surface."
              />
            </div>
          </div>
        </section>

        {/* 6 · The during-trip promise */}
        <section className="section" aria-labelledby="fp-present">
          <div className="container">
            <div className={s.quotePanel}>
              <h2 id="fp-present" className={s.quoteTitle}>
                {p.present.headline}
              </h2>
              <p className={s.quoteBody}>{p.present.body}</p>
            </div>
            <div className={s.heroPhoto}>
              <ImageSlot
                src="/media/for-parents/in-the-photo.jpg"
                alt="A parent finally in the family photo on holiday, relaxed and present rather than behind the camera"
                source="nanobanana"
                ratio="16 / 9"
                brief="Nanobanana image. Documentary family-travel photo, warm cream/sand grade, golden hour. A parent IN the moment with their kids (in the pool, at the table), relaxed and present, not holding a phone. NO identifiable minor faces (back views, motion blur, crops). The emotional 'you are in the photo' payoff."
              />
            </div>
          </div>
        </section>

        <ClosingForm
          id="fp-cta"
          headline={p.closing.headline}
          subhead={p.closing.subhead}
          source="for-parents"
          secondary={p.closing.secondary}
        />
      </main>
      <Footer />
    </>
  );
}
