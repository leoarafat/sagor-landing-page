import { useRef, type ButtonHTMLAttributes, type MouseEvent } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  strength?: number;
};

export default function MagneticButton({
  children,
  strength = 0.25,
  className = '',
  onMouseMove,
  onMouseLeave,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    onMouseMove?.(e);
  };

  const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (el) el.style.transform = '';
    onMouseLeave?.(e);
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-300 will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
