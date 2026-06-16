'use client';

import { useEffect, useState } from 'react';

export type SessionPhase = 'planning' | 'travelling';

/**
 * Reads the cross-app `yc_state` hint cookie that the app (app.yaycay.ai) sets
 * on the shared `.yaycay.ai` domain while a user is signed in. It is a coarse,
 * PII-free phase, used only to greet returning visitors with a "Keep planning /
 * travelling" CTA that deep-links back into the app.
 *
 * SSR-safe: returns "not returning" until mounted, so the static marketing HTML
 * is unchanged and only returning visitors see the swapped CTA after hydration
 * (no hydration mismatch, since the first client render matches the server).
 */
export function useReturningUser(): { returning: boolean; phase: SessionPhase | null } {
  const [phase, setPhase] = useState<SessionPhase | null>(null);
  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)yc_state=(planning|travelling)/);
    setPhase(m ? (m[1] as SessionPhase) : null);
  }, []);
  return { returning: phase !== null, phase };
}
