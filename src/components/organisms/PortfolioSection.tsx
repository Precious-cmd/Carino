'use client';

import { useMemo, useState } from 'react';
import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { PortfolioCard } from '@/components/molecules/PortfolioCard';
import { portfolioItems } from '@/data/portfolio';

const defaultCategory = 'All';

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(portfolioItems.map((item) => item.category)));
    return [defaultCategory, ...unique];
  }, []);

  const filteredProjects = useMemo(
    () => (activeCategory === defaultCategory ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  return (
    <Section id="portfolio" className="bg-slate-950/40">
      <Container>
        <AnimatedHeading
          label="Portfolio"
          title="Filterable Case Examples That Feel Premium and Cinematic"
          description="Explore our AI-powered video campaigns, social-first content, and creative storytelling across categories."
          center
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? 'border-primary bg-primary/10 text-white'
                  : 'border-white/10 bg-slate-950/70 text-slate-300 hover:border-primary/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
