import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return <div className={cn('mx-auto max-w-7xl px-6 sm:px-8', className)}>{children}</div>;
}
