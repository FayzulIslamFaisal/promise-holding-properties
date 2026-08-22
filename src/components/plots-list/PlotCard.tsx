'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight, Ruler } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Button } from '@/components/ui/button';
import { PlotDetail } from '@/data/dummyPlots';

interface PlotCardProps {
  plot: PlotDetail;
  projectSlug: string;
  className?: string;
}

const getBadgeClass = (status: string | undefined) => {
  switch (status?.toLowerCase()) {
    case 'available':
      return '!bg-emerald-600 !text-white';
    case 'booked':
      return '!bg-amber-600 !text-white';
    case 'sold':
      return '!bg-rose-600 !text-white';
    default:
      return '!bg-gray-600 !text-white';
  }
};

const PlotCard = ({ plot, projectSlug, className }: PlotCardProps) => {
  const badgeClass = getBadgeClass(plot.status);

  // Formatted price (e.g. 2.05 Crore BDT)
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Crore BDT`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(2)} Lac BDT`;
    }
    return `${price.toLocaleString()} BDT`;
  };

  return (
    <Link 
      href={`/project/${projectSlug}/plot/${plot.slug}`} 
      className={`block w-full ${className || ''}`}
    >
      <motion.div
        className="relative h-[360px] sm:h-[380px] md:h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <NextImage
            src={plot.image || "/placeholder.svg"}
            alt={plot.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        {/* Dark Gradient Overlay for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />
        
        {/* Content Overlay - Everything INSIDE the Image */}
        <div className="absolute inset-0 flex flex-col justify-between text-white p-5 sm:p-6 z-10">
          {/* Top: Category Badge & Size */}
          <div className="flex justify-between items-center">
            {plot.status ? (
              <Badge 
                className={`px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-xl border-0 capitalize ${badgeClass}`}
              >
                {plot.status}
              </Badge>
            ) : (
              <div />
            )}
            
            <Badge 
              className="px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full shadow-xl border-0 bg-black/50 backdrop-blur-md text-white flex items-center gap-1.5"
            >
              <Ruler size={14} className="text-primary-foreground" />
              {plot.size}
            </Badge>
          </div>
          
          {/* Bottom: Plot Title, Location/Address, Price, Button - All inside image */}
          <div className="space-y-3 transform transition-transform duration-300 group-hover:-translate-y-1">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight drop-shadow-md mb-1.5">
                {plot.name}
              </h3>
              
              <div className="flex items-center space-x-2 text-white/90 drop-shadow-sm mb-2.5">
                <MapPin size={16} className="text-white/90 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{plot.location}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-extrabold text-white bg-primary px-3 py-1 rounded-lg shadow-lg">
                  {formatPrice(plot.totalPrice)}
                </span>
              </div>
            </div>

            <Button 
              className="w-auto px-5 bg-white/15 text-white hover:bg-white hover:!text-primary transition-all duration-300 rounded-xl font-bold tracking-wider group/btn shadow-lg border border-white/20 backdrop-blur-sm py-2.5 text-xs sm:text-sm"
            >
              <span>View Plot Details</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Subtle Hover Border Ring */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-primary/60 transition-colors duration-300 pointer-events-none"
        />
      </motion.div>
    </Link>
  );
};

export default PlotCard;
