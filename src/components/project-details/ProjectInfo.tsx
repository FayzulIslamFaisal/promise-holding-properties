// components/project-details/ProjectInfo.tsx
import {
  MapPin,
  Building2,
  Ruler,
  Layers3,
  Home,
  Car,
  ArrowUpDown,
  Users,
  // MoveRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
// import Link from "next/link";

interface PropertyDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface PropertyCardProps {
  title?: string;
  description?: string;
  address?: string;
  type?: string;
  landArea?: string;
  levels?: string;
  apartmentSize?: string;
  unitsPerLevel?: string;
  totalUnits?: string;
  parkings?: string;
  elevators?: string;
  image?: string;
}

const ProjectInfo = ({
  title = "Luxury Apartment",
  description = "A stunning luxury apartment with modern amenities and breathtaking views.",
  address = "123 Main St, Kallanpur, dhaka,  Bangladesh",
  type = "Apartment",
  landArea = "1500 sqft",
  levels = "10",
  apartmentSize = "1200 sqft",
  unitsPerLevel = "4",
  totalUnits = "40",
  parkings = "20",
  elevators = "2",
  image = "/assets/images/projects/project6.jpg",
}: PropertyCardProps) => {
  const propertyDetails: PropertyDetail[] = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: "Type",
      value: type,
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      label: "Land Area",
      value: landArea,
    },
    {
      icon: <Layers3 className="w-5 h-5" />,
      label: "Levels",
      value: levels,
    },
    {
      icon: <Home className="w-5 h-5" />,
      label: "Apartment Size",
      value: apartmentSize,
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Units Per Level",
      value: unitsPerLevel,
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      label: "Total Units",
      value: totalUnits,
    },
    {
      icon: <Car className="w-5 h-5" />,
      label: "Parkings",
      value: parkings,
    },
    {
      icon: <ArrowUpDown className="w-5 h-5" />,
      label: "Elevators",
      value: elevators,
    },
  ];

  return (

    <section className="px-4">
      <div className="container mx-auto">
        <div className="grid col-span-1 lg:grid-cols-2 gap-6 pt-10 pb-10 md:pb-14 md:pt-14">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-xl group h-[500px] lg:h-full">
            <div className="absolute inset-0 rounded-xl bg-[var(--custom-bg-primary)]/20  group-hover:bg-[var(--custom-bg-primary)]/10 dark:bg-[var(--custom-bg-accent)]/20  dark:group-hover:bg-[var(--custom-bg-accent)]/10 transition-opacity duration-700 z-10" />
            <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-xl "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <Card className="p-4 lg:p-8 flex flex-col justify-center border-[var(--custom-border-primary)] shadow-2xl bg-[var(--custom-border-primary)] h-full relative">
            <div className="space-y-4">
              {/* Header Section */}
              <div className="space-y-4 animate-slide-up">
                <h2 className="text-3xl lg:text-4xl font-bold dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)]  ">
                  {title}
                </h2>
                <p className="text-lg dark:text-[var(--custom-text-white)]/80 text-[var(--custom-text-primary)]/80">
                  {description}
                </p>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 mt-1 dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)] flex-shrink-0" />
                  <span className="text-sm dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)]">{address}</span>
                </div>
              </div>

              {/* AT A GLANCE Section */}
              <div
                className="space-y-6 animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-semibold dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)] uppercase ">
                  At a Glance
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                  {propertyDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="group/item flex items-center gap-2 lg:gap-4 p-4 rounded-xl bg-[var(--custom-bg-primary)]/100 backdrop-blur-sm border border-[var(--custom-bg-white)]/50 hover:border-[var(--custom-bg-primary)]/30 hover:bg-[var(--custom-bg-primary)]/90 transition-all duration-300 hover:transform hover:translate-x-1"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--custom-bg-white)] flex items-center justify-center text-[var(--custom-text-secondary)] group-hover/item:bg-[var(--custom-bg-white)]/80 group-hover/item:text-[var(--custom-text-secondary)] transition-all duration-300">
                        {detail.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[var(--custom-text-white)] transition-colors duration-300">
                          {detail.label}
                        </p>
                        <p className="font-semibold text-[var(--custom-text-white)] transition-colors duration-300">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              {/* <div className="pt-2 flex justify-center " >
                <Link href={`#`} className="btn-glow-accent bg-[var(--custom-bg-primary)] w-full sm:w-1/2 flex justify-center">
                  <span className="flex items-center gap-2 justify-center">
                    Learn More
                    <MoveRight className="animate-pulse" />
                  </span>
                </Link>
              </div> */}
            </div>
          </Card>
        </div>
      </div>
    </section>


  );
};

export default ProjectInfo;
