import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/stats';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section aria-label="SMSound India in numbers" className="py-12">
      <div className="container-x">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-r from-night-800 via-card to-night-800 px-8 py-12"
        >
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <dl className="relative grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="text-gradient">{inView ? <CountUp end={stat.value} duration={2.4} separator="," /> : '0'}</span>
                  <span className="text-glow">{stat.suffix}</span>
                </dd>
                <dt className="mt-2 text-sm font-medium uppercase tracking-wider text-body">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
