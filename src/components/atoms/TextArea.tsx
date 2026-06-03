import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
}

export function TextArea({ label, helperText, className, ...props }: TextAreaProps) {
  return (
    <label className="space-y-2 text-sm text-slate-100">
      <span className="font-semibold text-slate-200">{label}</span>
      <textarea
        className={cn(
          'min-h-[140px] w-full rounded-[1.75rem] border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {helperText ? <span className="text-xs text-slate-400">{helperText}</span> : null}
    </label>
  );
}
