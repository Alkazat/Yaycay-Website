import { Button } from '@/components/ui/Button';
import { pricing } from '@/lib/content';
import { CTA_LABEL } from '@/lib/site';
import s from './sections.module.css';

export function Pricing() {
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container">
        <div className={s.sectionHead}>
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-title" className={s.sectionTitle}>
            {pricing.title}
          </h2>
          <p className="lead">{pricing.intro}</p>
        </div>
        <div className={s.tierGrid}>
          {pricing.tiers.map((tier) => (
            <article
              key={tier.id}
              className={[s.tier, tier.featured ? s.tierFeatured : '']
                .filter(Boolean)
                .join(' ')}
            >
              <span className={s.tierBadge}>{tier.badge}</span>
              <h3 className={s.tierName}>{tier.name}</h3>
              <p className={s.tierPrice}>{tier.price}</p>
              <p className={s.tierTagline}>{tier.tagline}</p>
              <ul className={s.tierFeatures}>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className={s.tierCta}>
                <Button
                  href="#signup"
                  variant={tier.featured ? 'cta' : 'primary'}
                  className="full"
                >
                  {CTA_LABEL}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className={s.pricingFootnote}>{pricing.footnote}</p>
      </div>
    </section>
  );
}
