import { Container } from '@/components/atoms/Container';
import { Navbar } from '@/components/molecules/Navbar';
import { Footer } from '@/components/molecules/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { PortfolioSection } from '@/components/organisms/PortfolioSection';
import { FeaturedProjectsSection } from '@/components/organisms/FeaturedProjectsSection';
import { ToolsSection } from '@/components/organisms/ToolsSection';
import { WorkflowSection } from '@/components/organisms/WorkflowSection';
import { WhyChooseSection } from '@/components/organisms/WhyChooseSection';
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection';
import { FaqSection } from '@/components/organisms/FaqSection';
import { ContactSection } from '@/components/organisms/ContactSection';

export function HomePageTemplate() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main className="space-y-24 py-16">
        <HeroSection />

        <ServicesSection />

        <PortfolioSection />

        <FeaturedProjectsSection />

        <ToolsSection />

        <WorkflowSection />

        <WhyChooseSection />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
