import { Logo } from '@/components/ui/Logo';
import { footer } from '@/lib/content';
import { SITE } from '@/lib/site';
import s from './sections.module.css';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <Logo width={150} />
            <p className={s.footerBlurb}>{footer.blurb}</p>
          </div>
          {footer.columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className={s.footerHeading}>{col.heading}</h2>
              <ul className={s.footerList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={s.footerBottom}>
          <span>
            &copy; {year} {SITE.name}. {SITE.domain}
          </span>
          <span className={s.footerTagline}>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
