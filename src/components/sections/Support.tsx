import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { supportChannels } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function Support() {
  return (
    <section id="support" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Support"
          title="Real humans."
          highlight="24 hours a day."
          description="Reach our artist success team however suits you — chat, email, or dig into 500+ help center guides."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {supportChannels.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.title}
                href="#cta"
                variants={fadeUp}
                className="card-glass group flex flex-col p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-glow/10 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-accent-glow" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="font-medium text-accent-glow">{c.value}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-glow" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
