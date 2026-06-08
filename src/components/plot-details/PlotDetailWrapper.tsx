'use client';

import dynamic from 'next/dynamic';
import { PlotDetail } from "@/data/dummyPlots";
import { ProjectDetail } from "@/types/api";
import PlotInfo from "./PlotInfo";
import PlotGallerySlider from "./PlotGallerySlider";
import ProjectUnit from "../project-details/ProjectUnit";
import SecondaryBanner from '@/components/common/SecondaryBanner';
import type { ProjectFeatureItem } from "../project-details/ProjectFeature";

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

  // Destructure Plot and Project details
  const {
    name: plotName,
    image: plotImage,
    features: plotFeatures = [],
  } = plot;

  const {
    project_name: projectName = "Promise Assets",
  } = project || {};

  // Extract the first building (as one plot contains one building)
  const building = project?.buildings?.[0];

  // Combine and deduplicate plot and building features
  const combinedFeatures: ProjectFeatureItem[] = [];
  const seenFeatures = new Set<string>();

  const addFeature = (feat: ProjectFeatureItem) => {
    const title = typeof feat === "string" ? feat : feat?.title || feat?.name || "";
    if (title && !seenFeatures.has(title.toLowerCase())) {
      seenFeatures.add(title.toLowerCase());
      combinedFeatures.push(feat);
    }
  };

  (plotFeatures || []).forEach(addFeature);
  (building?.features || []).forEach(addFeature);

  const sliderImages: { id: string | number; src: string; title: string; description: string }[] = [];

  // Only add Building Gallery images
  if (building?.building_gallery && building.building_gallery.length > 0) {
    building.building_gallery.forEach((item) => {
      sliderImages.push({
        id: `building-gallery-${item.id}`,
        src: item.image,
        title: item.title || building.building_name,
        description: `Gallery image for ${building.building_name}`
      });
    });
  }

  const hasNoBuildings = !project?.buildings || project.buildings.length === 0;

  if (hasNoBuildings) {
    return (
      <>
        {/* Hero Section */}
        <SecondaryBanner
          title={plotName}
          subtitle={`Premium Plot in ${projectName}`}
          imageSrc={plotImage}
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
        title={plotName}
        subtitle={`Premium Plot in ${projectName}`}
        imageSrc={plotImage}
      />

      {/* Property Information */}
      <PlotInfo plot={plot} building={building} />

      {/* Features */}
      {combinedFeatures.length > 0 && <ProjectFeature items={combinedFeatures} />}

      {/* Image Gallery Slider Component */}
      <PlotGallerySlider images={sliderImages} />

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
