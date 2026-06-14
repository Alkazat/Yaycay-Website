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
 * The hero simulation. Server-renders the *complete* frame (full destination,
 * the plan, Sam's tab active) so it is meaningful with no JS and paints fast.
 * After hydration, and only when motion is allowed, it replays the build once
 * (types the destination, reveals the plan) and then auto-cycles the tabs
 * (Sam → Pip → Theo → Grown-ups) until the visitor takes control by clicking.
 */
export function HeroSim() {
  const reduced = useReducedMotion();
  // SSR/initial = complete frame (no hydration mismatch, good LCP).
  const [typed, setTyped] = useState(sim.query);
  const [revealed, setRevealed] = useState(true);
  const [active, setActive] = useState(0);
  const [userControlled, setUserControlled] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // The build replay. Skipped entirely under reduced motion.
  useEffect(() => {
    if (reduced) return;
    const t = timers.current;
    const push = (fn: () => void, ms: number) => t.push(setTimeout(fn, ms));

    setTyped('');
    setRevealed(false);
    setActive(0);
    const q = sim.query;
    for (let i = 1; i <= q.length; i++) push(() => setTyped(q.slice(0, i)), 320 + i * 90);
    const afterType = 320 + q.length * 90 + 260;
    push(() => setRevealed(true), afterType);

    return () => {
      t.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduced]);

  // Auto-cycle the tabs once the plan is revealed, until the visitor takes over.
  useEffect(() => {
    if (reduced || !revealed || userControlled) return;
    const id = setInterval(() => setActive((a) => (a + 1) % sim.kids.length), 2600);
    return () => clearInterval(id);
  }, [reduced, revealed, userControlled]);

  const selectKid = (i: number) => {
    setUserControlled(true);
    setActive(i);
  };

  const kid = sim.kids[active]!;
  const caretOn = !reduced && typed.length < sim.query.length;
  const label = (k: (typeof sim.kids)[number]) => (k.age != null ? `${k.name} (${k.age})` : k.name);

  return (
    <figure
      className={s.wrap}
      aria-label={`A demonstration of Yaycay building a ${sim.query} trip: a separate day for ${sim.kids
        .map(label)
        .join(', ')}, with every meal allergy-checked.`}
    >
      <div className={s.frame}>
        {/* Search bar that types the destination */}
        <div className={s.bar} aria-hidden="true">
          <span className={s.barIcon}>
            <Icon name="map" />
          </span>
          <span className={s.barText}>
            {typed || <span className={s.placeholder}>{sim.placeholder}</span>}
            {caretOn && <span className={s.caret} />}
          </span>
          <span className={`${s.barCta} ${revealed ? s.barCtaDone : ''}`}>
            {revealed ? 'Done' : 'Build'}
          </span>
        </div>

        {/* Trip chips */}
        <div className={`${s.chips} ${revealed ? s.in : ''}`} aria-hidden="true">
          {sim.chips.map((c) => (
            <span key={c} className={s.chip}>
              {c}
            </span>
          ))}
        </div>

        {/* The plan: a day card with a tab per child plus the grown-ups view */}
        <div className={`${s.plan} ${revealed ? s.in : ''}`}>
          <div className={s.cardHead} aria-hidden="true">
            <span className={s.cardDay}>{sim.card.day}</span>
            <span className={s.cardDate}>{sim.card.date}</span>
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

          <div role="tabpanel" aria-label={`${label(kid)} day`}>
            <ul key={active} className={s.items}>
              {kid.items.map((it, i) => {
                const flagged = /flag/i.test(it);
                return (
                  <li key={it} className={s.item} style={{ animationDelay: `${i * 90}ms` }}>
                    <span className={`${s.itemDot} ${ACCENT[kid.accent]}`} aria-hidden="true" />
                    <span className={s.itemText}>{it}</span>
                    {flagged && (
                      <span className={s.itemFlag}>
                        <Icon name="shield" /> flagged
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
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
