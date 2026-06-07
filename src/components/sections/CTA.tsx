import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUp, stagger } from '../../utils/motion';

export default function CTA() {
  return (
    <section id="cta" className="section-pad relative">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-card via-bg-800 to-bg-900 p-10 text-center sm:p-16 lg:p-20"
        >
          <div className="absolute inset-0 -z-10 bg-radial-glow opacity-80" />
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-blob" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-glow/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow"
          >
            Limited Launch Offer · 30% Off Yearly
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ready to release your <span className="gradient-text">next hit?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-balance text-base text-muted sm:text-lg"
          >
            Join 50,000+ artists already distributing with SM Sound India. Sign up in 60 seconds and have your first release pitched to editorial teams tonight.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary">
              Start Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#support" className="btn-ghost">
              <MessageCircle className="h-4 w-4" /> Contact Sales
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-xs text-muted">
            No credit card required · 14-day free trial · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
