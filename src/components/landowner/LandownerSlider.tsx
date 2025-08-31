"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  FileText,
  HandHeart,
  Building2,
  Award,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import LandownerSliderCard from "./LandownerSliderCard";
import SectionTitle from "../common/SectionTitle";

interface SliderProps {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const certifications: SliderProps[] = [
  {
    id: 1,
    title: "In-House Legal & Design Team",
    icon: FileText,
    description: "Expert legal and design professionals",
  },
  {
    id: 2,
    title: "After Handover Service",
    icon: HandHeart,
    description: "Comprehensive post-delivery support",
  },
  {
    id: 3,
    title: "BNBC Code Compliant",
    icon: Building2,
    description: "Fully compliant with building codes",
  },
  {
    id: 4,
    title: "RAJUK Approved",
    icon: Award,
    description: "Official RAJUK certification",
  },
  {
    id: 5,
    title: "ISO 9001: 2015 Certification",
    icon: Shield,
    description: "International quality standards",
  },
  {
    id: 6,
    title: "Two BNBC Code Compliant",
    icon: Building2,
    description: "Fully compliant with building codes",
  },
];

const LandownerSlider = () => {
  return (
    <>
    <section className="sectionSpaceBorder">
      <div className=" container mx-auto text-center">
        <SectionTitle title="essence of excellence" border_b={true} />
      </div>
      <div className="relative w-full h-[450px] lg:h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/images/landowner/landownerSliderBg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 backdrop-filter dark:bg-[var(--custom-bg-accent)]/20 z-10" />
        </div>

        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="w-full container mx-auto px-4">
            <Swiper
              spaceBetween={15}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Navigation, Autoplay]}
              loop
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 5 },
              }}
            >
              {certifications.map((card) => (
                <SwiperSlide key={card.id}>
                  <LandownerSliderCard card={card} Icon={card.icon} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute left-2 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-[var(--custom-bg-primary)]/60 hover:bg-[var(--custom-bg-primary)]/80 rounded-full p-2 backdrop-blur-md transition-all">
              <ChevronLeft color="white" />
            </div>
            <div className="custom-next absolute right-2 top-1/2 z-30 -translate-y-1/2 cursor-pointer bg-[var(--custom-bg-primary)]/60 hover:bg-[var(--custom-bg-primary)]/80 rounded-full p-2 backdrop-blur-md transition-all">
              <ChevronRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LandownerSlider;
