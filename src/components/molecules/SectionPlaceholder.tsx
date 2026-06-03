interface SectionPlaceholderProps {
  name: string;
  description: string;
}

export function SectionPlaceholder({ name, description }: SectionPlaceholderProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-soft">
      <h3 className="text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </section>
  );
}
