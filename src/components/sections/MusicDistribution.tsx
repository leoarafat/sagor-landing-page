import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { distributionBenefits } from '../../data/content';
import { fadeUp, stagger, fadeRight } from '../../utils/motion';

export default function MusicDistribution() {
  return (
    <section id="music-distribution" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Music Distribution"
          title="Get your sound"
          highlight="everywhere it matters"
          description="One upload. Every store. Real-time analytics and royalties that pay out in the same month — not the same year."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Benefits grid */}
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {distributionBenefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className="card-glass group p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-glow/10 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-accent-glow" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{b.title}</h3>
                      <p className="mt-1 text-sm text-muted">{b.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const points = [12, 18, 14, 22, 28, 24, 34, 30, 42, 38, 50, 56];
  const max = Math.max(...points);
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - (p / max) * 100;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  const area = `${path} L100,100 L0,100 Z`;

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent-glow/10 to-transparent blur-2xl" />
      <div className="card-glass overflow-hidden p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">Live Royalties</p>
            <p className="mt-1 font-display text-3xl font-bold text-white">
              $24,891<span className="text-accent-glow">.42</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-glow">
            <TrendingUp className="h-3.5 w-3.5" /> +18.4%
          </span>
        </div>

        <div className="mt-6 h-32 w-full">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#22C55E" stopOpacity="0.5" />
                <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#area)" />
            <path d={path} fill="none" stroke="#34D399" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <MiniStat icon={<Activity className="h-4 w-4" />} label="Streams" value="2.4M" />
          <MiniStat icon={<DollarSign className="h-4 w-4" />} label="This Month" value="$8.2K" />
          <MiniStat icon={<TrendingUp className="h-4 w-4" />} label="Saves" value="184K" />
        </div>

        <div className="mt-5 space-y-2">
          {[
            { name: 'Spotify', value: 68 },
            { name: 'Apple Music', value: 52 },
            { name: 'YouTube Music', value: 41 },
          ].map((row) => (
            <div key={row.name} className="flex items-center gap-3 text-sm">
              <span className="w-28 shrink-0 text-muted">{row.name}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-glow"
                  style={{ width: `${row.value}%` }}
                />
              </div>
              <span className="w-10 text-right text-xs text-white/80">{row.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center gap-1.5 text-accent-glow">{icon}</div>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
      <p className="text-[11px] text-muted">{label}</p>
    </div>
  );
}
