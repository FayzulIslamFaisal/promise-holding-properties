"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { X, BedDouble, Bath, Square, Info } from "lucide-react";
import { ProjectDetail, ProjectUnit as ApiProjectUnit } from "@/types/api";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface ProjectUnitProps {
  project: ProjectDetail;
}

const ProjectUnit = ({ project }: ProjectUnitProps) => {
  const [selectedUnit, setSelectedUnit] = useState<ApiProjectUnit | null>(null);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  // Flatten all units from all buildings
  const allUnits: ApiProjectUnit[] = project.buildings.flatMap(building =>
    building.units.map(unit => ({
      ...unit,
      // Ensure image gallery is mapped correctly if the API names are different or empty
      image_gallery: unit.image_gallery || []
    }))
  );

  const openModal = (unit: ApiProjectUnit) => {
    setSelectedUnit(unit);

    // Initial media: use main image then gallery, filtering out avatar-demo placeholder
    const mediaUrls = [
      unit.thumbnail,
      unit.image,
      ...(unit.image_gallery || [])
    ].filter(url => url && !url.includes('avatar-demo.png'));

    // Fallback if no real images are available
    if (mediaUrls.length === 0 && (unit.image || unit.thumbnail)) {
      mediaUrls.push(unit.thumbnail || unit.image);
    }

    const initialMedia: MediaItem[] = mediaUrls.map(url => ({ type: 'image', url: url! }));

    if (initialMedia.length > 0) {
      setActiveMedia(initialMedia[0]);
    } else {
      setActiveMedia(null);
    }
  };

  const closeModal = () => {
    setSelectedUnit(null);
    setActiveMedia(null);
  };

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle
          title="Project Units"
          border_b={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allUnits.map((item) => (
            <div
              key={item.id}
              className="relative group aspect-[2/3] rounded-lg w-full cursor-pointer overflow-hidden hover:shadow-2xl"
              onClick={() => openModal(item)}
            >
              <Image
                src={item.thumbnail || item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90 group-hover:via-primary/30">
                <div className="absolute bottom-4 left-4 right-4 z-0 p-2 flex flex-col gap-1 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-sm">{item.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-white/90 text-sm font-semibold">{item.gross_area_sft} sqft</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Modal */}
        {selectedUnit && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
            <div className="bg-[var(--bg-body)] rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-1 bg-black/50 hover:bg-black/80 text-white p-2.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl group"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Gallery Section */}
              <div className="w-full md:w-3/5 bg-[var(--bg-body)] p-4 md:p-6 shrink-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col">
                {/* Main Display */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[var(--brand-dark)]/5 mb-6 flex items-center justify-center shadow-lg border border-primary/10">
                  {activeMedia?.type === 'video' ? (
                    <video
                      src={activeMedia.url}
                      controls
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                    />
                  ) : (
                    <Image
                      src={activeMedia?.url || selectedUnit.thumbnail || selectedUnit.image}
                      fill
                      alt="Gallery image"
                      className="object-cover transition-all duration-500"
                      priority
                    />
                  )}
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto py-2 px-2 custom-scrollbar justify-start items-center">
                  {(() => {
                    const mediaItems = [
                      { type: 'image' as const, url: selectedUnit.thumbnail || selectedUnit.image },
                      ...(selectedUnit.image_gallery || []).map(url => ({ type: 'image' as const, url }))
                    ].filter(media => media.url && !media.url.includes('avatar-demo.png'));

                    // Fallback if no real images are available
                    if (mediaItems.length === 0 && (selectedUnit.thumbnail || selectedUnit.image)) {
                      mediaItems.push({ type: 'image' as const, url: selectedUnit.thumbnail || selectedUnit.image });
                    }

                    return mediaItems.map((media, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveMedia(media)}
                        className={`relative h-20 w-28 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${activeMedia?.url === media.url
                          ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-[var(--bg-body)] scale-105 opacity-100 shadow-lg'
                          : 'opacity-50 hover:opacity-80'
                          }`}
                      >
                        <Image src={media.url} fill alt={`Thumbnail ${idx + 1}`} className="object-cover" />
                      </div>
                    ));
                  })()}
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col darkLight-text-color bg-[var(--brand-dark)]/[0.02]">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedUnit.name}</h2>
                  {/* <p className="text-lg font-semibold text-primary">
                      {selectedUnit.per_unit_amount.toLocaleString()} BDT
                  </p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-primary/5 border border-gray-100 dark:border-primary/20 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Square size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Gross Area</p>
                      <p className="font-extrabold text-base">{selectedUnit.gross_area_sft} <span className="text-xs font-medium">sft</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-primary/5 border border-gray-100 dark:border-primary/20 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Info size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">Usable Area</p>
                      <p className="font-extrabold text-base">{selectedUnit.usable_area_sqft} <span className="text-xs font-medium">sqft</span></p>
                    </div>
                  </div>

                  {selectedUnit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-primary/5 border border-gray-100 dark:border-primary/20 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                      <div className="p-3 rounded-xl bg-primary/10">
                        {feature.name.toLowerCase().includes('bed') ? <BedDouble size={22} className="text-primary" /> : <Bath size={22} className="text-primary" />}
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-0.5">{feature.name}</p>
                        <p className="font-extrabold text-base">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">Unit Availability</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Quantity available: {selectedUnit.unit_quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section >
  );
}

export default ProjectUnit;
