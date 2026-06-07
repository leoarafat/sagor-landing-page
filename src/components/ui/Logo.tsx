type Props = { className?: string };

export default function Logo({ className = '' }: Props) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="SM Sound India home">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-glow shadow-glow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-bg-950" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-accent-glow opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
          SM <span className="gradient-text">Sound</span>
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted">
          India
        </span>
      </span>
    </a>
  );
}
