'use client';

import { useEffect, type ReactNode } from 'react';
import { createSmoothScroll } from '@/lib/smoothScroll';

interface GlobalProvidersProps {
  children: ReactNode;
}

export function GlobalProviders({ children }: GlobalProvidersProps) {
  useEffect(() => {
    createSmoothScroll();
  }, []);

  return <>{children}</>;
}
