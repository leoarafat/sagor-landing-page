import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="Everything your release needs, in one place"
          subtitle="From the first upload to the last royalty statement — distribution, publishing, rights, and monetization built for artists and labels."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <GlowCard tilt className="flex h-full flex-col">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-glow/10 text-glow transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{service.description}</p>
                <a
                  href="#pricing"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-glow transition-all hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
