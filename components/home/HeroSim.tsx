'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { CONSENT_EVENT, getConsent } from '@/lib/analytics';
import { home } from '@/lib/content';
import s from './HeroSim.module.css';

const sim = home.heroSim;
const ACCENT: Record<string, string> = {
  sky: s.sky,
  sun: s.sun,
  meadow: s.meadow,
  royal: s.royal,
};
// Challenge tones mirror the FE ChallengeBlock (quiz=sun, spot=sky, photo=coral).
const CHALLENGE: Record<string, string> = {
  Quiz: s.chQuiz,
  'Spot it': s.chSpot,
  Photo: s.chPhoto,
};

type Phase = 'query' | 'building' | 'plan';
type View = 'kid' | 'grownups';

// The seed data in lib/content.ts is inferred as a tuple of literal types (each
// child's day differs), which makes `.map` over a union of tuples awkward. These
// shapes give the renderer one uniform type to walk.
type Meal = {
  venue: string;
  allergyLabel: string;
  checked: string[];
  confirm: string[];
  stalls: { name: string; label: string; risk: string }[];
  ask: { phrase: string; english: string; language: string };
};
type Moment = {
  slot: string;
  place: string;
  time: string;
  title: string;
  desc: string;
  wow: string | null;
  challenge: { type: string; prompt: string } | null;
  meal: Meal | null;
  readAloud: boolean;
};
type Kid = {
  name: string;
  age: number;
  mode: string;
  emoji: string;
  accent: string;
  allergy: boolean;
  moments: Moment[];
};

const kids = sim.kids as unknown as Kid[];

/** Reads prefers-reduced-motion at mount; SSR-safe (assumes motion until known). */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/**
 * The hero simulation, in three cross-fading phases:
 *   1. a floating query (destination + family / dates / allergy),
 *   2. the AI "building" the trip (an animated orb + cycling status lines, the
 *      same beats as the FE GeneratingOverlay),
 *   3. the finished plan, framed like the real FE trip view: an Explorers /
 *      Grown-ups toggle, a profile per child with their age band, a real day
 *      (slots, activities, wow facts, a typed challenge, the allergy meal card),
 *      and the grown-ups logistics view.
 *
 * Starts in the query phase and only ever animates *forward* (query → building
 * → plan), so the finished plan fades *in* and is never shown then reset. The
 * plan's content is always in the DOM (for SEO / no-JS); under reduced motion it
 * is revealed immediately with no animation.
 */
export function HeroSim() {
  const reduced = useReducedMotion();
  // SSR/initial = the query phase (the animation's first frame), so there is no
  // visible "show the plan then reset" flash on load.
  const [typed, setTyped] = useState('');
  const [fieldsIn, setFieldsIn] = useState(false);
  const [phase, setPhase] = useState<Phase>('query');
  const [buildLine, setBuildLine] = useState(0);
  const [active, setActive] = useState(0);
  const [view, setView] = useState<View>('kid');
  const [userControlled, setUserControlled] = useState(false);
  // Gates the intro on the cookie banner being resolved (see below).
  const [consentReady, setConsentReady] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Hold the build until the cookie consent banner is out of the way. On a phone
  // that banner can sit over the hero, so a first-time visitor would miss the
  // start of the animation while dealing with it. A returning visitor who has
  // already chosen never sees the banner, so we start at once; a first-time one
  // waits until they accept/decline. A safety timeout starts it regardless, so
  // the hero can never stay parked.
  useEffect(() => {
    if (getConsent() !== 'unknown') {
      setConsentReady(true);
      return;
    }
    const onConsent = () => setConsentReady(true);
    window.addEventListener(CONSENT_EVENT, onConsent);
    const fallback = setTimeout(() => setConsentReady(true), 10000);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      clearTimeout(fallback);
    };
  }, []);

  // Reduced motion / no animation: jump straight to the finished plan.
  useEffect(() => {
    if (!reduced) return;
    setTyped(sim.query);
    setFieldsIn(true);
    setPhase('plan');
  }, [reduced]);

  // The forward build sequence. Skipped under reduced motion, and held until the
  // cookie banner is resolved so the intro is never missed behind it.
  useEffect(() => {
    if (reduced || !consentReady) return;
    const t = timers.current;
    const push = (fn: () => void, ms: number) => t.push(setTimeout(fn, ms));

    const q = sim.query;
    for (let i = 1; i <= q.length; i++) push(() => setTyped(q.slice(0, i)), 320 + i * 90);
    const afterType = 320 + q.length * 90 + 200;
    push(() => setFieldsIn(true), afterType);
    push(() => setPhase('building'), afterType + 800);
    push(() => setPhase('plan'), afterType + 800 + 2600);

    return () => {
      t.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduced, consentReady]);

  // Cycle the "building" status lines while that phase is showing.
  useEffect(() => {
    if (reduced || phase !== 'building') return;
    const id = setInterval(
      () => setBuildLine((n) => (n + 1) % sim.building.lines.length),
      720,
    );
    return () => clearInterval(id);
  }, [reduced, phase]);

  // Auto-cycle the child profiles once the plan is shown, until the visitor
  // takes over. Stays within the Explorers view (the Grown-ups view is opt-in).
  useEffect(() => {
    if (reduced || phase !== 'plan' || view !== 'kid' || userControlled) return;
    const id = setInterval(() => setActive((a) => (a + 1) % kids.length), 3000);
    return () => clearInterval(id);
  }, [reduced, phase, view, userControlled]);

  const selectKid = (i: number) => {
    setUserControlled(true);
    setView('kid');
    setActive(i);
  };
  const selectView = (v: View) => {
    setUserControlled(true);
    setView(v);
  };

  const kid = kids[active]!;
  const caretOn = !reduced && phase === 'query' && typed.length < sim.query.length;
  const show = (p: Phase) => (phase === p ? s.show : '');

  return (
    <figure
      className={s.wrap}
      aria-label={`A demonstration of Yaycay building a ${sim.query} trip: a separate day for ${kids
        .map((k) => `${k.name} (${k.age})`)
        .join(', ')}, with every meal checked against Pip's tree-nut allergy and a grown-ups view for the logistics.`}
    >
      <div className={s.stage}>
        {/* Phase 1 - the floating query */}
        <div className={`${s.layer} ${s.query} ${show('query')}`} aria-hidden="true">
          <div className={s.bar}>
            <span className={s.barIcon}>
              <Icon name="map" />
            </span>
            <span className={s.barText}>
              {typed || <span className={s.placeholder}>{sim.placeholder}</span>}
              {caretOn && <span className={s.caret} />}
            </span>
            <span className={s.goBtn}>
              <Icon name="compass" />
            </span>
          </div>
          <div className={`${s.fields} ${fieldsIn ? s.in : ''}`}>
            {sim.chips.map((c) => (
              <span key={c} className={s.field}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Phase 2 - the AI building the trip */}
        <div className={`${s.layer} ${s.building} ${show('building')}`} aria-hidden="true">
          <p className={s.buildTitle}>{sim.building.title}…</p>
          <span className={s.orb}>
            <Icon name="sparkle" />
          </span>
          <p className={s.buildLine}>{sim.building.lines[buildLine]}</p>
        </div>

        {/* Phase 3 - the finished plan, framed like the real FE trip view */}
        <div className={`${s.layer} ${s.plan} ${show('plan')}`}>
          <div className={s.cardHead}>
            <span className={s.cardTitleWrap}>
              <span className={s.cardTitle}>{sim.trip.destination}</span>
              <span className={s.cardWhen}>{sim.trip.when}</span>
            </span>
            <span className={s.builtBy}>
              <Icon name="sparkle" />
              {sim.trip.builtBy}
            </span>
          </div>

          {/* Explorers / Grown-ups view toggle (the real top-level switch). */}
          <div className={s.viewToggle} role="tablist" aria-label="Choose a view">
            <button
              type="button"
              role="tab"
              aria-selected={view === 'kid'}
              className={`${s.viewBtn} ${view === 'kid' ? s.viewActive : ''}`}
              onClick={() => selectView('kid')}
            >
              {sim.views.kid}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === 'grownups'}
              className={`${s.viewBtn} ${view === 'grownups' ? s.viewActive : ''}`}
              onClick={() => selectView('grownups')}
            >
              <Icon name="shield" />
              {sim.views.grownups}
            </button>
          </div>

          {view === 'kid' ? (
            <>
              {/* Profile switcher: one pill per child, with their age band. */}
              <div className={s.profiles} role="tablist" aria-label="Each explorer in the family">
                {kids.map((k, i) => (
                  <button
                    key={k.name}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    tabIndex={i === active ? 0 : -1}
                    className={`${s.profile} ${ACCENT[k.accent]} ${i === active ? s.profileActive : ''}`}
                    onClick={() => selectKid(i)}
                  >
                    <span className={s.avatar} aria-hidden="true">
                      {k.emoji}
                    </span>
                    <span className={s.profileText}>
                      <span className={s.profileName}>
                        {k.name}
                        <span className={s.profileAge}>· {k.age}</span>
                        {k.allergy && (
                          <span className={s.allergyDot} title="Allergy on file" aria-hidden="true" />
                        )}
                      </span>
                      <span className={s.profileMode}>{k.mode}</span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Day header: label + hotel badges, summary, did-you-know, weather. */}
              <div className={s.dayHead}>
                <div className={s.badges}>
                  <span className={`${s.badge} ${s.badgeDay}`}>{sim.day.label}</span>
                  <span className={`${s.badge} ${s.badgeHotel}`}>
                    <Icon name="map" />
                    {sim.day.hotel}
                  </span>
                </div>
                <p className={s.daySummary}>{sim.day.summary}</p>
                <p className={s.didYouKnow}>
                  <span className={s.dykLabel}>Did you know?</span> {sim.day.didYouKnow}
                </p>
                <p className={s.weather}>{sim.day.weather}</p>
              </div>

              {/* The day itself: moments -> activity cards (re-keyed so each
                  profile's day animates in). */}
              <div role="tabpanel" aria-label={`${kid.name}'s day`} key={active} className={s.day}>
                {kid.moments.map((m, i) => (
                  <section
                    key={m.title}
                    className={s.moment}
                    style={{ animationDelay: `${i * 110}ms` }}
                  >
                    <div className={s.momentHead}>
                      <span className={s.slot}>{m.slot}</span>
                      <span className={s.momentPlace}>{m.place}</span>
                      <span className={s.momentTime}>
                        <Icon name="clock" />
                        {m.time}
                      </span>
                    </div>

                    <article className={s.act}>
                      <p className={s.actTitle}>{m.title}</p>
                      <p className={s.actDesc}>{m.desc}</p>
                      {m.wow && <p className={s.actWow}>Wow fact: {m.wow}</p>}
                      {m.readAloud && (
                        <p className={s.readAloud}>
                          <Icon name="sound" />
                          Read aloud for {kid.name}
                        </p>
                      )}
                      {m.challenge && (
                        <div className={`${s.challenge} ${CHALLENGE[m.challenge.type] ?? ''}`}>
                          <span className={s.chType}>{m.challenge.type}</span>
                          <span className={s.chPrompt}>{m.challenge.prompt}</span>
                        </div>
                      )}
                      {m.meal && <MealCard meal={m.meal} />}
                    </article>
                  </section>
                ))}
              </div>
            </>
          ) : (
            <GrownupsView />
          )}

          {/* Persistent trust flags. */}
          <div className={s.flags}>
            {sim.flags.map((f) => (
              <span key={f.label} className={s.flag}>
                <Icon name={f.icon} />
                {f.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className={s.caption}>{sim.caption}</figcaption>
    </figure>
  );
}

/** The allergy meal card: the centrepiece of the real FE renderer, condensed. */
function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className={s.meal}>
      <div className={s.mealHead}>
        <span className={s.mealFlag}>
          <span className={s.flagDot} aria-hidden="true" />
          {meal.allergyLabel}
        </span>
        <span className={s.mealVenue}>{meal.venue}</span>
      </div>

      <p className={s.mealRowTitle}>What we checked</p>
      <ul className={s.mealList}>
        {meal.checked.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <p className={s.mealRowTitle}>Confirm on the day</p>
      <ul className={s.mealList}>
        {meal.confirm.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <div className={s.stalls}>
        {meal.stalls.map((st) => (
          <span
            key={st.name}
            className={`${s.stall} ${st.risk === 'flagged' ? s.stallFlagged : s.stallLower}`}
          >
            {st.name} · {st.label}
          </span>
        ))}
      </div>

      <div className={s.askKitchen}>
        <p className={s.askLabel}>Ask the kitchen</p>
        <p className={s.askPhrase}>{meal.ask.phrase}</p>
        <p className={s.askEnglish}>{meal.ask.english}</p>
        <p className={s.askLang}>{meal.ask.language}</p>
      </div>
    </div>
  );
}

/** The Grown-ups view: PIN note, allergy protocol, the day's logistics. */
function GrownupsView() {
  const g = sim.grownups;
  return (
    <div role="tabpanel" aria-label="Grown-ups view" className={s.grownups}>
      <p className={s.lockNote}>
        <Icon name="shield" />
        {g.lockNote}
      </p>

      <div className={s.protocol}>
        <span className={s.protocolLabel}>Allergy protocol</span>
        <p className={s.protocolBody}>{g.protocol}</p>
      </div>

      <div className={s.logistics}>
        {g.logistics.map((row) => (
          <div key={row.label} className={s.logRow}>
            <span className={s.logIcon}>
              <Icon name={row.icon} />
            </span>
            <span className={s.logText}>
              <span className={s.logLabel}>{row.label}</span>
              <span className={s.logValue}>{row.value}</span>
            </span>
          </div>
        ))}
        <div className={`${s.logRow} ${s.logAllergy}`}>
          <span className={s.logIcon}>
            <Icon name="shield" />
          </span>
          <span className={s.logText}>
            <span className={s.logLabel}>Allergy</span>
            <span className={s.logValue}>{g.allergy}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
