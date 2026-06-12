'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import s from './sections.module.css';

const LINKS = [
  { href: '/homepage', label: 'Home' },
  { href: '/for-kids', label: 'For kids' },
  { href: '/for-parents', label: 'For parents' },
  { href: '/pricing', label: 'Pricing' },
];

export function Header() {
  const pathname = usePathname();
  return (
    <div className={s.navStack}>
      <header className={s.header}>
        <div className={`container ${s.headerInner}`}>
          <Link href="/homepage" aria-label="Yaycay home">
            <Logo width={108} />
          </Link>
          <Button href="/homepage#start" variant="cta">
            Start today, free
          </Button>
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
