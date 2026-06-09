import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { CTA_LABEL } from '@/lib/site';
import s from './sections.module.css';

export function Header() {
  return (
    <header className={s.header}>
      <div className={`container ${s.headerInner}`}>
        <a href="#top" aria-label="Yaycay home" style={{ textDecoration: 'none' }}>
          <Logo />
        </a>
        <nav className={s.headerNav} aria-label="Primary">
          <a className={s.navLink} href="#how-it-works">
            How it works
          </a>
          <a className={s.navLink} href="#destinations">
            Destinations
          </a>
          <a className={s.navLink} href="#pricing">
            Pricing
          </a>
          <Button href="#signup" variant="cta">
            {CTA_LABEL}
          </Button>
        </nav>
      </div>
    </header>
  );
}
