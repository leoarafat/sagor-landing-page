import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import SectionHeading from '../components/SectionHeading';
import { reasons } from '../data/whyChooseUs';
import { scaleIn, staggerContainer } from '../utils/animations';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-night-800/50 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built by people who run distribution every day"
          subtitle="Thousands of releases a month flow through our pipeline. Here is why artists and labels stay."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={scaleIn}>
              <GlowCard className="h-full">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-glow/10 text-glow">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{reason.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
