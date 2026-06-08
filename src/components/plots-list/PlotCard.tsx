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
      return '!bg-green-500 !text-white';
    case 'booked':
      return '!bg-blue-500 !text-white';
    case 'sold':
      return '!bg-red-500 !text-white';
    default:
      return '!bg-gray-500 !text-white';
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
      className="block w-full"
    >
      <motion.div
        className="relative aspect-[2/3] w-full overflow-hidden rounded-xl cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <NextImage
            src={plot.image || "/placeholder.svg"}
            alt={plot.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Primary Gradient Overlay from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90 group-hover:via-primary/30" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between text-white">
          {/* Top: Category Badge & Size */}
          <div className="flex justify-between items-start pt-6 px-6">
            {plot.status ? (
              <Badge 
                className={`px-3 py-1.5 text-sm font-medium rounded-full shadow-xl border-0 z-10 capitalize ${badgeClass}`}
              >
                {plot.status}
              </Badge>
            ) : (
              <div />
            )}
            <Badge 
              className="px-3 py-1.5 text-sm font-medium rounded-full shadow-xl border-0 z-10 bg-black/40 backdrop-blur-sm text-white flex items-center gap-1"
            >
              <Ruler size={12} />
              {plot.size}
            </Badge>
          </div>
          
          {/* Bottom: Plot Info */}
          <div className="space-y-4 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
            <div>
              <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-sm mb-1">
                {plot.name}
              </h3>
              
              <div className="flex items-center space-x-2 text-white/90 drop-shadow-sm mb-2">
                <MapPin size={16} className="text-white/90" />
                <span className="text-sm font-medium">{plot.location}</span>
              </div>

              <div className="flex items-center space-x-1 text-white font-extrabold drop-shadow-sm">
                <span className="text-lg text-primary-foreground bg-primary/25 px-2 py-0.5 rounded text-sm">
                  {formatPrice(plot.totalPrice)}
                </span>
              </div>
            </div>

            <Button 
              className="w-full bg-white/10 text-white hover:bg-white/90 hover:!text-primary transition-all duration-300 rounded-lg font-bold tracking-wider group/btn shadow-lg border-0"
            >
              View Plot Details
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Hover Shadow Effect */}
        <div
          className="absolute inset-0 rounded-xl shadow-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </motion.div>
    </Link>
  );
};

export default PlotCard;
