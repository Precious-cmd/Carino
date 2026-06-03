import { Button } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { Navbar } from '@/components/molecules/Navbar';
import { Footer } from '@/components/molecules/Footer';
import { SectionPlaceholder } from '@/components/molecules/SectionPlaceholder';

export function HomePageTemplate() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main className="space-y-24 py-16">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.2),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.14),transparent_30%)]" />
          <Container className="relative z-10 py-32">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">AI Video Creation & Professional Video Editing</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Creating Scroll-Stopping Videos With AI & Professional Editing
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Product Ads • UGC Videos • Meta Ads • AI Commercials • Course Videos • YouTube Content
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>View Portfolio</Button>
                <Button variant="secondary">Start A Project</Button>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <SectionPlaceholder name="Services Section" description="Premium interactive service cards and luxury service messaging." />
        </Container>

        <Container>
          <SectionPlaceholder name="Portfolio Showcase" description="Filterable, data-driven portfolio with hover preview architecture." />
        </Container>

        <Container>
          <SectionPlaceholder name="Featured Projects" description="Case study layout foundation for project storytelling and creative depth." />
        </Container>

        <Container>
          <SectionPlaceholder name="Tools & Technology" description="Tool stack layout for AI, editing, and voice audio technologies." />
        </Container>

        <Container>
          <SectionPlaceholder name="Workflow" description="Visual workflow stage architecture for production storytelling." />
        </Container>

        <Container>
          <SectionPlaceholder name="Testimonials" description="Placeholder testimonials that are easy to update with new content." />
        </Container>

        <Container>
          <SectionPlaceholder name="Contact" description="Contact section architecture for email, WhatsApp, socials, and inquiry form." />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
