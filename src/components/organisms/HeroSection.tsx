import { motion } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import { Container } from '@/components/atoms/Container';
import { CursorFollower } from '@/components/organisms/CursorFollower';
import { animationVariants } from '@/lib/animation';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <CursorFollower />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <span className="hero-particle left-[10%] top-[18%] h-24 w-24" />
        <span className="hero-particle left-[80%] top-[12%] h-16 w-16" />
        <span className="hero-particle left-[75%] top-[70%] h-28 w-28" />
        <span className="hero-particle left-[25%] top-[75%] h-20 w-20" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants.stagger}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <motion.div variants={animationVariants.fadeIn} className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              AI Video Creation & Professional Video Editing
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Creating Scroll-Stopping Videos With AI & Professional Editing
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Product Ads • UGC Videos • Meta Ads • AI Commercials • Course Videos • YouTube Content
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button className="min-w-[180px]" type="button">
                View Portfolio
              </Button>
              <Button variant="secondary" className="min-w-[180px]" type="button">
                Start A Project
              </Button>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-glow backdrop-blur-xl sm:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Studio</p>
                <p className="mt-2 text-2xl font-semibold text-white">Carino Studio</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Audience</p>
                <p className="mt-2 text-2xl font-semibold text-white">Brands, Agencies, Startups</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Deliverables</p>
                <p className="mt-2 text-2xl font-semibold text-white">Premium AI & Editing Videos</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={animationVariants.fadeIn} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-card backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-75" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Featured Output</p>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
                  <img
                    src="/thumbnails/product-ad-01.jpg"
                    alt="Hero preview"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/90 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Video-First</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">Agency Luxe</span>
                </div>
                <p className="text-sm leading-7 text-slate-300">
                  A premium hero preview design to position Carino Studio as the AI-first creative agency for brands and creators.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
