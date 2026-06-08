import Image from 'next/image';
import styles from './Logo.module.css';

// Intrinsic size of the box-art lockup asset (assets/brand/yaycay-logo-transparent.png).
const LOGO_RATIO = 968 / 1212;

/**
 * The Yaycay box-art lockup: diamond shield badge + bubble wordmark + ribbon.
 * Rendered from the design-system brand asset so the mark is always on-brand.
 */
export function Logo({ width = 124, className }: { width?: number; className?: string }) {
  return (
    <Image
      src="/brand/yaycay-logo.png"
      alt="Yaycay"
      width={width}
      height={Math.round(width * LOGO_RATIO)}
      className={[styles.logo, className].filter(Boolean).join(' ')}
      priority
    />
  );
}
