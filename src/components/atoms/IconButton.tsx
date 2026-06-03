import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label?: string;
}

export function IconButton({ icon, label, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 p-3 text-slate-100 transition hover:border-primary/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/20',
        className
      )}
      {...props}
    >
      {icon}
      {label ? <span className="ml-2 text-sm font-semibold">{label}</span> : null}
    </button>
  );
}
