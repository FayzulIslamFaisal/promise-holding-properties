// components/plot-details/PlotInfo.tsx
import {
  MapPin,
  Building2,
  Ruler,
  Layers3,
  Compass,
  ArrowLeftRight,
  Activity
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PlotDetail } from "@/data/dummyPlots";

interface PlotInfoProps {
  plot: PlotDetail;
}

interface PropertyDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const PlotInfo = ({ plot }: PlotInfoProps) => {

  const propertyDetails: PropertyDetail[] = [];

  if (plot.type) {
    propertyDetails.push({
      icon: <Building2 className="w-5 h-5" />,
      label: "Type",
      value: plot.type,
    });
  }
  if (plot.size || plot.sizeSqft) {
    propertyDetails.push({
      icon: <Ruler className="w-5 h-5" />,
      label: "Plot Area",
      value: plot.size ? `${plot.size} (${plot.sizeSqft.toLocaleString()} sqft)` : `${plot.sizeSqft.toLocaleString()} sqft`,
    });
  }
  if (plot.plotNo) {
    propertyDetails.push({
      icon: <Layers3 className="w-5 h-5" />,
      label: "Plot No",
      value: plot.plotNo,
    });
  }
  if (plot.facing) {
    propertyDetails.push({
      icon: <Compass className="w-5 h-5" />,
      label: "Facing",
      value: plot.facing,
    });
  }
  if (plot.roadSize) {
    propertyDetails.push({
      icon: <ArrowLeftRight className="w-5 h-5" />,
      label: "Road Width",
      value: plot.roadSize,
    });
  }
  if (plot.totalPrice) {
    const priceVal = plot.totalPrice >= 10000000 
      ? `${(plot.totalPrice / 10000000).toFixed(2)} Crore BDT` 
      : plot.totalPrice >= 100000 
        ? `${(plot.totalPrice / 100000).toFixed(2)} Lac BDT` 
        : `${plot.totalPrice.toLocaleString()} BDT`;
    propertyDetails.push({
      icon: <Activity className="w-5 h-5" />,
      label: "Price",
      value: priceVal,
    });
  }
  if (plot.status) {
    propertyDetails.push({
      icon: <Activity className="w-5 h-5" />,
      label: "Status",
      value: plot.status,
    });
  }
  if (plot.googleMapLink) {
    propertyDetails.push({
      icon: <MapPin className="w-5 h-5" />,
      label: "Map",
      value: "View Link",
    });
  }

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <div className="grid col-span-1 lg:grid-cols-2 gap-6 ">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-xl group h-[500px] lg:h-full">
            <div className="absolute inset-0 rounded-xl bg-[var(--brand-dark)]/20  group-hover:bg-[var(--brand-dark)]/10 dark:bg-primary/20  dark:group-hover:bg-primary/10 transition-opacity duration-700 z-1" />
            <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-xl">
              <Image
                src={plot.image}
                alt={plot.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <Card className="p-4 lg:p-8 flex flex-col justify-center border-primary/20 shadow-xl dark:shadow-md bg-white dark:bg-[var(--brand-dark)] h-full relative">
            <div className="space-y-4">
              {/* Header Section */}
              <div className="space-y-4 animate-slide-up">
                <h2 className="text-3xl lg:text-4xl font-bold dark:text-white text-[var(--brand-dark)]  ">
                  {plot.name}
                </h2>
                {plot.description && (
                  <p className="text-base dark:text-white/80 text-[var(--brand-dark)]/80 leading-relaxed">
                    {plot.description}
                  </p>
                )}
                {plot.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 dark:text-white text-[var(--brand-dark)] flex-shrink-0" />
                    <span className="text-sm dark:text-white text-[var(--brand-dark)]">{plot.location}</span>
                  </div>
                )}
              </div>

              {/* AT A GLANCE Section */}
              {propertyDetails.length > 0 && (
                <div
                  className="space-y-6 animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-xl font-semibold dark:text-white text-[var(--brand-dark)] uppercase ">
                    Plot Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                    {propertyDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="group/item flex items-center gap-2 lg:gap-4 p-4 rounded-xl bg-[var(--brand-dark)]/5 dark:bg-white/5 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:transform hover:translate-x-1"
                        style={{ animationDelay: `${0.1 * index}s` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary/20 transition-all duration-300">
                          {detail.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium darkLight-text-color transition-colors duration-300">
                            {detail.label}
                          </p>
                          {detail.label === "Map" && plot.googleMapLink ? (
                            <a 
                              href={plot.googleMapLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="font-semibold text-primary hover:underline transition-colors duration-300"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="font-semibold darkLight-text-color transition-colors duration-300">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlotInfo;
