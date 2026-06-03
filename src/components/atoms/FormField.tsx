import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  helperText?: string;
}

export function FormField({ label, helperText, className, ...props }: FormFieldProps) {
  return (
    <label className="space-y-2 text-sm text-slate-100">
      <span className="font-semibold text-slate-200">{label}</span>
      <input
        className={cn(
          'w-full rounded-[1.75rem] border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {helperText ? <span className="text-xs text-slate-400">{helperText}</span> : null}
    </label>
  );
}
