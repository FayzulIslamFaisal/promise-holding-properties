"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, FreeMode, Autoplay } from "swiper/modules"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

interface GalleryImage {
  id: string | number
  src: string
  title: string
  description: string
}

interface PlotGallerySliderProps {
  images: GalleryImage[]
}

const PlotGallerySlider = ({ images }: PlotGallerySliderProps) => {
  if (!images || images.length === 0) return null

  return (
    <section className="px-4">
      <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14 border-b border-primary/40">
        <Swiper
          spaceBetween={10}
          loop={images.length > 1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper2 mb-4 rounded-lg shadow-lg"
          breakpoints={{
            320: { slidesPerView: 1 },
            660: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1200: { slidesPerView: 1 },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative group h-[calc(100vh-200px)] rounded-lg w-full overflow-hidden transform transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90 group-hover:via-primary/30" />

                {/* Centered Title & Description */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg max-w-2xl text-white">
                    <h2 className="text-xl md:text-4xl font-bold mb-2">{image.title}</h2>
                    <p className="text-base md:text-lg">{image.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev custom-prev" />
          <div className="swiper-button-next custom-next" />
        </Swiper>
      </div>
    </section>
  )
}

export default PlotGallerySlider
