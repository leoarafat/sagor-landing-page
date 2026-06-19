import { useRef, useState, type ButtonHTMLAttributes, type MouseEvent } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const styles: Record<Variant, string> = {
  primary:
    'bg-accent text-night-900 shadow-[0_0_24px_rgba(34,197,94,0.25)] hover:bg-glow hover:shadow-[0_0_36px_rgba(52,211,153,0.45)]',
  ghost: 'bg-white/5 text-white border border-white/10 hover:border-glow/50 hover:bg-white/10',
  outline: 'bg-transparent text-white border border-white/15 hover:border-accent hover:text-glow',
};

/** Pill button with magnetic hover and click ripple. */
export default function Button({ variant = 'primary', className = '', children, onClick, ...rest }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setOffset({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const ripple = { id: Date.now(), x: event.clientX - rect.left, y: event.clientY - rect.top };
      setRipples((current) => [...current, ripple]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== ripple.id));
      }, 650);
    }
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={handleClick}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow ${styles[variant]} ${className}`}
      {...rest}
    >
      {variant === 'primary' ? <span aria-hidden className="shine" /> : null}
      {ripples.map((ripple) => (
        <span key={ripple.id} className="ripple" style={{ left: ripple.x, top: ripple.y }} aria-hidden />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
