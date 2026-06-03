import type { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

export function Label({ htmlFor, children, className = '' }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-slate-200 ${className}`}>
      {children}
    </label>
  );
}
