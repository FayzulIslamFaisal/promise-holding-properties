import Image from "next/image";
import React from "react";

interface SecondaryBannerProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="relative aspect-[16/9] md:aspect-[4/1] w-full shadow-2xl group">
        {/* Background Image with subtle Blur */}
        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover blur-[1px] brightness-100 dark:brightness-75"
            priority
          />
        </div>
        
        {/* Light Mode Overlay - Custom Accent (Brand) Color */}
        <div className="absolute inset-0 bg-[var(--brand-primary)]/35 dark:opacity-0 transition-opacity duration-500" />
        {/* Dark Mode Overlay - Elegant Dark Gradient with Brand Accent Influence */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-b from-[var(--brand-primary)]/40 via-black/50 to-black/95 transition-opacity duration-500" />


        {/* Content - Centered Text with Premium Typography */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-1">
          <h2 className="text-[var(--brand-white)] text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md leading-tight animate-in fade-in zoom-in duration-700">
            {title}
          </h2>
          {subtitle && (
            <div className="flex items-center gap-6 opacity-90 animate-in slide-in-from-bottom-4 duration-1000">
              <span className="h-[2px] w-8 md:w-24 bg-gradient-to-r from-transparent to-[var(--brand-primary)] rounded-full"></span>
              <p className="text-[var(--brand-white)] text-xs md:text-xl font-bold uppercase tracking-[0.5em] drop-shadow-lg">
                {subtitle}
              </p>
              <span className="h-[2px] w-8 md:w-24 bg-gradient-to-l from-transparent to-[var(--brand-primary)] rounded-full"></span>
            </div>
          )}
        </div>

        {/* Premium border shine effect at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--brand-primary)]/50 to-transparent" />
      </div>
    </section>
  );
};

export default SecondaryBanner;
