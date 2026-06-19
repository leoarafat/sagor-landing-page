import { Quote, Star } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="relative bg-night-800/50 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Artist Success Stories"
          title="Artists who released with us, in their own words"
          subtitle="Real careers, real catalogs, real royalty statements."
        />

        <Reveal>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto">
                <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-card/70 p-7 backdrop-blur transition-colors duration-300 hover:border-accent/40">
                  <Quote className="mb-4 h-7 w-7 text-glow/60" />
                  <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-body">“{testimonial.quote}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${testimonial.gradient} font-display text-sm font-bold text-night-900`}
                    >
                      {testimonial.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-body/70">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
