"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

interface ImageGalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const imagesGalleryItems: ImageGalleryItem[] = [
  {
    id: 1,
    src: "/assets/images/drwoing/img1.jpg",
    alt: "Gallery Image 1",
    title: "Building A",
    description: "Modern architectural design with eco-friendly elements.",
  },
  {
    id: 2,
    src: "/assets/images/slider/banner4.png",
    alt: "Gallery Image 2",
    title: "Building B",
    description: "Spacious layout perfect for families and professionals.",
  },
  {
    id: 3,
    src: "/assets/images/drwoing/img2.jpg",
    alt: "Gallery Image 3",
    title: "Skyline Tower",
    description: "Luxury apartment complex with rooftop amenities.",
  },
  {
    id: 4,
    src: "/assets/images/slider/banner7.png",
    alt: "Gallery Image 4",
    title: "Garden View",
    description: "Peaceful surroundings and lush green landscapes.",
  },
  {
    id: 5,
    src: "/assets/images/drwoing/img3.jpg",
    alt: "Gallery Image 5",
    title: "Urban Nest",
    description: "Compact yet elegant urban living solution.",
  },
  {
    id: 6,
    src: "/assets/images/slider/banner11.png",
    alt: "Gallery Image 6",
    title: "The Heights",
    description: "Soaring high with panoramic city views.",
  },
  {
    id: 7,
    src: "/assets/images/slider/banner12.png",
    alt: "Gallery Image 7",
    title: "Lakeside Villa",
    description: "Waterfront living with tranquility and charm.",
  },
  {
    id: 8,
    src: "/assets/images/slider/banner1.png",
    alt: "Gallery Image 8",
    title: "Eco Haven",
    description: "A perfect blend of sustainability and style.",
  },
];

export default function BuildingDrawingSlider() {
  return (
    <section className="px-4">
      <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14  border-b border-[var(--custom-bg-accent)]/40">
        <Swiper
          spaceBetween={10}
          loop={true}
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
          {imagesGalleryItems.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative group h-[calc(100vh-200px)] rounded-lg w-full overflow-hidden transform transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/50 via-[var(--custom-bg-primary)]/30 to-[var(--custom-bg-white)]/10 transition-opacity duration-300" />

                {/* Centered Title & Description */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="bg-[var(--custom-bg-primary)]/10 p-4 rounded-lg max-w-2xl text-white">
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
  );
}
