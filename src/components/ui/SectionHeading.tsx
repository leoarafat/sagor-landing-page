import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../utils/motion';

type Props = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-3xl ${alignClass}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-balance text-base text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
