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
  { id: 1, title: 'Explore Luxury Apartments in Prime Locations', img: '/assets/images/slider/banner8.png' },
  { id: 2, title: 'Modern Duplex Homes with Stunning Views', img: '/assets/images/slider/banner9.png' },
  { id: 3, title: 'Affordable Housing for Every Family', img: '/assets/images/slider/banner10.png' },
  { id: 4, title: 'Invest in High-Rise Commercial Properties', img: '/assets/images/slider/banner11.png' },
  { id: 5, title: 'Find Your Perfect Residential Plot Today', img: '/assets/images/slider/banner12.png' },
  { id: 6, title: 'Smart Homes with Latest Automation Features', img: '/assets/images/slider/banner6.png' },
  { id: 7, title: 'Secure & Gated Communities for Peaceful Living', img: '/assets/images/slider/banner7.png' },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[calc(100vh-400px)] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{
          clickable: true,
          el: '.custom-hero-swiper-pagination',
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSliderItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div className="custom-hero-swiper-pagination flex justify-center items-center"></div>
    </div>
  );
};

export default HeroSlider;
