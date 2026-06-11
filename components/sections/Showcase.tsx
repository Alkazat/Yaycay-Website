import { Icon } from '@/components/ui/Icon';
import { showcase } from '@/lib/content';
import s from './sections.module.css';

export function Showcase() {
  return (
    <section id="showcase" className={`section ${s.howSection}`} aria-labelledby="showcase-title">
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">{showcase.eyebrow}</p>
          <h2 id="showcase-title" className={s.sectionTitle}>
            {showcase.title}
          </h2>
          <p className="lead">{showcase.intro}</p>
        </div>
        <div className={s.showcaseGrid}>
          {showcase.items.map((item) => (
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
