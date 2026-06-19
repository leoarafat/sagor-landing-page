import { ArrowRight, PhoneCall } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { blurReveal } from '../utils/animations';

export default function CtaBanner() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal variants={blurReveal}>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/25 bg-gradient-to-br from-night-800 via-card to-night-800 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 animate-blob rounded-full bg-accent/15 blur-[100px]" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 animate-blob rounded-full bg-glow/15 blur-[100px] [animation-delay:5s]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready To Release Your <span className="text-gradient">Next Hit?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
                Join 10,000+ artists distributing worldwide. Your first release can be live on every store this week.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button className="px-8 py-3.5 text-base">
                  Start Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="px-7 py-3.5 text-base">
                  <PhoneCall className="h-4 w-4" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
