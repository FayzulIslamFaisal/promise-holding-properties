"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { X, BedDouble, Bath, Square, PlayCircle } from "lucide-react";

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

interface ProjectUnitItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  area: string;
  price: string;
  beds: number;
  baths: number;
  description: string;
  media: MediaItem[];
}

const projectUnitItems: ProjectUnitItem[] = [
  {
    id: 1,
    src: "/assets/images/projects/project2.jpg",
    alt: "Unit Image 1",
    title: "Type A - Luxury Suite",
    area: "1500 sqft",
    price: "1.5 Crore BDT",
    beds: 3,
    baths: 3,
    description: "Premium unit with a wonderful view, well ventilated, ready for modern family living.",
    media: [
      { type: 'video', url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
      { type: 'image', url: "/assets/images/projects/project2.jpg" },
      { type: 'image', url: "/assets/images/projects/project3.jpg" },
      { type: 'image', url: "/assets/images/projects/project4.jpg" }
    ]
  },
  {
    id: 2,
    src: "/assets/images/projects/project3.jpg",
    alt: "Unit Image 2",
    title: "Type B - Family Apartment",
    area: "1200 sqft",
    price: "1.1 Crore BDT",
    beds: 3,
    baths: 2,
    description: "Comfortable apartment with a beautiful drawing room.",
    media: [
      { type: 'image', url: "/assets/images/projects/project3.jpg" },
      { type: 'image', url: "/assets/images/projects/project5.jpeg" },
      { type: 'image', url: "/assets/images/projects/project6.jpg" }
    ]
  },
  {
    id: 3,
    src: "/assets/images/projects/project4.jpg",
    alt: "Unit Image 3",
    title: "Type C - Standard Unit",
    area: "1000 sqft",
    price: "90 Lac BDT",
    beds: 2,
    baths: 2,
    description: "Standard sized apartment perfect for small families.",
    media: [
      { type: 'video', url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      { type: 'image', url: "/assets/images/projects/project4.jpg" },
      { type: 'image', url: "/assets/images/projects/project6.jpg" },
      { type: 'image', url: "/assets/images/projects/project7.jpg" }
    ]
  },
  { id: 4, src: "/assets/images/projects/project5.jpeg", alt: "Unit Image 4", title: "Type D - Studio", area: "800 sqft", price: "60 Lac BDT", beds: 1, baths: 1, description: "Studio apartment with wide spaces.", media: [{ type: 'image', url: "/assets/images/projects/project5.jpeg" }, { type: 'image', url: "/assets/images/projects/project7.jpg" }] },
  { id: 5, src: "/assets/images/projects/project6.jpg", alt: "Unit Image 5", title: "Type E - Penthouse", area: "2500 sqft", price: "3.5 Crore BDT", beds: 4, baths: 4, description: "Luxurious penthouse with rooftop access and open terrace.", media: [{ type: 'video', url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }, { type: 'image', url: "/assets/images/projects/project6.jpg" }, { type: 'image', url: "/assets/images/projects/project8.jpg" }] },
  { id: 6, src: "/assets/images/projects/project7.jpg", alt: "Unit Image 6", title: "Type F - Duplex", area: "3200 sqft", price: "4.5 Crore BDT", beds: 5, baths: 5, description: "Spacious duplex for large families.", media: [{ type: 'image', url: "/assets/images/projects/project7.jpg" }, { type: 'image', url: "/assets/images/projects/project9.jpg" }] },
  { id: 7, src: "/assets/images/projects/project8.jpg", alt: "Unit Image 7", title: "Type G - Twin Unit", area: "2400 sqft", price: "2.5 Crore BDT", beds: 4, baths: 3, description: "Connected twin units suitable for joint families.", media: [{ type: 'image', url: "/assets/images/projects/project8.jpg" }, { type: 'image', url: "/assets/images/projects/project2.jpg" }] },
  { id: 8, src: "/assets/images/projects/project9.jpg", alt: "Unit Image 8", title: "Type H - Corner Unit", area: "1350 sqft", price: "1.3 Crore BDT", beds: 3, baths: 3, description: "Corner unit with extra ventilation and sunlight.", media: [{ type: 'image', url: "/assets/images/projects/project9.jpg" }, { type: 'image', url: "/assets/images/projects/project3.jpg" }] },
];

const ProjectUnit = () => {
  const [selectedUnit, setSelectedUnit] = useState<ProjectUnitItem | null>(null);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const openModal = (unit: ProjectUnitItem) => {
    setSelectedUnit(unit);
    // Automatically select the first media in the list (which will be video if it's there)
    if (unit.media && unit.media.length > 0) {
      setActiveMedia(unit.media[0]);
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
          title="Project Unit"
          border_b={true}
        />

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
          className="mySwiper2 rounded-lg"
          breakpoints={{
            320: { slidesPerView: 1 },
            660: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {projectUnitItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="relative group h-[400px] md:h-[500px] rounded-lg w-full cursor-pointer overflow-hidden hover:shadow-2xl"
                onClick={() => openModal(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/80 via-[var(--custom-bg-primary)]/10 to-transparent transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[var(--custom-text-white)] text-2xl font-bold">{item.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-[var(--custom-text-white)]/90 text-sm font-semibold">{item.area}</p>
                      <p className="text-[var(--custom-bg-accent)] font-bold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev custom-prev"></div>
          <div className="swiper-button-next custom-next"></div>
        </Swiper>

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
                      src={activeMedia?.url || selectedUnit.src}
                      fill
                      alt="Gallery image"
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar justify-start items-center">
                  {selectedUnit.media?.map((media, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveMedia(media)}
                      className={`relative h-20 w-28 shrink-0 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:opacity-100 ${activeMedia?.url === media.url ? 'border-[var(--custom-bg-accent)] opacity-100 shadow-md scale-105' : 'border-transparent opacity-60'}`}
                    >
                      {media.type === 'video' ? (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                          <PlayCircle size={24} className="absolute z-1 text-white/80" />
                          {/* A placeholder color for video thumbnail if no poster */}
                          <div className="w-full h-full bg-gray-800" />
                        </div>
                      ) : (
                        <Image src={media.url} fill alt={`Thumbnail ${idx + 1}`} className="object-cover" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col darkLight-text-color">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedUnit.title}</h2>
                  <p className="text-2xl font-semibold text-[var(--custom-bg-accent)] mb-4">{selectedUnit.price}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <Square size={24} className="text-[var(--custom-bg-accent)]" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Area</p>
                      <p className="font-bold text-sm">{selectedUnit.area}</p>
                    </div>
                  </div>
                  {selectedUnit.beds > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                      <BedDouble size={24} className="text-[var(--custom-bg-accent)]" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Bedrooms</p>
                        <p className="font-bold text-sm">{selectedUnit.beds}</p>
                      </div>
                    </div>
                  )}
                  {selectedUnit.baths > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 shadow-sm">
                      <Bath size={24} className="text-[var(--custom-bg-accent)]" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Bathrooms</p>
                        <p className="font-bold text-sm">{selectedUnit.baths}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">Unit Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {selectedUnit.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex gap-4">
                  <button className="flex-1 bg-[var(--custom-bg-accent)] hover:brightness-110 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Book This Unit
                  </button>
                  <button className="flex-1 border-2 border-[var(--custom-bg-accent)] text-[var(--custom-bg-accent)] hover:bg-[var(--custom-bg-accent)]/10 font-bold py-3 px-4 rounded-lg transition-all">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectUnit;
