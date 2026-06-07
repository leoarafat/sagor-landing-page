import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions?"
          highlight="We have answers."
          description="Everything you wanted to know about distribution, royalties and how SM Sound India works."
        />

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-12 max-w-3xl space-y-3"
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                variants={fadeUp}
                className={`rounded-2xl border bg-card/60 backdrop-blur-xl transition-colors ${
                  isOpen ? 'border-accent/30' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-accent/20 border-accent/30' : ''
                    }`}
                  >
                    <Plus className="h-4 w-4 text-accent-glow" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
