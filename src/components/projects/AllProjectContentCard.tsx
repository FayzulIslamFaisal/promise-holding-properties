import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/api";

interface AllProjectCardProps {
  project: Project;
}

const getBadgeColor = (category: string | undefined) => {
  switch (category?.toLowerCase()) {
    case "running": return "bg-green-500 text-white";
    case "upcoming": return "bg-blue-500 text-white";
    case "complete": return "bg-purple-500 text-white";
    default: return "bg-[var(--custom-bg-accent)] text-white";
  }
};

const AllProjectContentCard: React.FC<AllProjectCardProps> = ({ project }) => {
  const badgeClass = getBadgeColor(project.category);

  return (
    <Card className="group overflow-hidden rounded-2xl !border border-[var(--custom-bg-primary)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 py-0 gap-0 bg-transparent dark:bg-transparent hover:scale-100" variant="default">
      <CardContent className="p-0 relative h-[450px] flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Primary Color Gradient Effect from Bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/80 via-[var(--custom-bg-accent)]/20 to-transparent transition-opacity duration-300 group-hover:from-[var(--custom-bg-accent)]/90 group-hover:via-[var(--custom-bg-accent)]/30" />
        </div>

        {/* Badge */}
        <Badge className={`absolute top-4 left-4 text-xs font-semibold px-4 py-1.5 rounded-md shadow-md border-0 z-10 ${badgeClass}`}>
          {project.category || "Project"}
        </Badge>

        {/* Content Box */}
        <div className="relative z-10 p-6 flex flex-col gap-2 transform transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
            {project.name}
          </h3>
          
          <div className="flex items-center gap-2 text-white/90 mb-2">
            <MapPin className="w-4 h-4 text-white/90" />
            <span className="text-sm font-medium">{project.location}</span>
          </div>

          {/* <Link
            href={`/project/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300 w-fit"
          >
            View Project Details
            <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default AllProjectContentCard;
