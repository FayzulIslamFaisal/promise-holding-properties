import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface ServiceCardData {
  id?: number | string;
  icon?: React.ElementType | string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  number?: string;
}

// ---------------------------------------------------------------------------
// Outline Watermark SVGs
// ---------------------------------------------------------------------------

const BuildingWatermark = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-40 h-40 md:w-48 md:h-48 text-[#ebdcc2]/85 dark:text-[#382c1b]/35 absolute -bottom-4 -right-4 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
  >
    {/* Left wing with rounded top */}
    <path d="M18 150 V80 C18 68 26 62 38 62 H50 V150" />
    {/* Right wing with rounded top */}
    <path d="M110 150 V80 C110 68 122 62 134 62 H142 V150" />
    {/* Main central tower with rounded top */}
    <path d="M50 150 V34 C50 20 60 14 74 14 H86 C100 14 110 20 110 34 V150" />
    {/* Arched entrance at bottom */}
    <path d="M66 150 V118 C66 108 72 102 80 102 C88 102 94 108 94 118 V150" />
    {/* Window slots */}
    <rect x="64" y="42" width="12" height="18" rx="3" />
    <rect x="84" y="42" width="12" height="18" rx="3" />
  </svg>
);

const CompassWatermark = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-44 h-44 md:w-52 md:h-52 text-[#ebdcc2]/85 dark:text-[#382c1b]/35 absolute top-1/2 -translate-y-1/2 -right-6 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
  >
    {/* Outer circle */}
    <circle cx="85" cy="80" r="58" />
    {/* Diamond compass needle rotated */}
    <g transform="rotate(28 85 80)">
      <polygon points="85,28 116,80 85,132 54,80" />
    </g>
  </svg>
);

const TrendingWatermark = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-40 h-40 md:w-48 md:h-48 text-[#ebdcc2]/85 dark:text-[#382c1b]/35 absolute -bottom-4 -right-4 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
  >
    {/* Zigzag trend line */}
    <polyline points="20,130 65,85 95,108 142,48" />
    {/* Arrow head */}
    <polyline points="108,48 142,48 142,82" />
  </svg>
);

const PalmWatermark = () => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-40 h-40 md:w-48 md:h-48 text-[#ebdcc2]/85 dark:text-[#382c1b]/35 absolute -bottom-4 -right-4 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
  >
    {/* Curved trunk on right */}
    <path d="M128 152 C 120 110, 105 78, 88 64" />
    <path d="M140 152 C 130 112, 114 80, 94 64" />
    {/* Palm fronds / leaves */}
    <path d="M90 64 C 70 36, 35 40, 20 56 C 42 62, 68 64, 90 64" />
    <path d="M90 64 C 74 20, 98 10, 120 24 C 108 38, 100 50, 90 64" />
    <path d="M90 64 C 60 60, 38 82, 35 106 C 56 92, 74 82, 90 64" />
    <path d="M90 64 C 112 52, 140 60, 154 78 C 136 84, 116 78, 90 64" />
  </svg>
);

function getWatermark(index: number, title?: string) {
  const t = (title || "").toLowerCase();
  if (
    t.includes("house") ||
    t.includes("housing") ||
    t.includes("building") ||
    t.includes("hotel") ||
    t.includes("architect")
  ) {
    return BuildingWatermark;
  }
  if (
    t.includes("purbachal") ||
    t.includes("city") ||
    t.includes("smart") ||
    t.includes("plan") ||
    t.includes("urban") ||
    t.includes("land")
  ) {
    return CompassWatermark;
  }
  if (
    t.includes("invest") ||
    t.includes("solution") ||
    t.includes("advisory") ||
    t.includes("wealth") ||
    t.includes("market")
  ) {
    return TrendingWatermark;
  }
  if (
    t.includes("resort") ||
    t.includes("beach") ||
    t.includes("cox") ||
    t.includes("tourist") ||
    t.includes("vacation")
  ) {
    return PalmWatermark;
  }

  const list = [BuildingWatermark, CompassWatermark, TrendingWatermark, PalmWatermark];
  return list[index % list.length];
}

// ---------------------------------------------------------------------------
// Card Component
// ---------------------------------------------------------------------------

interface OurServiceCardProps {
  service: ServiceCardData;
  index?: number;
}

const OurServiceCard: React.FC<OurServiceCardProps> = ({ service, index = 0 }) => {
  const isImageString =
    typeof service.icon === "string" &&
    service.icon.trim() !== "" &&
    (service.icon.startsWith("http") || service.icon.startsWith("/"));

  const iconSrc = isImageString ? encodeURI(service.icon as string) : "";
  const CustomIcon = typeof service.icon === "function" ? service.icon : null;
  const Watermark = getWatermark(index, service.title);

  const displayNumber = service.number || String(index + 1).padStart(2, "0");

  return (
    <div className="group relative bg-white dark:bg-zinc-900/90 rounded-[24px] border border-[#f0ece1] dark:border-zinc-800 p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(197,154,63,0.12)] hover:border-[#c59a3f]/40 hover:-translate-y-1 transition-all duration-300 min-h-[290px]">
      {/* Background Outline Watermark */}
      <Watermark />

      {/* Top Row: Dynamic Icon Container & Number */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#fffbf2] dark:bg-amber-950/25 border border-[#ecd9be] dark:border-amber-800/40 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(197,154,63,0.06)] transition-colors duration-300 group-hover:border-[#c59a3f]/60 p-2">
          {isImageString ? (
            <Image
              src={iconSrc}
              alt={service.title}
              width={28}
              height={28}
              unoptimized
              className="w-6 h-6 object-contain [filter:brightness(0)_saturate(100%)_invert(67%)_sepia(48%)_saturate(548%)_hue-rotate(6deg)_brightness(92%)_contrast(87%)] dark:[filter:brightness(0)_invert(1)] transition-transform duration-300 group-hover:scale-110"
            />
          ) : CustomIcon ? (
            <CustomIcon className="w-5 h-5 text-[#c59a3f] dark:text-[#dfb260]" strokeWidth={1.8} />
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f]" />
          )}
        </div>

        <span className="text-3xl md:text-4xl font-bold text-[#eedfc2] dark:text-[#524128] tracking-wider select-none">
          {displayNumber}
        </span>
      </div>

      {/* Middle: Title & Description */}
      <div className="relative z-10 my-auto">
        <h3 className="text-xl md:text-[22px] font-bold text-gray-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-[14.5px] leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Bottom: Learn More (Disabled) */}
      <div className="relative z-10 pt-1">
        <div
          aria-disabled="true"
          title="Disabled"
          className="inline-flex items-center gap-3 text-[#b68936]/60 dark:text-[#dfb260]/60 font-medium text-sm md:text-base cursor-not-allowed select-none opacity-80"
        >
          <span>Learn More</span>
          <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#c59a3f]/60 text-white flex items-center justify-center shadow-sm">
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
