import { useRef, useState, type CSSProperties, type MouseEvent, type PropsWithChildren } from 'react';

interface GlowCardProps extends PropsWithChildren {
  className?: string;
  tilt?: boolean;
}

/** Glass card with cursor spotlight, hover lift, glow border, and an optional 3D tilt. */
export default function GlowCard({ children, className = '', tilt = false }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string | undefined>(undefined);
  const [spot, setSpot] = useState({ x: -300, y: -300 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setSpot({ x, y });
    if (tilt) {
      const rotateX = (y / rect.height - 0.5) * -6;
      const rotateY = (x / rect.width - 0.5) * 6;
      setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`);
    }
  };

  const handleLeave = () => {
    setTransform(undefined);
    setSpot({ x: -300, y: -300 });
  };

  const style = {
    transform,
    '--spot-x': `${spot.x}px`,
    '--spot-y': `${spot.y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_12px_44px_rgba(34,197,94,0.16)] ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_circle_at_var(--spot-x)_var(--spot-y),rgba(52,211,153,0.13),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
