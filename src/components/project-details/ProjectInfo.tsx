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
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ProjectDetail } from "@/types/api";

interface ProjectInfoProps {
  project: ProjectDetail;
}

interface PropertyDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const firstBuilding = project.buildings[0];

  const propertyDetails: PropertyDetail[] = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: "Type",
      value: firstBuilding?.building_type || "Residential",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      label: "Building Area",
      value: firstBuilding ? `${firstBuilding.building_area_sqft} sqft` : "N/A",
    },
    {
      icon: <Layers3 className="w-5 h-5" />,
      label: "Plot No",
      value: firstBuilding?.plot_no || "N/A",
    },
    {
      icon: <Home className="w-5 h-5" />,
      label: "Total Buildings",
      value: project.buildings.length.toString(),
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Units",
      value: firstBuilding?.units.length.toString() || "0",
    },
    {
      icon: <Car className="w-5 h-5" />,
      label: "Parking Slots",
      value: firstBuilding?.parking_slots.length.toString() || "0",
    },
    {
      icon: <ArrowUpDown className="w-5 h-5" />,
      label: "Features",
      value: firstBuilding?.features.length.toString() || "0",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Map",
      value: project.google_map_link ? "View Link" : "N/A",
    },
  ];

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <div className="grid col-span-1 lg:grid-cols-2 gap-6 ">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-xl group h-[500px] lg:h-full">
            <div className="absolute inset-0 rounded-xl bg-[var(--custom-bg-primary)]/20  group-hover:bg-[var(--custom-bg-primary)]/10 dark:bg-[var(--custom-bg-accent)]/20  dark:group-hover:bg-[var(--custom-bg-accent)]/10 transition-opacity duration-700 z-1" />
            <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-xl">
              <Image
                src={project.project_image}
                alt={project.project_name}
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
                  {project.project_name}
                </h2>
                <p className="text-lg dark:text-[var(--custom-text-white)]/80 text-[var(--custom-text-primary)]/80">
                  {`Experience superior living at ${project.project_name}, a prime development in the heart of ${project.project_location}.`}
                </p>
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 mt-1 dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)] flex-shrink-0" />
                  <span className="text-sm dark:text-[var(--custom-text-white)] text-[var(--custom-text-primary)]">{project.project_location}</span>
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
