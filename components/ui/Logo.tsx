import Image from 'next/image';
import styles from './Logo.module.css';

/** Brand marks keyed by variant. `ratio` is the asset's height / width. */
const MARKS = {
  lockup: { src: '/brand/yaycay-logo.png', ratio: 968 / 1212 },
  wordmark: { src: '/brand/yaycay-wordmark.png', ratio: 974 / 1400 },
  glyph: { src: '/brand/yaycay-glyph.png', ratio: 1 },
} as const;

export type LogoVariant = keyof typeof MARKS;

/**
 * The Yaycay brand mark. Defaults to the box-art lockup (diamond shield badge +
 * bubble wordmark + ribbon). Pass `variant="wordmark"` for tight horizontal
 * bars, or `variant="glyph"` for compact/square spots. See BRAND-ASSETS.md for
 * which mark belongs where.
 */
export function Logo({
  variant = 'lockup',
  width = 124,
  className,
  priority = true,
}: {
  variant?: LogoVariant;
  width?: number;
  className?: string;
  priority?: boolean;
}) {
  const mark = MARKS[variant];
  return (
    <Image
      src={mark.src}
      alt="Yaycay"
      width={width}
      height={Math.round(width * mark.ratio)}
      className={[styles.logo, className].filter(Boolean).join(' ')}
      priority={priority}
    />
  );
}
