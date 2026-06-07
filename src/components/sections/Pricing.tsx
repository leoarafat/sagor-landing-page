import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { pricingPlans } from '../../data/content';
import { fadeUp, stagger } from '../../utils/motion';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing."
          highlight="100% of your royalties."
          description="Pick the plan that fits where you are today. Upgrade, downgrade or cancel any time — no contracts."
        />

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-muted'}`}>Monthly</span>
          <button
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((s) => !s)}
            className="relative h-7 w-14 rounded-full border border-white/10 bg-white/5 p-0.5 transition-colors"
          >
            <motion.span
              animate={{ x: yearly ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="block h-6 w-6 rounded-full bg-gradient-to-br from-accent to-accent-glow shadow-glow-sm"
            />
          </button>
          <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-muted'}`}>
            Yearly <span className="ml-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-glow">Save 30%</span>
          </span>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {pricingPlans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <motion.div
                key={p.name}
                variants={fadeUp}
                className={`relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
                  p.highlighted
                    ? 'border-accent/50 bg-gradient-to-br from-accent/10 via-card to-bg-800 shadow-glow'
                    : 'border-white/10 bg-card/70 backdrop-blur-xl hover:border-white/20'
                }`}
              >
                {p.highlighted && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent to-accent-glow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-bg-950">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                )}

                <p className="font-display text-lg font-semibold text-white">{p.name}</p>
                <p className="mt-1 text-sm text-muted">{p.description}</p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-5xl font-bold text-white">${price}</span>
                  <span className="pb-2 text-sm text-muted">/{yearly ? 'year' : 'month'}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.ul
                    key={yearly ? 'y' : 'm'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mt-8 space-y-3"
                  >
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20">
                          <Check className="h-3 w-3 text-accent-glow" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>

                <a
                  href="#cta"
                  className={`mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all ${
                    p.highlighted
                      ? 'bg-gradient-to-r from-accent to-accent-glow text-bg-950 hover:shadow-glow'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {p.cta}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
