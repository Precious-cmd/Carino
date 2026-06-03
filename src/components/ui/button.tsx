import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function UiButton({ className, variant = 'primary', ...props }: UiButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300',
        variant === 'primary'
          ? 'bg-primary text-white shadow-glow hover:bg-blue-500'
          : 'border border-slate-700 bg-slate-950 text-slate-100 hover:border-white',
        className
      )}
      {...props}
    />
  );
}
