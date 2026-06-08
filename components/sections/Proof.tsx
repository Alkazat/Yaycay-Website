import { proof } from '@/lib/content';
import s from './sections.module.css';

export function Proof() {
  return (
    <section className="section" aria-labelledby="proof-title">
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">Proof</p>
          <h2 id="proof-title" className={s.sectionTitle}>
            {proof.title}
          </h2>
        </div>
        <div className={s.statRow}>
          {proof.stats.map((stat) => (
            <div key={stat.label} className={s.stat}>
              <div className={s.statValue}>{stat.value}</div>
              <div className={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className={s.quoteGrid}>
          {proof.testimonials.map((t) => (
            <figure key={t.name} className={s.quote}>
              <blockquote className={s.quoteText}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className={s.quoteWho}>
                <span className={s.quoteName}>{t.name}</span>, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
