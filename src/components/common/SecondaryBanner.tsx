import Image from "next/image";
import React from "react";

interface SecondaryBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  imageSrc: string;
}

const SecondaryBanner: React.FC<SecondaryBannerProps> = ({
  title,
  subtitle,
  badge,
  imageSrc,
}) => {
  return (
    <section className="w-full overflow-hidden relative">
      <div className="relative aspect-[16/9] md:aspect-[4/1] w-full shadow-2xl group">
        {/* Background Image - Crisp & HD without blur */}
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
        <div className="absolute inset-0 bg-primary/35 dark:opacity-0 transition-opacity duration-500" />
        {/* Dark Mode Overlay - Elegant Dark Gradient with Brand Accent Influence */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-b from-primary/40 via-black/50 to-black/95 transition-opacity duration-500" />


        {/* Content - Centered Text with Premium Typography & Optional Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          {badge && (
            <div className="mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/60 bg-black/40 backdrop-blur-md animate-in fade-in zoom-in duration-500">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-3 [text-shadow:_0_2px_6px_rgba(0,0,0,0.9)] leading-tight animate-in fade-in zoom-in duration-700 max-w-full md:max-w-4xl mx-auto">
            {title}
          </h1>

          {subtitle && (
            <div className="flex items-center gap-4 md:gap-6 opacity-95 animate-in slide-in-from-bottom-4 duration-1000">
              <span className="h-[2px] w-8 md:w-20 bg-gradient-to-r from-transparent to-primary rounded-full"></span>
              <p className="text-white/90 text-xs md:text-sm lg:text-base font-semibold uppercase tracking-[0.35em] [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                {subtitle}
              </p>
              <span className="h-[2px] w-8 md:w-20 bg-gradient-to-l from-transparent to-primary rounded-full"></span>
            </div>
          )}
        </div>

        {/* Premium border shine effect at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default SecondaryBanner;
