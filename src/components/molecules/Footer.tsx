import { siteConfig } from '@/config/appConfig';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Carino Studio. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
