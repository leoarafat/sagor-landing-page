import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { fadeUp } from '../utils/animations';

interface RevealProps extends PropsWithChildren {
  variants?: Variants;
  className?: string;
  once?: boolean;
  amount?: number;
}

/** Wraps content in a scroll-triggered animation. Renders statically for reduced-motion users. */
export default function Reveal({ children, variants = fadeUp, className, once = true, amount = 0.2 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once, amount }}>
      {children}
    </motion.div>
  );
}
