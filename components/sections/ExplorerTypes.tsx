import Link from 'next/link';
import { explorerTypes } from '@/lib/content';
import s from './ExplorerTypes.module.css';

const TONE: Record<string, string> = {
  sun: s.toneSun,
  sky: s.toneSky,
  coral: s.toneCoral,
  royal: s.toneRoyal,
};

/** Renders one experience line with its lead phrase emphasised. */
function Experience({ text }: { text: string }) {
  const idx = text.indexOf('. ');
  if (idx === -1) return <li className={s.exp}>{text}</li>;
  return (
    <li className={s.exp}>
      <strong>{text.slice(0, idx + 1)}</strong> {text.slice(idx + 2)}
    </li>
  );
}

export function ExplorerTypes() {
  return (
    <section id="explorer-types" className="section" aria-labelledby="et-title">
      <div className="container">
        <div className={s.head}>
          <p className="eyebrow">{explorerTypes.eyebrow}</p>
          <h2 id="et-title" className={s.title}>
            {explorerTypes.title}
          </h2>
          <p className="lead">{explorerTypes.intro}</p>
        </div>

        <div className={s.grid}>
          {explorerTypes.types.map((t) => {
            const card = t as typeof t & { href?: string; hrefLabel?: string };
            return (
              <article key={t.name} className={`${s.card} ${TONE[t.tone] ?? s.toneSky}`}>
                <span className={s.badge} aria-hidden="true">
                  {t.badge}
                </span>
                <div className={s.cardHead}>
                  <h3 className={s.name}>{t.name}</h3>
                  <span className={s.age}>{t.age}</span>
                </div>
                {/* The promise comes first; the experiences below back it up. */}
                <p className={s.promise}>{t.promise}</p>
                <ul className={s.expList}>
                  {t.experiences.map((e) => (
                    <Experience key={e} text={e} />
                  ))}
                </ul>
                {card.href && (
                  <Link className={s.cardLink} href={card.href}>
                    {card.hrefLabel} &rarr;
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <div className={s.notes}>
          <div className={`${s.note} ${s.noteAccess}`}>
            <h3 className={s.noteTitle}>{explorerTypes.access.title}</h3>
            <p className={s.noteBody}>{explorerTypes.access.body}</p>
          </div>
          <div className={`${s.note} ${s.noteGrows}`}>
            <h3 className={s.noteTitle}>{explorerTypes.grows.title}</h3>
            <p className={s.noteBody}>{explorerTypes.grows.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
