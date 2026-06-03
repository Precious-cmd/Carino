import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animation';

interface TestimonialCardProps {
  clientName: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export function TestimonialCard({ clientName, role, company, quote, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.fadeIn}
      className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft"
    >
      <div className="mb-6 text-slate-300">“{quote}”</div>
      <div className="flex items-center gap-4 pt-4">
        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-900">
          <img src={image} alt={clientName} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-white">{clientName}</p>
          <p className="text-sm text-slate-400">{role} • {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
