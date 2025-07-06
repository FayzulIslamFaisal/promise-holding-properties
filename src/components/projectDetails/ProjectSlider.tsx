'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const sliderImages = [
  { id: 1, src: '/assets/images/slider/banner1.png' },
  { id: 2, src: '/assets/images/slider/banner2.png' },
  { id: 3, src: '/assets/images/slider/banner3.png' },
  { id: 4, src: '/assets/images/slider/banner4.png' },
  { id: 5, src: '/assets/images/slider/banner5.png' },
  { id: 6, src: '/assets/images/slider/banner6.png' },
];

const ProjectSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="overflow-hidden mb-2"
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[400px] w-full relative">
              <Image
                src={item.src}
                alt={`Slide ${item.id}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-24"
        breakpoints={{
            1024: {
              slidesPerView: 5,
            },
            767: {
              slidesPerView: 4,
            },
            490: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
            }
          }}
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id} className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <img
              src={item.src}
              alt={`Thumbnail ${item.id}`}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;

