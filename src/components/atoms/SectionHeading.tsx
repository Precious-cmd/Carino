interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}
