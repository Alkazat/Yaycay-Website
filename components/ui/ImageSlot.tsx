import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';
import s from './ImageSlot.module.css';

type Source = 'app-screenshot' | 'nanobanana' | 'founder-photo';
type Frame = 'phone' | 'browser' | 'none';

export interface ImageSlotProps {
  /** Where the final asset lives, e.g. /media/home/hero-chat.png */
  src: string;
  /** Final, production alt text. Written as the real definition, not the brief. */
  alt: string;
  /** Aspect ratio of the container, e.g. "16 / 10", "9 / 16", "4 / 3". */
  ratio?: string;
  /** Who sources it: an in-app screenshot, or a Nanobanana (AI) image. */
  source: Source;
  /** Optional device/browser chrome for UI screenshots. */
  frame?: Frame;
  /** The full brief: a screenshot instruction (app) or an image prompt (nanobanana). */
  brief: string;
  className?: string;
}

const BADGE: Record<Source, string> = {
  'app-screenshot': 'App screenshot',
  nanobanana: 'Nanobanana image',
  'founder-photo': 'Founder photo (real, with consent)',
};

/** True when the asset has actually been supplied under public/. */
function assetExists(src: string): boolean {
  if (!src.startsWith('/')) return false;
  try {
    return existsSync(join(process.cwd(), 'public', src.replace(/^\//, '')));
  } catch {
    return false;
  }
}

/**
 * Renders the real image once it exists under public/, otherwise a
 * self-documenting placeholder that reserves the correct space and carries the
 * production alt plus the full sourcing brief (so the preview reads as an
 * annotated shot list). Existence is resolved at build time; this is a server
 * component, so every importer must be a server component too.
 */
export function ImageSlot({
  src,
  alt,
  ratio = '16 / 10',
  source,
  frame = 'none',
  brief,
  className,
}: ImageSlotProps) {
  const frameClass = frame === 'phone' ? s.phone : frame === 'browser' ? s.browser : '';

  if (assetExists(src)) {
    return (
      <figure
        className={[s.slot, frameClass, className].filter(Boolean).join(' ')}
        style={{ aspectRatio: ratio }}
        data-source={source}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className={s.img}
        />
      </figure>
    );
  }

  return (
    <figure
      className={[s.slot, s.pending, frameClass, className].filter(Boolean).join(' ')}
      data-src={src}
      data-source={source}
      data-brief={brief}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={alt}
    >
      <div className={s.inner}>
        <span
          className={`${s.badge} ${
            source === 'nanobanana'
              ? s.badgeNano
              : source === 'founder-photo'
                ? s.badgeFounder
                : s.badgeApp
          }`}
        >
          {BADGE[source]}
        </span>
        <p className={s.alt}>{alt}</p>
        <p className={s.brief}>{brief}</p>
        <code className={s.path}>{src}</code>
      </div>
    </figure>
  );
}
