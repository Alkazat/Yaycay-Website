'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { home } from '@/lib/content';
import s from './HeroSim.module.css';

const sim = home.heroSim;
const ACCENT: Record<string, string> = {
  sky: s.sky,
  sun: s.sun,
  meadow: s.meadow,
  royal: s.royal,
};
const TAG: Record<string, string> = {
  'Spot it': s.tagSpot,
  Quiz: s.tagQuiz,
  Photo: s.tagPhoto,
  Allergy: s.tagAllergy,
};

type Phase = 'query' | 'building' | 'plan';

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
 *   1. a floating query (destination + people / date / days),
 *   2. the AI "building" the trip (an animated orb + cycling status lines),
 *   3. the finished plan: a day card with a tab per child plus the grown-ups view.
 *
 * Server-renders the *complete* plan (so it is meaningful with no JS and paints
 * fast). After hydration, and only when motion is allowed, it replays the whole
 * sequence and then auto-cycles the tabs until the visitor clicks one.
 */
export function HeroSim() {
  const reduced = useReducedMotion();
  // SSR/initial = the finished plan (no hydration mismatch, good LCP).
  const [typed, setTyped] = useState(sim.query);
  const [fieldsIn, setFieldsIn] = useState(true);
  const [phase, setPhase] = useState<Phase>('plan');
  const [buildLine, setBuildLine] = useState(0);
  const [active, setActive] = useState(0);
  const [userControlled, setUserControlled] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // The build replay. Skipped entirely under reduced motion.
  useEffect(() => {
    if (reduced) return;
    const t = timers.current;
    const push = (fn: () => void, ms: number) => t.push(setTimeout(fn, ms));

    setTyped('');
    setFieldsIn(false);
    setPhase('query');
    setActive(0);
    setBuildLine(0);
    const q = sim.query;
    for (let i = 1; i <= q.length; i++) push(() => setTyped(q.slice(0, i)), 320 + i * 90);
    const afterType = 320 + q.length * 90 + 200;
    push(() => setFieldsIn(true), afterType);
    push(() => setPhase('building'), afterType + 800);
    push(() => setPhase('plan'), afterType + 800 + 2300);

    return () => {
      t.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduced]);

  // Cycle the "building" status lines while that phase is showing.
  useEffect(() => {
    if (reduced || phase !== 'building') return;
    const id = setInterval(
      () => setBuildLine((n) => (n + 1) % sim.building.lines.length),
      850,
    );
    return () => clearInterval(id);
  }, [reduced, phase]);

  // Auto-cycle the tabs once the plan is shown, until the visitor takes over.
  useEffect(() => {
    if (reduced || phase !== 'plan' || userControlled) return;
    const id = setInterval(() => setActive((a) => (a + 1) % sim.kids.length), 2800);
    return () => clearInterval(id);
  }, [reduced, phase, userControlled]);

  const selectKid = (i: number) => {
    setUserControlled(true);
    setActive(i);
  };

  const kid = sim.kids[active]!;
  const caretOn = !reduced && phase === 'query' && typed.length < sim.query.length;
  const label = (k: (typeof sim.kids)[number]) => (k.age != null ? `${k.name} (${k.age})` : k.name);
  const show = (p: Phase) => (phase === p ? s.show : '');

  return (
    <figure
      className={s.wrap}
      aria-label={`A demonstration of Yaycay building a ${sim.query} trip: a separate day for ${sim.kids
        .map(label)
        .join(', ')}, with every meal allergy-checked.`}
    >
      <div className={s.stage}>
        {/* Phase 1 — the floating query */}
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

        {/* Phase 2 — the AI building the trip */}
        <div className={`${s.layer} ${s.building} ${show('building')}`} aria-hidden="true">
          <p className={s.buildTitle}>{sim.building.title}…</p>
          <span className={s.orb}>
            <Icon name="sparkle" />
          </span>
          <p className={s.buildLine}>{sim.building.lines[buildLine]}</p>
        </div>

        {/* Phase 3 — the finished plan */}
        <div className={`${s.layer} ${s.plan} ${show('plan')}`}>
          <div className={s.cardHead}>
            <span className={s.cardTitle}>
              {sim.card.day} in {sim.card.place}
            </span>
            <span className={s.builtBy}>{sim.card.builtBy}</span>
          </div>

          <div className={s.tabs} role="tablist" aria-label="Each day in the plan">
            {sim.kids.map((k, i) => (
              <button
                key={k.name}
                type="button"
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={`${s.tab} ${ACCENT[k.accent]} ${i === active ? s.tabActive : ''}`}
                onClick={() => selectKid(i)}
              >
                <span className={s.tabDot} aria-hidden="true" />
                {k.name}
                {k.age != null && <span className={s.tabAge}>· {k.age}</span>}
              </button>
            ))}
          </div>

          <div role="tabpanel" aria-label={`${label(kid)} day`} key={active} className={s.day}>
            {kid.day.map((a, i) => (
              <article key={a.title} className={s.act} style={{ animationDelay: `${i * 110}ms` }}>
                <div className={s.actTop}>
                  <span className={s.actTime}>{a.time}</span>
                  <p className={s.actTitle}>{a.title}</p>
                </div>
                <p className={s.actDesc}>{a.desc}</p>
                {a.wow && <p className={s.actWow}>Wow fact: {a.wow}</p>}
                {a.tag && <span className={`${s.actTag} ${TAG[a.tag] ?? ''}`}>{a.tag}</span>}
              </article>
            ))}
          </div>

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
