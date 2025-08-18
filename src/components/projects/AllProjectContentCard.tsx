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
      className="group cursor-pointer py-0 transition-all duration-300 hover:scale-102 overflow-hidden border border-[var(--custom-bg-accent)]/50 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
    >
      <CardContent className="p-0 relative h-full group-hover:bg-[var(--custom-bg-accent)]/20 bg-[var(--custom-bg-accent)]/10 dark:bg-[var(--custom-bg-primary)] pb-4 md:pb-6 transition-all duration-300">
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
        <div className=" pt-0 px-4 md:px-6">
          <h3 className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] md:text-lg text-base font-semibold mb-3 leading-tight">
            {allProject.title}
          </h3>
          <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm font-medium mb-4">
            {allProject.date}
          </p>

          {/* View allProject Link */}
          <div className="flex items-center justify-between">
            <Link
              href={`/project-details/${allProject.slug}`}
              className="btn-glow-accent"
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AllProjectContentCard
