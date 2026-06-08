import styles from './Logo.module.css';

/** Wordmark with the sun motif. SVG so it stays crisp and weighs almost nothing. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <svg
        className={styles.mark}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="16" cy="16" r="8" fill="var(--brand-cta)" stroke="var(--ink)" strokeWidth="2.5" />
        <g stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="16" y1="26" x2="16" y2="30" />
          <line x1="2" y1="16" x2="6" y2="16" />
          <line x1="26" y1="16" x2="30" y2="16" />
          <line x1="6" y1="6" x2="9" y2="9" />
          <line x1="23" y1="23" x2="26" y2="26" />
          <line x1="26" y1="6" x2="23" y2="9" />
          <line x1="9" y1="23" x2="6" y2="26" />
        </g>
      </svg>
      <span className={styles.word}>Yaycay</span>
    </span>
  );
}
