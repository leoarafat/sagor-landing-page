import { motion } from 'framer-motion';
import { MonitorPlay, PlaySquare } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { videoPlatforms } from '../data/stores';
import { fadeLeft, fadeUp, staggerContainer } from '../utils/animations';

const platformStats = [
  { platform: 'YouTube', views: '2.4M', share: 86 },
  { platform: 'Vevo', views: '1.1M', share: 64 },
  { platform: 'Facebook', views: '720K', share: 48 },
  { platform: 'TikTok', views: '530K', share: 38 },
  { platform: 'Instagram', views: '310K', share: 26 },
];

export default function VideoDistribution() {
  return (
    <section id="video-distribution" className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-glow/10 blur-[130px]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* Mock analytics panel */}
        <Reveal variants={fadeLeft} className="relative order-2 lg:order-1">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-accent/15 via-transparent to-glow/15 blur-2xl" />
          <div className="relative rounded-2xl border border-white/[0.1] bg-night-900/90 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-glow">
                  <MonitorPlay className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Video Performance</p>
                  <p className="text-xs text-body/70">Last 30 days · All platforms</p>
                </div>
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-glow">+34%</span>
            </div>

            <div className="space-y-5">
              {platformStats.map((entry, index) => (
                <div key={entry.platform}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-medium text-white">{entry.platform}</span>
                    <span className="text-body">{entry.views} views</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${entry.share}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-glow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Video Distribution"
            title="Put your videos where the world watches"
            subtitle="Official delivery to Vevo and every major video platform — encoded, claimed, and monetized without leaving your dashboard."
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {videoPlatforms.map((platform) => (
              <motion.div
                key={platform}
                variants={fadeUp}
                className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-card/60 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)]"
              >
                <PlaySquare className="h-5 w-5 shrink-0 text-glow" />
                <span className="text-sm font-medium text-white">{platform}</span>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-8 text-sm leading-relaxed text-body">
            Upload one master file — we handle platform-specific encoding, metadata, and rights claims, then report
            every view back into a single analytics panel.
          </p>
        </div>
      </div>
    </section>
  );
}
