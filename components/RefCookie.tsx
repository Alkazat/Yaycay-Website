'use client';

import { useEffect } from 'react';
import { setRefCookie } from '@/lib/ref';

/** Persists the affiliate code as a functional cookie when the landing renders. */
export function RefCookie({ code }: { code: string }) {
  useEffect(() => {
    setRefCookie(code);
  }, [code]);
  return null;
}
