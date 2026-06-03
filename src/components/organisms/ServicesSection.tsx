import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { Container } from '@/components/atoms/Container';
import { Section } from '@/components/atoms/Section';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { serviceItems } from '@/data/services';

export function ServicesSection() {
  return (
    <Section id="services" className="bg-background">
      <Container>
        <AnimatedHeading
          label="Services"
          title="High-end Creative Services for Brand, Social, and Campaign Video"
          description="A premium service portfolio tailored to modern brands and agencies seeking AI-powered video production and polished editing work."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              accent={service.accent as 'primary' | 'accent' | 'highlight'}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
