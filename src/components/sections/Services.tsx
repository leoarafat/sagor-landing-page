import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to"
          highlight="grow your sound"
          description="From distribution to publishing, rights management to monetization — every step of the artist journey, under one roof."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="card-glass group relative overflow-hidden p-7"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7 text-accent-glow" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                  <a
                    href="#pricing"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-glow transition-all hover:gap-2.5"
                  >
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <span className="absolute left-7 top-0 text-xs font-mono text-white/20">
                  / {(i + 1).toString().padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
