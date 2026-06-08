import { Icon } from '@/components/ui/Icon';
import { howItWorks } from '@/lib/content';
import s from './sections.module.css';

// Box-art glossy tiles: one tone + icon per step.
const STEP_STYLES = [
  { icon: 'compass', tone: s.toneSky },
  { icon: 'calendar', tone: s.toneSun },
  { icon: 'bag', tone: s.toneMeadow },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={`section ${s.howSection}`}
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className={s.sectionTitle}>
            {howItWorks.title}
          </h2>
          <p className="lead">{howItWorks.intro}</p>
        </div>
        <ol className={s.steps} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {howItWorks.steps.map((step, i) => {
            const style = STEP_STYLES[i] ?? STEP_STYLES[0];
            return (
              <li key={step.n} className={s.step}>
                <div className={s.stepIconWrap}>
                  <span className={`${s.stepIcon} ${style.tone}`} aria-hidden="true">
                    <Icon name={style.icon} />
                  </span>
                  <span className={s.stepNumGhost} aria-hidden="true">
                    {step.n}
                  </span>
                </div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepBody}>{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
