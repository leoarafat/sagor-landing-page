import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
        <div className="absolute -left-32 top-20 h-96 w-96 animate-blob rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-glow/10 blur-[140px] [animation-delay:4s]" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-glow">
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
          {intro ? <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">{intro}</p> : null}
        </div>

        <article className="legal-prose mx-auto mt-14 max-w-3xl rounded-3xl border border-white/[0.08] bg-card/60 p-8 backdrop-blur sm:p-12">
          {children}
        </article>
      </div>
    </section>
  );
}
