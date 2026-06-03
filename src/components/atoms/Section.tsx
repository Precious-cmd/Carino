import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'standard' | 'hero' | 'split';
  id?: string;
}

const sectionVariants = {
  standard: 'py-20',
  hero: 'relative overflow-hidden pb-32 pt-28',
  split: 'py-24 lg:py-32'
};

export function Section({ children, className = '', variant = 'standard', id }: SectionProps) {
  return (
    <section id={id} className={cn(sectionVariants[variant], className)}>
      {children}
    </section>
  );
}
