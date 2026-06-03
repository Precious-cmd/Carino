import { Section } from '@/components/atoms/Section';
import { Container } from '@/components/atoms/Container';
import { AnimatedHeading } from '@/components/atoms/AnimatedHeading';
import { ContactForm } from '@/components/organisms/ContactForm';
import { siteConfig } from '@/config/appConfig';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-slate-950/10">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[1.25fr_0.9fr] xl:items-start">
          <div>
            <AnimatedHeading
              label="Contact"
              title="Start your premium creative production journey with Carino Studio"
              description="Send a brief, book a discovery call, or ask how we can elevate your next campaign with cinematic brand storytelling and fast, AI-augmented delivery."
            />

            <div className="mt-12 space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Studio Contact</p>
                <p className="text-2xl font-semibold text-white">{siteConfig.email}</p>
                <p className="text-sm text-slate-400">{siteConfig.phone}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Services</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Brand films, social launches, product reels, editing, and AI-enabled campaign content.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Response</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">We typically reply within 24 hours and can fast-track urgent launch requests.</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
