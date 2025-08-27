import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define prop type
interface AllProject {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string;
  slug: string;
}

interface AllProjectCardProps {
  allProject: AllProject;
}

const AllProjectContentCard: React.FC<AllProjectCardProps> = ({ allProject }) => {
  return (
    <Card
      className="group py-0"
      variant={"hoverEffect"}
    >
      <CardContent className="p-0 relative h-full pb-4 md:pb-6 ">
        {/* Cover Image with Badge */}
        <div className="p-4 md:p-6">
            <div
            className="relative overflow-hidden w-full h-[300px] md:h-[400px] rounded-lg border border-[var(--custom-bg-white)]/40 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            >
            <Image
                src={allProject.coverImage || "/placeholder.svg"}
                alt={allProject.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <Badge
                className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-2xl bg-[var(--custom-bg-accent)] dark:bg-[var(--custom-bg-primary)] text-[var(--custom-text-white)] shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                
            >
                {allProject.tags}
            </Badge>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/60 dark:from-[var(--custom-bg-accent)]/60 via-[var(--custom-bg-primary)]/40  dark:via-[var(--custom-bg-primary)]/40 to-[var(--custom-bg-white)]/10 dark:to-[var(--custom-bg-white)]/10 transition-opacity duration-500 group-hover:opacity-90" />
            </div>
        </div>

        {/* Content */}
        <div className="pt-0 px-4 md:px-6 pb-13">
          <h3 className="darkLight-text-color md:text-lg text-base font-semibold mb-3 leading-tight">
            {allProject.title}
          </h3>
          <p className="darkLight-text-color text-sm font-medium">
            {allProject.date}
          </p>
        </div>
        {/* Button fixed bottom */}
        <div className="flex items-center justify-between absolute bottom-4 md:bottom-6 left-4 md:left-6">
          <Link
            href={`/project-details/${allProject.slug}`}
            className="btn-glow-accent inline-flex items-center gap-1"
          >
            View Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default AllProjectContentCard
