import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animation';

interface ToolCardProps {
  name: string;
  category: string;
  description: string;
}

export function ToolCard({ name, category, description }: ToolCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.fadeIn}
      className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-soft transition hover:-translate-y-1 hover:border-primary/30"
    >
      <span className="text-xs uppercase tracking-[0.35em] text-slate-400">{category}</span>
      <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.div>
  );
}
