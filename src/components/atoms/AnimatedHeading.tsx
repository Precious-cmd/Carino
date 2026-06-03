import { motion } from 'framer-motion';
import { animationVariants } from '@/lib/animation';

interface AnimatedHeadingProps {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function AnimatedHeading({ label, title, description, center = false }: AnimatedHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants.stagger}
      className={center ? 'text-center' : ''}
    >
      <motion.p
        variants={animationVariants.fadeIn}
        className="text-xs uppercase tracking-[0.35em] text-slate-400"
      >
        {label}
      </motion.p>
      <motion.h2 variants={animationVariants.fadeIn} className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={animationVariants.fadeIn} className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
