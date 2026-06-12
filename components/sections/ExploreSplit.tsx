import Link from 'next/link';
import { explore } from '@/lib/content';
import s from './sections.module.css';

const TONE: Record<string, string> = {
  sun: s.splitSun,
  sky: s.splitSky,
};

export function ExploreSplit() {
  return (
    <section className="section" aria-labelledby="explore-title">
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">Two audiences, one app</p>
          <h2 id="explore-title" className={s.sectionTitle}>
            {explore.title}
          </h2>
          <p className="lead">{explore.intro}</p>
        </div>
        <div className={s.splitGrid}>
          {explore.cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`${s.splitCard} ${TONE[card.tone] ?? s.splitSky}`}
            >
              <p className={s.splitEyebrow}>{card.eyebrow}</p>
              <h3 className={s.splitTitle}>{card.title}</h3>
              <p className={s.splitBody}>{card.body}</p>
              <span className={s.splitCta}>
                {card.cta}
                <span aria-hidden="true"> &rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
