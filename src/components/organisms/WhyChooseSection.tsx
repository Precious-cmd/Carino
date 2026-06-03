import { Section } from '@/components/atoms/Section';
import { Container } from '@/components/atoms/Container';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { whyChooseItems } from '@/data/whyChoose';

export function WhyChooseSection() {
  return (
    <Section id="why-choose" className="bg-background">
      <Container>
        <AnimatedHeading
          label="Why Choose Carino Studio"
          title="A boutique production studio with premium craft and next-generation speed"
          description="We combine cinematic storytelling, refined post-production, and AI-powered efficiency to deliver content that feels bespoke and performs at scale."
          center
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-2xl transition group-hover:bg-primary/10">
                {item.icon}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-primary">{item.highlight}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
