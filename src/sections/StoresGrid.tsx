import { motion } from 'framer-motion';
import { Disc3 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { musicStores } from '../data/stores';
import { scaleIn, staggerContainer } from '../utils/animations';

export default function StoresGrid() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-72 w-2/3 -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      <div className="container-x">
        <SectionHeading
          eyebrow="150+ Stores Worldwide"
          title="Every platform your fans listen on"
          subtitle="One release reaches them all — and new stores are added at no extra cost."
        />

        <motion.div
          variants={staggerContainer(0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {musicStores.map((store) => (
            <motion.div
              key={store}
              variants={scaleIn}
              className="group flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-card/50 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card"
            >
              <Disc3 className="h-5 w-5 shrink-0 text-body/50 transition-colors duration-300 group-hover:text-glow" />
              <span className="text-sm font-medium text-body transition-colors duration-300 group-hover:text-white">{store}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-body/70">…and 130+ more stores, radio services, and fitness apps worldwide.</p>
      </div>
    </section>
  );
}
