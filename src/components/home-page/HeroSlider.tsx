'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import HeroSliderItem from './HeroSliderItem';

interface Slide {
  id: number;
  title: string;
  img: string;
}

const slides: Slide[] = [
  { id: 1, title: 'Creative Design', img: '/assets/images/slider/banner1.png' },
  { id: 2, title: 'Next.js SwiperJS', img: '/assets/images/slider/banner2.png' },
  { id: 3, title: 'Modern UI with Tailwind', img: '/assets/images/slider/banner3.png' },
  { id: 4, title: 'Responsive Slider', img: '/assets/images/slider/banner4.png' },
  { id: 5, title: 'Smooth Navigation', img: '/assets/images/slider/banner5.png' },
  { id: 6, title: 'Smooth Navigation', img: '/assets/images/slider/banner6.png' },
  { id: 7, title: 'Smooth Navigation', img: '/assets/images/slider/banner7.png' },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[calc(100vh-400px)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000}}
        loop={true}
        effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSliderItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
