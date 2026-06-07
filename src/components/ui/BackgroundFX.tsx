import { useMemo } from 'react';

export default function BackgroundFX() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* gradient blobs */}
      <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px] animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-accent-glow/15 blur-[140px] animate-blob"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[130px] animate-blob"
        style={{ animationDelay: '8s' }}
      />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-accent-glow/40 animate-float"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: '0 0 8px rgba(52,211,153,0.7)',
          }}
        />
      ))}
    </div>
  );
}
