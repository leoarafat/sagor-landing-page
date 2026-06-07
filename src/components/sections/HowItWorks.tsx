import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { howSteps } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps to a"
          highlight="worldwide release"
          description="No paperwork. No back-and-forth. From masters to streams in less time than it takes to mix the next track."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px lg:block">
            <div className="mx-12 h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          </div>

          <motion.ol
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {howSteps.map((s) => (
              <motion.li key={s.step} variants={fadeUp} className="group relative">
                <div className="relative mx-auto grid h-24 w-24 place-items-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-glow/10 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
                  <div className="relative grid h-24 w-24 place-items-center rounded-full border border-accent/30 bg-bg-900 shadow-glow-sm">
                    <span className="font-display text-3xl font-bold gradient-text">{s.step}</span>
                  </div>
                </div>
                <h3 className="mt-6 text-center font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-center text-sm text-muted">{s.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
