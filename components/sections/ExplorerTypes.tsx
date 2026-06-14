import Link from 'next/link';
import { ImageSlot, type ImageSlotProps } from '@/components/ui/ImageSlot';
import { explorerTypes } from '@/lib/content';
import s from './ExplorerTypes.module.css';

// The explorer-modes illustration set (work-order asset #31), one per type,
// to a single locked flat-spot style.
const TYPE_IMAGES: Record<string, ImageSlotProps> = {
  'Little Explorer': {
    src: '/media/for-kids/mode-little.png',
    alt: 'Flat illustration of a Little Explorer: a small child reaching up to a friendly landmark, with read-aloud sound waves and a sticker star',
    source: 'nanobanana',
    ratio: '3 / 2',
    brief: 'Nanobanana flat spot illustration. Locked style: 2.5px deep-navy line work, flat fills from the Yaycay palette, generous negative space, slight hand-drawn wobble, no gradients. Subject: a tiny child seen from behind (no face) reaching up toward a big friendly landmark, gentle sound-wave marks for read-aloud, one sticker star. Coral and sunshine accents (kid colours).',
  },
  Explorer: {
    src: '/media/for-kids/mode-explorer.png',
    alt: 'Flat illustration of an Explorer: a curious child with a magnifying glass solving a puzzle at a landmark, a star streak above',
    source: 'nanobanana',
    ratio: '3 / 2',
    brief: 'Nanobanana flat spot illustration, same locked style. Subject: a curious 7-to-11 child (back or side view, no face) with a magnifying glass or compass discovering a puzzle clue at a landmark, a small streak of stars above. Sky-blue with coral accents (kid colours).',
  },
  'Big Explorer': {
    src: '/media/for-kids/mode-big.png',
    alt: 'Flat illustration of a Big Explorer: an older kid with headphones and backpack at a complex landmark, a quiz and deep-dive motif',
    source: 'nanobanana',
    ratio: '3 / 2',
    brief: 'Nanobanana flat spot illustration, same locked style. Subject: an older 12-to-16 kid (back view, no face) with headphones and a backpack at a more complex landmark, with a quiz/deep-dive motif (a question mark, a layered fact card). Treated cool, never childish. Blue and coral accents.',
  },
  'Grown Ups': {
    src: '/media/for-kids/mode-grownups.png',
    alt: 'Flat illustration of the Grown-ups command centre: a parent holding the plan with a shield and a PIN keypad',
    source: 'nanobanana',
    ratio: '3 / 2',
    brief: 'Nanobanana flat spot illustration, same locked style. Subject: a parent figure (back/side, no face) holding a clipboard/plan, with a small shield and a four-digit PIN keypad motif. Navy, blue and cream ONLY, no coral or sunshine (grown-up surface, per the palette rule).',
  },
};

const PIN_IMAGE: ImageSlotProps = {
  src: '/media/for-kids/pin-gate.png',
  alt: 'The four-digit PIN screen that unlocks the Grown-ups view',
  source: 'app-screenshot',
  frame: 'phone',
  ratio: '9 / 15',
  brief: 'App screenshot. The Grown-ups PIN gate: a calm four-digit PIN entry shown when a guardian opens the Grown-ups view, with clear "Grown-ups only" framing. No PIN visible. The child-safety speed-bump made concrete.',
};

const GROWS_IMAGE: ImageSlotProps = {
  src: '/media/for-kids/grows-with-child.png',
  alt: 'Flat illustration of one child growing across the three explorer bands, Little to Explorer to Big Explorer',
  source: 'nanobanana',
  ratio: '16 / 9',
  brief: 'Nanobanana flat spot illustration, locked style. Subject: the same child shown three times left to right, growing from Little Explorer to Explorer to Big Explorer (size and gear change) with a simple progression arrow. Playful kid palette. Conveys "grows with your child".',
};

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
                {TYPE_IMAGES[t.name] && (
                  <ImageSlot {...TYPE_IMAGES[t.name]} className={s.typeShot} />
                )}
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
            <ImageSlot {...PIN_IMAGE} className={s.noteShot} />
          </div>
          <div className={`${s.note} ${s.noteGrows}`}>
            <h3 className={s.noteTitle}>{explorerTypes.grows.title}</h3>
            <p className={s.noteBody}>{explorerTypes.grows.body}</p>
            <ImageSlot {...GROWS_IMAGE} className={s.noteShot} />
          </div>
        </div>
      </div>
    </section>
  );
}
