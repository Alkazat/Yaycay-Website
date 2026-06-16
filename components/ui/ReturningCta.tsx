'use client';

import { Button } from '@/components/ui/Button';
import { useReturningUser } from '@/lib/returningUser';
import { SITE } from '@/lib/site';

type Variant = 'cta' | 'primary' | 'ghost';
type Size = 'md' | 'lg';

const RETURN_LABEL: Record<'planning' | 'travelling', string> = {
  planning: 'Keep planning',
  travelling: 'Keep travelling',
};

/**
 * The primary call to action. For a returning, signed-in visitor (detected via
 * the cross-app `yc_state` hint cookie) it deep-links straight back into the app
 * with a "Keep planning / travelling" label; for everyone else it is the normal
 * default CTA (e.g. "Build your free day").
 *
 * Progressive enhancement: the default renders server-side and only swaps after
 * hydration, so the static markup and SEO are untouched. Signed-out visitors
 * never see anything change.
 */
export function ReturningCta({
  defaultLabel,
  defaultHref,
  variant = 'cta',
  size,
  className,
}: {
  defaultLabel: string;
  defaultHref: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const { returning, phase } = useReturningUser();

  if (returning && phase) {
    const appTrips = `${SITE.appUrl.replace(/\/$/, '')}/trips`;
    return (
      <Button href={appTrips} variant={variant} size={size} className={className}>
        {RETURN_LABEL[phase]}
      </Button>
    );
  }

  return (
    <Button href={defaultHref} variant={variant} size={size} className={className}>
      {defaultLabel}
    </Button>
  );
}
