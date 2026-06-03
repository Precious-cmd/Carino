import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animation';

interface ServiceCardProps {
  title: string;
  description: string;
  accent?: 'primary' | 'accent' | 'highlight';
}

const variantStyles = {
  primary: 'border-primary/20 bg-gradient-to-br from-slate-950 to-slate-900',
  accent: 'border-accent/20 bg-gradient-to-br from-slate-950 to-slate-900',
  highlight: 'border-highlight/20 bg-gradient-to-br from-slate-950 to-slate-900'
};

export function ServiceCard({ title, description, accent = 'primary' }: ServiceCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.fadeIn}
      className={`group rounded-[2rem] border p-6 shadow-soft transition hover:-translate-y-1 ${variantStyles[accent]}`}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-primary ring-1 ring-primary/20">
        <span className="text-xl">•</span>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
