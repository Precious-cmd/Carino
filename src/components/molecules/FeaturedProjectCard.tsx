import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { animationVariants } from '@/lib/animation';
import type { PortfolioItem } from '@/types/portfolio';

interface FeaturedProjectCardProps {
  project: PortfolioItem;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const aiTools = project.aiTools ?? [];
  const editingTools = project.editingTools ?? [];
  const deliverables = project.deliverables ?? [];
  const summary = project.summary ?? project.description;
  const goal = project.goal ?? project.description;
  const process = project.process ?? 'Designed with a premium creative workflow and fast AI-assisted review loop.';

  const videoPoster = useMemo(() => project.thumbnail, [project.thumbnail]);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.fadeIn}
      className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 shadow-glow transition hover:-translate-y-1"
    >
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {hovered ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={project.videoUrl}
            poster={videoPoster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
        <div className="absolute left-6 bottom-6 right-6 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{project.category}</p>
          <h3 className="mt-3 text-3xl font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-6 p-8">
        <p className="text-sm leading-7 text-slate-300">{summary}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Project Goal</p>
            <p className="mt-3 text-sm text-slate-300">{goal}</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Creative Process</p>
            <p className="mt-3 text-sm text-slate-300">{process}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">AI Tools</p>
            <p className="mt-3 text-sm text-slate-300">{aiTools.length ? aiTools.join(', ') : 'AI tooling available'}</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Editing Tools</p>
            <p className="mt-3 text-sm text-slate-300">{editingTools.length ? editingTools.join(', ') : 'Editorial suite ready'}</p>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Final Deliverables</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {deliverables.length > 0 ? (
              deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))
            ) : (
              <li className="text-slate-500">Deliverables tailored to your campaign goals.</li>
            )}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
