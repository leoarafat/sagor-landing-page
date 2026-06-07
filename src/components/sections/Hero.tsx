import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Globe2, Radio, Heart, Volume2, VolumeX } from 'lucide-react';
import { blurReveal, fadeUp, stagger } from '../../utils/motion';

const bars = Array.from({ length: 28 });

// Royalty-free singing/performance stock video served via CDN.
// Drop your own clip at /public/hero.mp4 to override.
const VIDEO_SRCS = [
  '/hero.mp4',
  'https://cdn.coverr.co/videos/coverr-a-singer-performing-on-stage-3633/1080p.mp4',
];

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const onVideoError = () => {
    if (srcIndex < VIDEO_SRCS.length - 1) {
      setSrcIndex(srcIndex + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      <div className="container-x relative grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            #1 Music Distribution Platform in India
          </motion.span>

          <motion.h1
            variants={blurReveal}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl"
          >
            Release Your <span className="gradient-text">Music</span>
            <br />
            Worldwide.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base text-muted sm:text-lg"
          >
            SM Sound India delivers your tracks and videos to 150+ stores in 120+ countries.
            Real-time analytics, transparent royalties, and zero lock-in — built for the next
            generation of independent artists and labels.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="btn-primary">
              Start Distributing <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost">
              <Play className="h-4 w-4 fill-current" /> Watch Demo
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted"
          >
            <div className="flex -space-x-2">
              {['from-amber-400 to-rose-500', 'from-sky-400 to-indigo-500', 'from-emerald-400 to-teal-500', 'from-fuchsia-400 to-purple-500'].map((c, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full border-2 border-bg-950 bg-gradient-to-br ${c}`}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1">
                <span className="font-semibold text-white">50,000+</span> artists worldwide
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — cinematic singing video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Glow ring */}
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-glow/20 to-transparent blur-2xl" />
            {/* Card */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-card to-bg-800 shadow-card">
              {/* Singer video */}
              {!failed ? (
                <video
                  key={srcIndex}
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  preload="metadata"
                  onError={onVideoError}
                  poster="/hero-poster.svg"
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src={VIDEO_SRCS[srcIndex]} type="video/mp4" />
                </video>
              ) : (
                <FallbackStage />
              )}

              {/* Cinematic dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-950/90 via-bg-950/30 to-bg-950/40" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.25),transparent_55%)]" />

              {/* Mute toggle */}
              <button
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? 'Unmute video' : 'Mute video'}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-bg-950/60 text-white backdrop-blur-md transition-colors hover:bg-accent/30"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              {/* LIVE badge */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-bg-950/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" /> Live
              </div>

              {/* Now playing */}
              <div className="absolute inset-x-4 top-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-bg-950/55 p-3 backdrop-blur-xl">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-glow">
                  <Radio className="h-5 w-5 text-bg-950" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">Midnight Run</p>
                  <p className="truncate text-xs text-muted">Live · 12,482 listening</p>
                </div>
                <Heart className="h-4 w-4 text-accent-glow" />
              </div>

              {/* Bottom visualizer */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-bg-950/65 p-4 backdrop-blur-xl">
                <div className="flex items-end justify-between gap-[3px] h-12">
                  {bars.map((_, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-full bg-gradient-to-t from-accent to-accent-glow animate-wave"
                      style={{
                        animationDelay: `${(i % 10) * 0.07}s`,
                        animationDuration: `${0.7 + (i % 5) * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted">
                  <span>00:48</span>
                  <span className="text-accent-glow font-medium">Spotify · Apple · TikTok</span>
                  <span>03:24</span>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -left-6 top-1/3 hidden glass rounded-2xl p-3 shadow-card sm:flex"
            >
              <FloatStat value="150+" label="Stores" tone="from-accent to-accent-glow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute -right-6 top-12 hidden glass rounded-2xl p-3 shadow-card sm:flex"
            >
              <FloatStat value="5M+" label="Streams" tone="from-sky-400 to-cyan-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="absolute -right-4 bottom-16 hidden glass rounded-2xl p-3 shadow-card sm:flex"
            >
              <FloatStat value="120+" label="Countries" tone="from-fuchsia-400 to-purple-500" icon />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatStat({
  value,
  label,
  tone,
  icon,
}: {
  value: string;
  label: string;
  tone: string;
  icon?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 animate-float">
      <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${tone}`}>
        {icon ? <Globe2 className="h-5 w-5 text-bg-950" /> : <Sparkles className="h-5 w-5 text-bg-950" />}
      </span>
      <div>
        <p className="text-base font-bold text-white">{value}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}

function FallbackStage() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/40 via-sky-500/30 to-fuchsia-500/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(34,197,94,0.55),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(167,139,250,0.45),transparent_60%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="spot" cx="50%" cy="40%" r="50%">
            <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="160" ry="120" fill="url(#spot)" />
        <circle cx="200" cy="200" r="40" fill="#0B1220" />
        <path d="M170 240 Q200 280 230 240 L240 380 L160 380 Z" fill="#0B1220" />
      </svg>
    </div>
  );
}
