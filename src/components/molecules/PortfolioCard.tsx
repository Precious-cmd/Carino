import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animation';
import type { PortfolioItem } from '@/types/portfolio';

interface PortfolioCardProps {
  project: PortfolioItem;
  onHoverVideo?: boolean;
}

export function PortfolioCard({ project, onHoverVideo = true }: PortfolioCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.fadeIn}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-card transition hover:-translate-y-1 hover:border-primary/30"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 right-6 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <p className="text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
          <span>{project.clientName}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </motion.article>
  );
}
