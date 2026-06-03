import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={cn('rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-card', className)}>
      {children}
    </div>
  );
}
