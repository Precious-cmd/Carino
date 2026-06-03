import { siteConfig } from '@/config/appConfig';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-2xl font-semibold tracking-[0.18em] text-white">Carino Studio</p>
          <p className="max-w-2xl text-sm leading-7 text-slate-300">
            Premium AI-powered video production and editing for ambitious brands, agencies, and creators who want cinematic storytelling with launch-ready speed.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-sm text-white transition hover:text-primary">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Phone</p>
              <a href={`tel:${siteConfig.phone}`} className="mt-2 block text-sm text-white transition hover:text-primary">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Quick links</p>
            <div className="space-y-3 text-sm text-slate-300">
              <a href="#services" className="block transition hover:text-white">Services</a>
              <a href="#portfolio" className="block transition hover:text-white">Portfolio</a>
              <a href="#testimonials" className="block transition hover:text-white">Testimonials</a>
              <a href="#contact" className="block transition hover:text-white">Contact</a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Follow</p>
            <div className="space-y-3 text-sm text-slate-300">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                Instagram
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                LinkedIn
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Carino Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
