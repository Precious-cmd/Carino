import Link from 'next/link';
import { Container } from '@/components/atoms/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Container>
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 text-center py-20">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">404</p>
            <h1 className="mt-6 text-5xl font-semibold text-white sm:text-6xl">Page not found</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              The page you are looking for isn’t available yet. Head back to the studio home and discover our premium creative services.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-primary/90"
            >
              Return home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
