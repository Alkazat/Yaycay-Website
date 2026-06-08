import { howItWorks } from '@/lib/content';
import s from './sections.module.css';

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={`section ${s.altSection}`}
      aria-labelledby="how-title"
    >
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">How it works</p>
          <h2 id="how-title" className={s.sectionTitle}>
            {howItWorks.title}
          </h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {howItWorks.intro}
          </p>
        </div>
        <ol className={s.steps} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {howItWorks.steps.map((step) => (
            <li key={step.n} className={s.step}>
              <span className={s.stepNum} aria-hidden="true">
                {step.n}
              </span>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
