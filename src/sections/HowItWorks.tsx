import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { steps } from '../data/steps';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="From your studio to every store in four steps"
          subtitle="No label, no middlemen, no paperwork. Releasing worldwide takes minutes."
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-[12%] right-[12%] top-9 hidden h-px origin-left bg-gradient-to-r from-accent/20 via-glow to-accent/20 lg:block"
          />

          <motion.ol
            variants={staggerContainer(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step, index) => (
              <motion.li key={step.title} variants={fadeUp} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl border border-accent/30 bg-night-800 text-glow shadow-[0_0_30px_rgba(34,197,94,0.18)]">
                  <step.icon className="h-7 w-7" />
                </span>
                <span className="mt-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-glow">
                  Step {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-body">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
