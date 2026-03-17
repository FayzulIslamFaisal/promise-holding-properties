"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";
import { ProjectDetail } from "@/types/api";

interface BuildingDrawingSliderProps {
  project: ProjectDetail;
}

export default function BuildingDrawingSlider({ project }: BuildingDrawingSliderProps) {
  // Use building future/banner images
  const images = project.buildings.map((building) => ({
      id: building.id,
      src: building.future_image || building.banner_image,
      alt: building.building_name,
      title: building.building_name,
      description: `Type: ${building.building_type} | Area: ${building.building_area_sqft} sqft`,
  }));

  if (images.length === 0) {
      images.push({
          id: 0,
          src: project.project_image,
          alt: project.project_name,
          title: project.project_name,
          description: "Project Overview"
      });
  }

  return (
    <section className="px-4">
      <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14  border-b border-[var(--custom-bg-accent)]/40">
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
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/50 via-[var(--custom-bg-primary)]/30 to-[var(--custom-bg-white)]/10 transition-opacity duration-300" />

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
  );
}
