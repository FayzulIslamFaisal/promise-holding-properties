'use client';

import {
  CheckCircle2,
} from "lucide-react";
import dynamic from 'next/dynamic';
import { PlotDetail } from "@/data/dummyPlots";
import { ProjectDetail } from "@/types/api";
import PlotInfo from "./PlotInfo";
// import PlotPricing from "./PlotPricing";
import ProjectUnit from "../project-details/ProjectUnit";
import SecondaryBanner from '@/components/common/SecondaryBanner';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

// Re-use existing swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Dynamically import project-details components to keep layout exactly the same
const ProjectFeature = dynamic(() => import('../project-details/ProjectFeature'), { ssr: false });
const ContactForm = dynamic(() => import('../project-details/ContactForm'), { ssr: false });

interface PlotDetailWrapperProps {
  project?: ProjectDetail;
  plot?: PlotDetail;
}

const PlotDetailWrapper = ({ project, plot }: PlotDetailWrapperProps) => {

  if (!plot) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full text-xl text-[var(--brand-dark)]">
        Plot not found.
      </div>
    );
  }

  // Map features to items with CheckCircle2 icon
  const featureItems = (plot.features || []).map(fName => ({
    title: fName,
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />
  }));

  // Construct images for the slider
  const sliderDescParts = [];
  if (plot.size || plot.sizeSqft) {
    sliderDescParts.push(`Size: ${plot.size || `${plot.sizeSqft.toLocaleString()} sqft`}`);
  }
  if (plot.status) {
    sliderDescParts.push(`Status: ${plot.status}`);
  }
  const sliderDesc = sliderDescParts.join(" | ");

  const sliderImages = (plot.gallery || []).map((imgUrl, index) => ({
    id: index,
    src: imgUrl,
    alt: `${plot.name} Gallery ${index + 1}`,
    title: plot.name,
    description: sliderDesc
  }));

  if (sliderImages.length === 0 && plot.image) {
    sliderImages.push({
      id: 0,
      src: plot.image,
      alt: plot.name,
      title: plot.name,
      description: sliderDesc
    });
  }

  const hasNoBuildings = !project?.buildings || project.buildings.length === 0;

  if (hasNoBuildings) {
    return (
      <>
        {/* Hero Section */}
        <SecondaryBanner
          title={plot.name}
          subtitle={`Premium Plot in ${project?.project_name || "Promise Assets"}`}
          imageSrc={plot.image}
        />

        {/* Error Message Section */}
        <section className="px-4 py-20 dark:bg-[var(--bg-body)] bg-white">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="p-8 md:p-12 rounded-3xl border-2 border-dashed border-primary/25 bg-primary/5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--brand-dark)] dark:text-white mb-4 tracking-tight">
                No Buildings Found
              </h3>
              <p className="text-base md:text-lg darkLight-text-color max-w-md mx-auto leading-relaxed">
                We are sorry, but there are no buildings or units currently associated with this plot. Please contact us for more information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact-form-section">
          <ContactForm />
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <SecondaryBanner
        title={plot.name}
        subtitle={`Premium Plot in ${project?.project_name || "Promise Assets"}`}
        imageSrc={plot.image}
      />

      {/* Property Information */}
      <PlotInfo plot={plot} />

      {/* Features */}
      {featureItems.length > 0 && <ProjectFeature items={featureItems} />}

      {/* Image Gallery Slider */}
      <section className="px-4">
        <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14 border-b border-primary/40">
          <Swiper
            spaceBetween={10}
            loop={sliderImages.length > 1}
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
            {sliderImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative group h-[calc(100vh-200px)] rounded-lg w-full overflow-hidden transform transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
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

      {/* Pricing Section - Commented out for now
      <PlotPricing pricePerSqft={plot.pricePerSqft} defaultAreaSqft={plot.sizeSqft} />
      */}

      {/* Project Units */}
      {project && <ProjectUnit project={project} />}

      {/* Contact Section */}
      <div id="contact-form-section">
        <ContactForm />
      </div>
    </>
  );
};

export default PlotDetailWrapper;
