import { blurReveal } from '../utils/animations';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <Reveal variants={blurReveal} className={`mb-14 flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-glow">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? <p className="text-base leading-relaxed sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  );
}
