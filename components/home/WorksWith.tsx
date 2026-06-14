import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { home } from '@/lib/content';
import s from './WorksWith.module.css';

const works = home.heroSim.works;

/** Resolve a partner logo under public/brand/partners/, or null for text fallback. */
function logoSrc(slug: string): string | null {
  for (const ext of ['svg', 'png', 'webp']) {
    const rel = `brand/partners/${slug}.${ext}`;
    if (existsSync(join(process.cwd(), 'public', rel))) return `/${rel}`;
  }
  return null;
}

/**
 * "Bring your own AI" trust banner. Renders the partner logos once they exist
 * under public/brand/partners/<slug>.{svg,png,webp}; until then it shows the
 * names as text, so the banner ships either way.
 */
export function WorksWith() {
  return (
    <div className={s.works}>
      <span className={s.label}>{works.label}</span>
      <ul className={s.list}>
        {works.partners.map((p) => {
          const src = logoSrc(p.slug);
          return (
            <li key={p.slug} className={s.item}>
              {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={p.name} className={s.logo} />
              ) : (
                <span className={s.name}>{p.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
