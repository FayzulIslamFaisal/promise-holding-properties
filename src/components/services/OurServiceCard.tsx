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

  const displayNumber = service.number || String(index + 1).padStart(2, "0");

  return (
    <div className="group relative bg-white dark:bg-[#1e1a14]/90 rounded-[24px] border border-primary/25 dark:border-primary/35 hover:border-primary dark:hover:border-primary p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(197,154,63,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(197,154,63,0.18)] hover:-translate-y-1 transition-all duration-300 min-h-[290px]">
      {/* Background Dynamic Image Watermark (Same PNG icon with reduced opacity) */}
      {isImageString ? (
        <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 pointer-events-none select-none opacity-[0.10] dark:opacity-[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-15">
          <Image
            src={iconSrc}
            alt=""
            width={180}
            height={180}
            unoptimized
            className="w-full h-full object-contain [filter:brightness(0)_saturate(100%)_invert(67%)_sepia(48%)_saturate(548%)_hue-rotate(6deg)_brightness(92%)_contrast(87%)] dark:[filter:brightness(0)_invert(1)]"
          />
        </div>
      ) : CustomIcon ? (
        <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 pointer-events-none select-none opacity-[0.10] dark:opacity-[0.06] text-[#c59a3f] transition-transform duration-500 group-hover:scale-110 group-hover:opacity-15">
          <CustomIcon className="w-full h-full" strokeWidth={1} />
        </div>
      ) : null}

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
