import { AnimatePresence, motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { plans } from '../data/pricing';
import { fadeUp, staggerContainer } from '../utils/animations';

type Billing = 'monthly' | 'yearly';

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('yearly');

  return (
    <section id="pricing" className="relative bg-night-800/50 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that scale with your catalog"
          subtitle="Start free, upgrade when the streams arrive. Every plan keeps 100% of your rights."
        />

        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-white' : 'text-body/60'}`}>Monthly</span>
          <button
            role="switch"
            aria-checked={billing === 'yearly'}
            aria-label="Toggle yearly billing"
            onClick={() => setBilling((value) => (value === 'monthly' ? 'yearly' : 'monthly'))}
            className="relative h-8 w-16 rounded-full border border-white/10 bg-card transition-colors hover:border-accent/40"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={`absolute top-1 h-6 w-6 rounded-full bg-accent shadow-[0_0_16px_rgba(34,197,94,0.5)] ${
                billing === 'yearly' ? 'right-1' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billing === 'yearly' ? 'text-white' : 'text-body/60'}`}>
            Yearly <span className="ml-1 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-glow">Save 20%</span>
          </span>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={
                plan.highlighted
                  ? 'animate-shimmer rounded-3xl bg-gradient-to-br from-accent via-glow/40 to-accent/30 p-[1.5px] shadow-[0_0_60px_rgba(34,197,94,0.22)] [background-size:200%_200%] lg:-translate-y-3'
                  : ''
              }
            >
            <article
              className={`relative flex h-full flex-col rounded-3xl border p-8 backdrop-blur transition-all duration-300 ${
                plan.highlighted
                  ? 'border-transparent bg-gradient-to-b from-night-800 to-card'
                  : 'border-white/[0.08] bg-card/60 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_12px_40px_rgba(34,197,94,0.1)]'
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-night-900">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </span>
              ) : null}

              <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-body">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={billing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-5xl font-bold text-white"
                  >
                    ${billing === 'monthly' ? plan.monthly : plan.yearly}
                  </motion.span>
                </AnimatePresence>
                <span className="pb-1.5 text-sm text-body/70">/month{billing === 'yearly' ? ', billed yearly' : ''}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-body">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                      <Check className="h-3 w-3 text-glow" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={plan.highlighted ? 'primary' : 'ghost'} className="mt-9 w-full py-3.5">
                {plan.cta}
              </Button>
            </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
