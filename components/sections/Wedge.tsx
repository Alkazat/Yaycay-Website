import { Icon } from '@/components/ui/Icon';
import { wedge } from '@/lib/content';
import s from './sections.module.css';

export function Wedge() {
  return (
    <section className="section" aria-labelledby="wedge-title">
      <div className="container">
        <div className={s.sectionHead}>
          <h2 id="wedge-title" className={s.sectionTitle}>
            {wedge.title}
          </h2>
          <p className="lead">{wedge.intro}</p>
        </div>
        <div className={s.cardGrid}>
          {wedge.cards.map((card) => (
            <article key={card.title} className={s.card}>
              <div className={s.cardIcon}>
                <Icon name={card.icon} />
              </div>
              <h3 className={s.cardTitle}>{card.title}</h3>
              <p className={s.cardBody}>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
