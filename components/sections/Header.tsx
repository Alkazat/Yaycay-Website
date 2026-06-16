'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { ReturningCta } from '@/components/ui/ReturningCta';
import { useReturningUser } from '@/lib/returningUser';
import { SITE } from '@/lib/site';
import s from './sections.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/sample-day', label: 'Sample day' },
  { href: '/for-parents', label: 'For parents' },
  { href: '/for-kids', label: 'For kids' },
  { href: '/allergy-safety', label: 'Allergy safety' },
  { href: '/guides', label: 'Destination guides' },
  { href: '/pricing', label: 'Pricing' },
];

export function Header() {
  const pathname = usePathname();
  // Returning, signed-in visitors don't need "Log in"; the CTA itself becomes
  // "Keep planning / travelling" and deep-links back into the app.
  const { returning } = useReturningUser();
  return (
    <div className={s.navStack}>
      <header className={s.header}>
        <div className={`container ${s.headerInner}`}>
          <Link href="/" aria-label="Yaycay home">
            <Logo width={108} />
          </Link>
          <div className={s.headerActions}>
            {!returning && (
              <a href={SITE.loginUrl} className={s.loginLink}>
                Log in
              </a>
            )}
            <ReturningCta defaultLabel="Build your free day" defaultHref="/free-day" variant="cta" />
          </div>
        </div>
      </header>
      {/* Sticky sub-nav: menu items stay visible (scrolls horizontally on phones). */}
      <nav className={s.subNav} aria-label="Primary">
        <div className={`container ${s.subNavInner}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={s.subNavLink}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
