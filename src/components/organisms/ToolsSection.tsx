import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { ToolCard } from '@/components/molecules/ToolCard';
import { toolItems } from '@/data/tools';

export function ToolsSection() {
  return (
    <Section id="tools" className="bg-slate-950/40">
      <Container>
        <AnimatedHeading
          label="Tools & Technology"
          title="The Creative Stack Behind Every Carino Studio Production"
          description="A curated set of AI, editing, and audio tools that power premium video creation, motion design, and post-production." 
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {toolItems.map((tool) => (
            <ToolCard key={tool.id} name={tool.name} category={tool.category} description={tool.description} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
