import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/content';

const gradients = [
  'from-rose-500 to-amber-500',
  'from-sky-500 to-indigo-600',
  'from-fuchsia-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-pink-500',
  'from-cyan-500 to-blue-600',
];

export default function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Artist Success Stories"
          title="Loved by artists in"
          highlight="120+ countries"
          description="From bedroom producers to chart-topping labels — here's what our community has to say."
        />
      </div>

      <div className="mt-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          centeredSlides
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            900: { slidesPerView: 2.1 },
            1280: { slidesPerView: 2.6 },
          }}
          className="!px-5 !pb-14 sm:!px-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.name} className="!h-auto">
              <div className="card-glass relative h-full p-7 sm:p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/20" />
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/90">"{t.text}"</p>
                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} font-display text-sm font-bold text-white shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
