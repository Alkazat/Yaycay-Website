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
    <header className={s.header}>
      <div className={`container ${s.headerInner}`}>
        <Link href="/homepage" aria-label="Yaycay home">
          <Logo width={108} />
        </Link>
        <nav className={s.headerNav} aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={s.navLink}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button href="/homepage#start" variant="cta">
          Start today, free
        </Button>
      </div>
    </header>
  );
}
