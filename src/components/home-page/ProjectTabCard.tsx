import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Project } from '@/types/api';

interface ProjectCardProps {
  project: Project;
}

const getBadgeClass = (category: Project['category']) => {
  switch (category?.toLowerCase()) {
    case 'running': return 'bg-green-500 text-white';
    case 'upcoming': return 'bg-blue-500 text-white';
    case 'complete': return 'bg-purple-500 text-white';
    default: return 'bg-[var(--custom-bg-accent)] text-white';
  }
};

const ProjectTabCard = ({ project }: ProjectCardProps) => {
  const badgeClass = getBadgeClass(project.category);

  return (
    <Link href={`/project/${project.slug}`} className="block">
      <motion.div
        className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden rounded-2xl cursor-pointer group border border-[var(--custom-bg-primary)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.image || "/placeholder.svg"})` }}
        />
        
        {/* Primary Gradient Overlay from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/80 via-[var(--custom-bg-accent)]/20 to-transparent transition-opacity duration-300 group-hover:from-[var(--custom-bg-accent)]/90 group-hover:via-[var(--custom-bg-accent)]/30" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top: Category Badge */}
          <div className="flex justify-start">
            <Badge className={`px-4 py-1.5 text-xs font-semibold rounded-md shadow-md border-0 ${badgeClass}`}>
              {project.category || 'Project'}
            </Badge>
          </div>
          
          {/* Bottom: Project Info */}
          <div className="space-y-2 transform transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
              {project.name}
            </h3>
            
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin size={16} className="text-white/90" />
              <span className="text-sm font-medium">{project.location}</span>
            </div>

            <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors duration-300">
                 View Details
                 <ArrowRight size={16} />
               </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectTabCard;
