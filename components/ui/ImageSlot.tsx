import s from './ImageSlot.module.css';

type Source = 'app-screenshot' | 'nanobanana';
type Frame = 'phone' | 'browser' | 'none';

export interface ImageSlotProps {
  /** Where the final asset will live once supplied, e.g. /media/home/hero-chat.png */
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
};

/**
 * A self-documenting image placeholder. It reserves the correct space and
 * carries the production alt plus a full sourcing brief (data attributes +
 * visible card), so the preview reads as an annotated shot list. Swap for a
 * <next/image> once the asset exists.
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
  return (
    <figure
      className={[s.slot, frame === 'phone' ? s.phone : '', frame === 'browser' ? s.browser : '', className]
        .filter(Boolean)
        .join(' ')}
      data-src={src}
      data-source={source}
      data-brief={brief}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={alt}
    >
      <div className={s.inner}>
        <span className={`${s.badge} ${source === 'nanobanana' ? s.badgeNano : s.badgeApp}`}>
          {BADGE[source]}
        </span>
        <p className={s.alt}>{alt}</p>
        <p className={s.brief}>{brief}</p>
        <code className={s.path}>{src}</code>
      </div>
    </figure>
  );
}
