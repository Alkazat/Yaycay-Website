import { Icon } from '@/components/ui/Icon';
import s from './sections.module.css';

interface Feature {
  icon: string;
  title: string;
  body: string;
}

/** Generic icon-grid section, reused for the audience pages and the showcase. */
export function FeatureSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  sunk = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Feature[];
  sunk?: boolean;
}) {
  return (
    <section
      id={id}
      className={['section', sunk ? s.howSection : ''].filter(Boolean).join(' ')}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className={s.sectionHead}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`} className={s.sectionTitle}>
            {title}
          </h2>
          {intro && <p className="lead">{intro}</p>}
        </div>
        <div className={s.showcaseGrid}>
          {items.map((item) => (
            <article key={item.title} className={s.showcaseItem}>
              <span className={s.showcaseIcon} aria-hidden="true">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3 className={s.showcaseTitle}>{item.title}</h3>
                <p className={s.showcaseBody}>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
