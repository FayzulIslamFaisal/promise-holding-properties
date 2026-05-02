"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Project } from '@/types/api';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const getBadgeClass = (status: string | undefined) => {
  switch (status?.toLowerCase()) {
    case 'running':
      return '!bg-yellow-500 !text-white';
    case 'upcoming':
      return '!bg-blue-500 !text-white';
    case 'complete':
      return '!bg-green-500 !text-white';
    default:
      return '!bg-gray-500 !text-white';
  }
};

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const badgeClass = getBadgeClass(project.product_status);

  return (
    <Link href={`/project/${project.slug}`} className={`block ${className || ""}`}>
      <motion.div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <NextImage
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Primary Gradient Overlay from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 via-[var(--brand-primary)]/20 to-transparent transition-opacity duration-300 group-hover:from-[var(--brand-primary)]/90 group-hover:via-[var(--brand-primary)]/30" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between text-[var(--brand-white)]">
          {/* Top: Category Badge */}
          <div className="flex justify-start pt-6 ps-6">
            <Badge 
              className={`px-3 py-1.5 text-sm font-medium rounded-full shadow-xl border-0 z-10 ${badgeClass}`}
            >
              {project.product_status || "Project"}
            </Badge>
          </div>
          
          {/* Bottom: Project Info */}
          <div className="space-y-3 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-sm">
              {project.name}
            </h3>
            <div className="flex items-center space-x-2 text-white/90 drop-shadow-sm">
              <MapPin size={16} className="text-white/90" />
              <span className="text-sm font-medium">{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300 w-fit">
              View Project Details
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        {/* Hover Shadow Effect */}
        <div
          className="absolute inset-0 rounded-xl shadow-card-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
