import { motion } from 'framer-motion';
import { Music4 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { musicBenefits } from '../data/benefits';
import { fadeRight, fadeUp, staggerContainer } from '../utils/animations';

const chartBars = [42, 58, 36, 70, 54, 82, 64, 90, 74, 96, 68, 88];

const recentReleases = [
  { title: 'Midnight Kolkata', artist: 'Sagar Das', streams: '184,203', trend: '+12%' },
  { title: 'Amar Mon Bose Na Sohore', artist: 'Soumya Mukherjee', streams: '96,540', trend: '+8%' },
  { title: 'City Of Rivers', artist: 'Sweety Sarkar', streams: '71,118', trend: '+21%' },
];

export default function MusicDistribution() {
  return (
    <section id="music-distribution" className="relative overflow-hidden bg-night-800/50 py-24 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Music Distribution"
            title="One upload. Every store. Full control."
            subtitle="Schedule your release, pick your stores, and watch streams roll in — with royalty data you can actually read."
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {musicBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/[0.08] bg-card/60 p-5 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-glow">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard preview mockup */}
        <Reveal variants={fadeRight} className="relative">
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-bl from-glow/15 via-transparent to-accent/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-night-900/90 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-amber-500/70" />
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="ml-3 text-xs font-medium text-body/70">Backstage.smsoundindia.com — Analytics</span>
            </div>

            <div className="p-6">
              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Streams (30d)', value: '1.2M' },
                  { label: 'Revenue', value: '$8,940' },
                  { label: 'Listeners', value: '312K' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/[0.08] bg-card/80 p-3.5">
                    <p className="text-[10px] uppercase tracking-wider text-body/60">{metric.label}</p>
                    <p className="mt-1 font-display text-lg font-bold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-xl border border-white/[0.08] bg-card/60 p-4">
                <p className="mb-4 text-xs font-semibold text-white">Daily Streams</p>
                <div className="flex h-28 items-end gap-2">
                  {chartBars.map((height, index) => (
                    <motion.span
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.05, ease: 'easeOut' }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent/60 to-glow"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {recentReleases.map((release) => (
                  <div
                    key={release.title}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-card/50 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent/30 to-glow/10 text-glow">
                        <Music4 className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-white">{release.title}</p>
                        <p className="text-[11px] text-body/70">{release.artist}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-white">{release.streams}</p>
                      <p className="text-[11px] font-medium text-glow">{release.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
