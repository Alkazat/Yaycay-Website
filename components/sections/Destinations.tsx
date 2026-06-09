import Image from 'next/image';
import { destinations } from '@/lib/content';
import s from './sections.module.css';

const TAG_TONE: Record<string, string> = {
  sun: s.badgeSun,
  meadow: s.badgeMeadow,
  sky: s.badgeSky,
  aqua: s.badgeAqua,
};

export function Destinations() {
  return (
    <section id="destinations" className="section" aria-labelledby="dest-title">
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">{destinations.eyebrow}</p>
          <h2 id="dest-title" className={s.sectionTitle}>
            {destinations.title}
          </h2>
          <p className="lead">{destinations.intro}</p>
        </div>
        <div className={s.destGrid}>
          {destinations.cards.map((card) => (
            <article key={card.id} className={s.destCard}>
              <div className={s.destMedia}>
                <Image
                  src={`/photos/${card.id}.jpg`}
                  alt={card.name}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={s.destImg}
                />
                <span className={`${s.destTag} ${TAG_TONE[card.tone] ?? s.badgeSky}`}>
                  {card.tag}
                </span>
              </div>
              <div className={s.destBody}>
                <h3 className={s.destName}>{card.name}</h3>
                <p className={s.destSub}>{card.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
