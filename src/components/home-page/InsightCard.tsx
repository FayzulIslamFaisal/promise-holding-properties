
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface InsightCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt?: string;
  readTime?: string;
  views?: number;
  featured?: boolean;
  className?: string;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  id,
  title,
  category,
  date,
  image,
  excerpt,
  views,
  featured,
  className = '',
}) => {
  return (
    <Card
      className={`relative overflow-hidden h-[480px] lg:h-[600px] group rounded-xl shadow-2xl ${className}`}
    >
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title || id}
          fill
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/60 via-[var(--custom-bg-primary)]/40 to-[var(--custom-bg-white)]/10 transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Top badges */}
        <div className="flex justify-between items-start">
          <Badge className="bg-[var(--custom-bg-accent)]/90 text-[var(--custom-text-white)] backdrop-blur-sm border-0 hover:bg-[var(--custom-bg-accent)]">
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-[var(--custom-bg-primary)]/90 text-[var(--custom-text-white)] backdrop-blur-sm border-0">
              Featured
            </Badge>
          )}
        </div>

        {/* Middle content */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sm mb-2">
            <Calendar className="w-4 h-4 text-[var(--custom-text-white)]" />
            <span className="text-[var(--custom-text-white)]">{date}</span>
          </div>

          <h3 className="text-2xl font-bold text-[var(--custom-text-white)]/70 mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-[var(--custom-text-white)]">
            {title}
          </h3>

          {excerpt && (
            <p className="text-[var(--custom-text-white)]/80 text-sm mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-[var(--custom-text-white)]">
              {excerpt}
            </p>
          )}
        </div>

        {/* Bottom info + button */}
        <div className="flex justify-between items-end">
          <div className="flex gap-2 text-sm">
            {views !== undefined && (
              <div className="flex items-center gap-1 bg-[var(--custom-bg-primary)] text-[var(--custom-text-white)] px-2 py-1 rounded-full backdrop-blur-sm">
                <Eye className="w-3 h-3" />
                <span>{views.toLocaleString()}</span>
              </div>
            )}
          </div>

          <Link
            href={`/insight/${id}`}
            className="btn-glow-accent"
          >
            <span className="mr-2">Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1 animate-pulse" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

