import { motion } from 'framer-motion';
import { Play, Eye, ThumbsUp, Share2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { videoPlatforms } from '../../data/content';
import { fadeUp, stagger, fadeLeft } from '../../utils/motion';

export default function VideoDistribution() {
  return (
    <section id="video-distribution" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Video Distribution"
          title="From upload to"
          highlight="every screen on earth"
          description="Push your official videos and short-form content to YouTube, Vevo, TikTok and more — with monetization on autopilot."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Analytics panel */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="card-glass overflow-hidden p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600">
                    <Play className="h-4 w-4 text-white fill-white" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">"Midnight Run" — Music Video</p>
                    <p className="text-xs text-muted">Published 14 days ago</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-semibold text-emerald-300">
                  Monetized
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <VStat icon={<Eye className="h-4 w-4" />} value="1.4M" label="Views" />
                <VStat icon={<ThumbsUp className="h-4 w-4" />} value="184K" label="Likes" />
                <VStat icon={<Share2 className="h-4 w-4" />} value="62K" label="Shares" />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { p: 'YouTube', v: '842K views', pct: 78, tone: 'from-rose-500 to-red-600' },
                  { p: 'TikTok', v: '412K plays', pct: 64, tone: 'from-pink-500 to-fuchsia-500' },
                  { p: 'Instagram', v: '128K reels', pct: 38, tone: 'from-fuchsia-500 to-purple-500' },
                  { p: 'Vevo', v: '54K views', pct: 22, tone: 'from-sky-400 to-indigo-500' },
                ].map((r) => (
                  <div key={r.p}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium text-white">{r.p}</span>
                      <span className="text-muted">{r.v}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className={`h-full rounded-full bg-gradient-to-r ${r.tone}`} style={{ width: `${r.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Platform cards */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="order-1 lg:order-2 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {videoPlatforms.map((p) => (
              <motion.div key={p.name} variants={fadeUp} className="card-glass p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-glow/10 ring-1 ring-white/10">
                    <Play className="h-5 w-5 text-accent-glow fill-accent-glow" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">{p.name}</p>
                    <p className="text-xs text-muted">{p.tag}</p>
                  </div>
                </div>
                <div className="mt-5 flex items-end gap-1 h-8">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent-glow/80"
                      style={{ height: `${30 + Math.sin(i) * 30 + (i % 4) * 8}%` }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center gap-1.5 text-accent-glow">{icon}</div>
      <p className="mt-2 text-lg font-bold text-white">{value}</p>
      <p className="text-[11px] text-muted">{label}</p>
    </div>
  );
}
