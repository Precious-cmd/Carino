import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return <div className={cn('flex flex-wrap items-center gap-4', className)}>{children}</div>;
}
