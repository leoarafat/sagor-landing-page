import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { Globe2, Play, Store, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Button from '../components/Button';
import { blurReveal, fadeUp, staggerContainer } from '../utils/animations';

const HERO_VIDEO_URL =
  'https://sm-records.s3.ap-south-1.amazonaws.com/uploads/videos/mixkit-person-singing-on-stage-490-4k.mp4';

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: (index * 53) % 100,
  top: (index * 37) % 100,
  delay: (index % 6) * 0.9,
  size: 2 + (index % 3),
}));

const floatingStats = [
  { icon: Store, value: '150+', label: 'Stores', position: 'left-0 top-10 -translate-x-1/3' },
  { icon: TrendingUp, value: '5M+', label: 'Streams', position: 'right-0 top-1/3 translate-x-1/4' },
  { icon: Globe2, value: '120+', label: 'Countries', position: 'bottom-8 left-6 -translate-x-1/4' },
];

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const context = gsap.context(() => {
      gsap.to('.float-card', {
        y: -12,
        duration: 2.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.35,
      });
    }, visualRef);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      {/* Texture + animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="absolute -left-32 top-20 h-96 w-96 animate-blob rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-glow/10 blur-[140px] [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-emerald-500/10 blur-[110px] [animation-delay:8s]" />
        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            className="absolute animate-drift rounded-full bg-glow"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Left: copy */}
        <motion.div variants={staggerContainer(0.14)} initial="hidden" animate="visible" className="max-w-xl">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-glow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-pulse-ring rounded-full bg-glow" />
              <span className="relative h-2 w-2 rounded-full bg-glow" />
            </span>
            #1 Music Distribution Platform
          </motion.span>

          <motion.h1
            variants={blurReveal}
            className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Release Your <span className="text-gradient">Music</span> Worldwide
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            Upload once and go live on Spotify, Apple Music, Vevo, TikTok, and 150+ stores in 120+ countries. Keep
            100% of your rights, track every royalty in real time, and get paid on your terms.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button className="px-8 py-3.5 text-base">Start Distributing</Button>
            <Button
              variant="ghost"
              className="px-7 py-3.5 text-base"
              onClick={() => window.open('https://youtu.be/eI-fI5dbgMk', '_blank', 'noopener,noreferrer')}
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3 text-sm text-body/80">
            <div className="flex -space-x-2">
              {['from-emerald-400 to-cyan-500', 'from-fuchsia-400 to-purple-500', 'from-amber-400 to-orange-500', 'from-sky-400 to-blue-500'].map(
                (gradient) => (
                  <span key={gradient} className={`h-8 w-8 rounded-full border-2 border-night-900 bg-gradient-to-br ${gradient}`} />
                ),
              )}
            </div>
            Trusted by 10,000+ artists and labels
          </motion.div>
        </motion.div>

        {/* Right: cinematic stage visual */}
        <motion.div
          ref={visualRef}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-accent/20 via-transparent to-glow/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-card shadow-2xl">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Music performance background video"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-night-900/70 via-night-900/10 to-transparent" />

              {/* LIVE badge */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-night-900/70 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                LIVE · World Premiere
              </div>
            </div>
          </div>

          {/* Floating statistic cards */}
          {floatingStats.map((stat) => (
            <div
              key={stat.label}
              className={`float-card absolute ${stat.position} flex items-center gap-3 rounded-2xl border border-white/[0.1] bg-night-800/85 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-glow">
                <stat.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold text-white">{stat.value}</span>
                <span className="block text-xs text-body">{stat.label}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
