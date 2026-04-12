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

    // Initial media: use main image then gallery
    const initialMedia: MediaItem[] = [
        { type: 'image', url: unit.image },
        ...(unit.image_gallery || []).map(url => ({ type: 'image' as const, url }))
    ];

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
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/80 via-[var(--custom-bg-primary)]/10 to-transparent transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-[var(--custom-text-white)] text-2xl font-bold">{item.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[var(--custom-text-white)]/90 text-sm font-semibold">{item.gross_area_sft} sqft</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Modal */}
        {selectedUnit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
            <div className="bg-[var(--custom-bg-body)] rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-1 bg-white/10 hover:bg-black/80 text-[var(--custom-text-secondary)] dark:text-white p-2 text-red-500 rounded-full transition-colors backdrop-blur-md border border-gray-200 dark:border-gray-700"
              >
                <X size={24} />
              </button>

              {/* Gallery Section */}
              <div className="w-full md:w-3/5 bg-[var(--custom-bg-body)] p-4 md:p-6 shrink-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col">
                {/* Main Display */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-black mb-4 flex items-center justify-center shadow-inner">
                  {activeMedia?.type === 'video' ? (
                    <video
                      src={activeMedia.url}
                      controls
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                    />
                  ) : (
                    <Image
                      src={activeMedia?.url || selectedUnit.image}
                      fill
                      alt="Gallery image"
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar justify-start items-center">
                  {[
                      { type: 'image' as const, url: selectedUnit.image },
                      ...(selectedUnit.image_gallery || []).map(url => ({ type: 'image' as const, url }))
                  ].map((media, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveMedia(media)}
                      className={`relative h-20 w-28 shrink-0 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:opacity-100 ${activeMedia?.url === media.url ? 'border-[var(--custom-bg-accent)] opacity-100 shadow-md scale-105' : 'border-transparent opacity-60'}`}
                    >
                      <Image src={media.url} fill alt={`Thumbnail ${idx + 1}`} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col darkLight-text-color">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedUnit.name}</h2>
                  <p className="text-lg font-semibold text-[var(--custom-bg-accent)]">
                      {selectedUnit.per_unit_amount.toLocaleString()} BDT
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <Square size={24} className="text-[var(--custom-bg-accent)]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Gross Area</p>
                      <p className="font-bold text-sm">{selectedUnit.gross_area_sft} sft</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <Info size={24} className="text-[var(--custom-bg-accent)]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Usable Area</p>
                      <p className="font-bold text-sm">{selectedUnit.usable_area_sqft} sqft</p>
                    </div>
                  </div>
                  
                  {selectedUnit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                          {feature.name.toLowerCase().includes('bed') ? <BedDouble size={24} className="text-[var(--custom-bg-accent)]" /> : <Bath size={24} className="text-[var(--custom-bg-accent)]" />}
                          <div>
                              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{feature.name}</p>
                              <p className="font-bold text-sm">{feature.value}</p>
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
