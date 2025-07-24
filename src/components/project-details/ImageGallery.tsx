
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";

interface ImageGalleryItem {
  id: number;
  src: string;
  alt: string;
}

const imagesGalleryItems: ImageGalleryItem[] = [
  { id: 1, src: "/assets/images/projects/project2.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/assets/images/projects/project3.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/assets/images/projects/project4.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/assets/images/projects/project5.jpeg", alt: "Gallery Image 4" },
  { id: 5, src: "/assets/images/projects/project6.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/assets/images/projects/project7.jpg", alt: "Gallery Image 6" },
  { id: 7, src: "/assets/images/projects/project8.jpg", alt: "Gallery Image 7" },
  { id: 8, src: "/assets/images/projects/project9.jpg", alt: "Gallery Image 8" },
];

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const lightboxSlides = imagesGalleryItems.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="px-4">
      <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14">
        <h1 className="text-3xl font-bold mb-10 text-white">Image Gallery</h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[FreeMode, Navigation, Autoplay]}
          className="mySwiper2 mb-4 rounded-lg shadow-lg"
          breakpoints={{
            320: { slidesPerView: 1 },
            660: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {imagesGalleryItems.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="relative group h-[400px] md:h-[500px] rounded-lg w-full cursor-pointer overflow-hidden hover:shadow-2xl"
                    onClick={() => openLightbox(index)}
                    >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/50 via-[var(--custom-bg-primary)]/30 to-[var(--custom-bg-white)]/10 transition-opacity duration-300"></div>
                </div>
                
            </SwiperSlide>
          ))}
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
        </Swiper>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={currentImageIndex}
          plugins={[Zoom]}
        />
      </div>
    </section>
  );
}
