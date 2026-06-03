'use client';

import { useState } from 'react';
import { Section } from '@/components/atoms/Section';
import { Container } from '@/components/atoms/Container';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { faqItems } from '@/data/faq';

export function FaqSection() {
  const [activeId, setActiveId] = useState<string | null>(faqItems[0]?.id || null);

  return (
    <Section id="faq" className="bg-background">
      <Container>
        <AnimatedHeading
          label="FAQ"
          title="Frequently asked questions for high-end creative collaborations"
          description="Everything you need to know about timelines, process, and what sets Carino Studio apart from typical production partners."
          center
        />

        <div className="mt-16 space-y-4">
          {faqItems.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-white transition hover:bg-slate-900/80"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold">{item.question}</span>
                  <span className={`text-3xl transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>

                {isOpen ? (
                  <div className="border-t border-white/5 bg-slate-950/90 px-6 py-5 text-slate-300">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
