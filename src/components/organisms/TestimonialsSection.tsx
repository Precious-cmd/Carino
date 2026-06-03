import { Section } from '@/components/atoms/Section';
import { Container } from '@/components/atoms/Container';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-slate-950/30">
      <Container>
        <AnimatedHeading
          label="Testimonials"
          title="Trusted by premium brands and founders who demand cinematic work"
          description="Our clients value the elevated storycraft, fast delivery, and polished final experience that feels both modern and premium."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              clientName={testimonial.clientName}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
