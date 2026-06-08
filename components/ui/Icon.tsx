/** A tiny set of outlined icons for the wedge cards. Decorative, hidden from a11y. */

const paths: Record<string, JSX.Element> = {
  sparkle: (
    <path d="M12 3l2.2 5.3L20 10l-5.3 2.2L12 18l-2.2-5.8L4 10l5.8-1.7L12 3z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  book: (
    <>
      <path d="M5 5a2 2 0 0 1 2-2h11v15H7a2 2 0 0 0-2 2V5z" />
      <path d="M5 19a2 2 0 0 0 2 2h11" />
    </>
  ),
};

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
