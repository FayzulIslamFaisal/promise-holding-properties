"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper/types"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import Image from "next/image"

const sliderImages = [
  { id: 1, src: '/assets/images/slider/banner1.png' },
  { id: 2, src: '/assets/images/slider/banner2.png' },
  { id: 3, src: '/assets/images/slider/banner3.png' },
  { id: 4, src: '/assets/images/slider/banner4.png' },
  { id: 5, src: '/assets/images/slider/banner5.png' },
  { id: 6, src: '/assets/images/slider/banner6.png' },
];

const ProjectSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-4"
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-[400px] w-full relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredSlide(item.id)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={`Slide ${item.id}`}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  hoveredSlide === item.id ? "scale-110" : "scale-100"
                }`}
              />
              {/* Optional overlay for better zoom visibility */}
              <div
                className={`absolute inset-0 bg-[var(--custom-bg-black)] transition-opacity duration-300 ${
                  hoveredSlide === item.id ? "opacity-10" : "opacity-0"
                }`}
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
          },
        }}
      >
        {sliderImages.map((item) => (
          <SwiperSlide
            key={item.id}
            className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden rounded-md">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={`Thumbnail ${item.id}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProjectSlider

