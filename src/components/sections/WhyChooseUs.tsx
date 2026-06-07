import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { whyChooseUs } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why SM Sound India"
          title="The distribution partner"
          highlight="artists actually love"
          description="Built by music people, for music people. Every feature is designed to put more money — and control — back in your hands."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="card-glass group relative overflow-hidden p-7"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-glow/10 ring-1 ring-white/10 transition-all duration-500 group-hover:from-accent/40 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-accent-glow" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
