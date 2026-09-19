import React from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { companyServiceService } from "@/services";
import { ChooseService } from "@/types/api";
import { Award, Clock, Shield, TrendingUp } from "lucide-react";

interface Feature {
  icon: React.ElementType | string;
  title: string;
  description: string;
  id: number;
}

const fallbackFeatures: Feature[] = [
  { id: 1, icon: Shield, title: "Trusted", description: "Proven reliability across prime real estate developments." },
  { id: 2, icon: Award, title: "Award-Winning", description: "Recognized industry excellence and quality assurance." },
  { id: 3, icon: Clock, title: "Verified Properties", description: "Fully verified land titles and round-the-clock advisory." },
  { id: 4, icon: TrendingUp, title: "Results-Driven", description: "Consistent, high-yield capital growth and solid ROI." },
];

const WhyChooseOurServices = async () => {
  let featuresRes: ChooseService[] = [];
  try {
    const res = await companyServiceService.getChooseServices();
    featuresRes = res.data || [];
  } catch (error) {
    console.error("Error fetching choose services:", error);
  }

  const features: (ChooseService | Feature)[] =
    featuresRes && featuresRes.length ? featuresRes : fallbackFeatures;

  return (
    <section className="px-4 py-16 md:py-20 bg-[#fcfaf6] dark:bg-[#14120e] border-y border-primary/20 dark:border-primary/20 relative overflow-hidden">
      {/* Warm Golden Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="Why Choose Our Services"
          border_b={true}
          subtitle="Experience excellence, transparency, and high-return property solutions tailored for you"
        />

        {/* 4-Column Centered Layout with Golden Brand Vibe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 md:mt-14">
          {features.map((feature: ChooseService | Feature, index: number) => {
            const f = feature as ChooseService & Feature;
            const isStringIcon = typeof f.icon === "string" && f.icon.trim() !== "";
            const iconSrc = isStringIcon ? encodeURI(f.icon as string) : "";
            const IconComponent = !isStringIcon
              ? (f.icon as React.ComponentType<{ className?: string }>)
              : null;

            return (
              <div
                key={f.id || index}
                className="group relative bg-white dark:bg-[#1e1a14]/90 backdrop-blur-sm rounded-2xl border border-primary/30 dark:border-primary/35 p-6 text-center flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(197,154,63,0.08)] hover:shadow-[0_12px_32px_rgba(197,154,63,0.25)] hover:border-primary dark:hover:border-primary overflow-hidden"
              >
                {/* Top Subtle Gold Pill Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 group-hover:w-24 h-1 bg-primary transition-all duration-300 rounded-b-full shadow-[0_0_12px_rgba(197,154,63,0.5)]" />

                {/* Ambient Warm Golden Glow on Card Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Centered Golden Brand Icon Badge */}
                <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary via-[#c59a3f] to-[#ab7f29] border border-amber-300/30 flex items-center justify-center p-3 mb-4 shrink-0 shadow-[0_4px_16px_rgba(197,154,63,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(197,154,63,0.5)]">
                  {isStringIcon ? (
                    <Image
                      src={iconSrc}
                      alt={f.title}
                      width={32}
                      height={32}
                      unoptimized
                      className="w-7 h-7 object-contain [filter:brightness(0)_invert(1)] transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    IconComponent && (
                      <IconComponent className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                    )
                  )}
                </div>

                {/* Centered Title & Description */}
                <div className="relative z-10 my-auto w-full">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-amber-50 group-hover:text-primary transition-colors tracking-tight mb-2 line-clamp-1">
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-[13.5px] text-gray-600 dark:text-stone-300/90 leading-relaxed line-clamp-4">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurServices;
