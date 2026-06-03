'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { workflowSteps } from '@/data/workflow';
import { animationVariants } from '@/lib/animation';

export function WorkflowSection() {
  return (
    <Section id="workflow" className="bg-background">
      <Container>
        <AnimatedHeading
          label="Creative Workflow"
          title="A Premium Production Path from Concept to Delivery"
          description="A visual workflow that brings every project through strategy, AI production, editorial polish, and launch-ready deliverables." 
          center
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animationVariants.stagger}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={animationVariants.fadeIn}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft transition hover:-translate-y-1"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-primary/10 text-primary text-xl font-semibold">
                {index + 1}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
