import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { FeaturedProjectCard } from '@/components/molecules/FeaturedProjectCard';
import { featuredProjects } from '@/data/featuredProjects';

export function FeaturedProjectsSection() {
  return (
    <Section id="featured-projects" className="bg-background">
      <Container>
        <AnimatedHeading
          label="Featured Projects"
          title="High-Impact Project Stories with AI and Creative Precision"
          description="Explore select case studies built to showcase the studio’s premium video strategy, editing craft, and AI-enabled production approach."
          center
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
