
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define prop type
interface Newsletter {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  tags: string;
  slug?: string;
}

interface MediaCenterContentCardProps {
  newsletter: Newsletter;
}

const MediaCenterContentCard: React.FC<MediaCenterContentCardProps> = ({ newsletter }) => {
  return (
    <Card
      className="group py-0 rounded-lg"
      key={newsletter.id}
      variant={"hoverEffect"}
    >
      <CardContent className="p-0 relative h-full  pb-4 md:pb-6">
        <div className="p-4 md:p-6 relative h-full pb-8">
            <div className="relative overflow-hidden w-full h-[300px] md:h-[400px] rounded-lg border border-[var(--custom-bg-white)]/40 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
              <Image
                  src={newsletter.coverImage || "/placeholder.svg"}
                  alt={newsletter.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <Badge className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-2xl bg-[var(--custom-bg-accent)] dark:bg-[var(--custom-bg-primary)] text-[var(--custom-text-white)] shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {newsletter.tags}
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/60 dark:from-[var(--custom-bg-accent)]/60 via-[var(--custom-bg-primary)]/40  dark:via-[var(--custom-bg-primary)]/40 to-[var(--custom-bg-white)]/10 dark:to-[var(--custom-bg-white)]/10 transition-opacity duration-500 group-hover:opacity-90" ></div>
            </div>
            <div className="pt-4 pb-6">
              <h3 className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-lg font-semibold mb-3 leading-tight">
                {newsletter.title}
              </h3>
              <p className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm font-medium pb-2">
                {newsletter.date}
              </p>
            </div>
            <div className="flex items-center justify-between absolute bottom-0 left-6 ">
                <Link
                  href={`/media-center/${newsletter.slug}`}
                  className="btn-glow-accent"
                >
                  View Newsletter
                  <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCenterContentCard;
