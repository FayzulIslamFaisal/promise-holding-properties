import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

 interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Running' | 'Upcoming' | 'Complete';
  image: string;
  slug: string;
}

interface ProjectCardProps {
  project: Project;
}

const getBadgeClass = (category: Project['category']) => {
  switch (category) {
    case 'Running':
      return 'bg-yellow-500 text-white';
    case 'Upcoming':
      return 'bg-blue-500 text-white';
    case 'Complete':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const ProjectTabCard = ({ project }: ProjectCardProps) => {
  const badgeClass = getBadgeClass(project.category);

  return (
    <Link href={`/project-details/${project.slug}`} target='_blank' className="block">
    <motion.div
      className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/50 dark:from-[var(--custom-bg-accent)]/50 via-[var(--custom-bg-primary)]/30 dark:via-[var(--custom-bg-accent)]/30 to-[var(--custom-bg-white)]/10 dark:to-[var(--custom-bg-white)]/10 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between text-[var(--custom-text-white)]">
        {/* Top: Category Badge */}
        <div className="flex justify-start pt-6 ps-6">
          <Badge 
            className={`px-3 py-1.5 text-sm font-medium rounded-full dark:bg-[var(--custom-bg-accent)] dark:hover:bg-[var(--custom-bg-primary)] shadow-xl ${badgeClass}`}
          >
            {project.category} Project
          </Badge>
        </div>
        
        {/* Bottom: Project Info */}
        <div className="space-y-3 dark:bg-[var(--custom-bg-accent)]/30 bg-[var(--custom-bg-primary)]/30 backdrop-blur-4xl p-4 rounded-lg">
          <h3 className="2xl:text-2xl lg:text-lg md:text-md text-base font-bold leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2 text-white/90">
            <MapPin size={16} />
            <span className="text-sm font-medium">{project.location}</span>
          </div>
        </div>
      </div>
      
      {/* Hover Shadow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl shadow-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
    </Link>
  );
};

export default ProjectTabCard;