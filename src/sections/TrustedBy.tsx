import { Music2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { trustedBrands } from '../data/stores';

export default function TrustedBy() {
  const loop = [...trustedBrands, ...trustedBrands];

  return (
    <section aria-label="Trusted by leading platforms" className="border-y border-white/[0.06] bg-night-800/60 py-12">
      <Reveal className="container-x">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-body/60">
          Your music, delivered to the platforms fans use every day
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {loop.map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="flex shrink-0 items-center gap-2 text-base font-semibold text-white/40 grayscale transition-all duration-300 hover:text-white/90 hover:grayscale-0"
              >
                <Music2 className="h-5 w-5" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
