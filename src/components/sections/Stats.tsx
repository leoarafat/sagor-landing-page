import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { statsData } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  return (
    <section ref={ref} className="section-pad relative">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-card/80 to-bg-800/80 p-8 backdrop-blur-2xl sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-10 bg-radial-glow opacity-70" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4"
          >
            {statsData.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} variants={fadeUp} className="group text-center">
                  <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-glow/10 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 text-accent-glow" />
                  </span>
                  <div className="font-display text-4xl font-bold sm:text-5xl">
                    <span className="gradient-text">
                      {inView ? (
                        <CountUp end={s.value} duration={2.4} separator="," />
                      ) : (
                        0
                      )}
                    </span>
                    <span className="gradient-text">{s.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
