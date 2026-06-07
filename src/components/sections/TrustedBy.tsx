import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { trustedLogos } from '../../data/content';

export default function TrustedBy() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const loop = [...trustedLogos, ...trustedLogos];

  return (
    <section ref={ref} className="relative py-16">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted"
        >
          Distributing to the world's biggest platforms
        </motion.p>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16">
            {loop.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex h-12 items-center gap-2 whitespace-nowrap text-lg font-semibold tracking-tight text-white/40 grayscale transition-all duration-500 hover:text-accent-glow hover:grayscale-0"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-xs font-bold uppercase">
                  {name[0]}
                </span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
