import { motion } from 'framer-motion';
import { ArrowRight, Globe2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { stores } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function StoresGrid() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Music Stores"
          title="One upload."
          highlight="150+ stores worldwide."
          description="From the streaming giants to the regional powerhouses — your release lands where the listeners are."
        />

        <motion.div
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {stores.map((s) => (
            <motion.div
              key={s}
              variants={fadeUp}
              className="card-glass group flex aspect-[5/3] flex-col items-center justify-center p-4 text-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-glow/10 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <span className="font-display text-base font-bold gradient-text">{s[0]}</span>
              </span>
              <p className="mt-2 text-xs font-semibold text-white/90">{s}</p>
            </motion.div>
          ))}
          <motion.div
            variants={fadeUp}
            className="card-glass group flex aspect-[5/3] flex-col items-center justify-center p-4 text-center"
          >
            <Globe2 className="h-8 w-8 text-accent-glow animate-float" />
            <p className="mt-2 text-xs font-semibold text-white">+130 more</p>
          </motion.div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href="#pricing" className="btn-ghost">
            See full store list <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
