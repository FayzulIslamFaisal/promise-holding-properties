import Image from "next/image";
import React from "react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
}) => {
  return (
    <section className="sectionSpaceBorder pt-0">
      <div className="relative h-[calc(100vh-200px)] md:h-[calc(100vh-200px)]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[var(--brand-dark)]/20 backdrop-filter dark:bg-[var(--brand-primary)]/20 z-1" />
        <div className="absolute inset-0 z-2 flex items-center justify-center text-center">
          <div className="max-w-full px-4 md:max-w-4xl mx-auto">
            <h1 className="bannerText">{title}</h1>
            {subtitle && (
              <p className="text-[var(--brand-white)] pb-4 capitalize font-semibold text-lg md:text-3xl">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-[var(--brand-white)] text-base md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
