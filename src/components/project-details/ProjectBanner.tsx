"use client"
import { motion } from "framer-motion"
import { ProjectDetail } from "@/types/api"

interface ProjectBannerProps {
  project: ProjectDetail;
}

const ProjectBanner = ({ project }: ProjectBannerProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div className="pb-10 md:pb-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="w-full h-[calc(100vh-230px)] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${project.project_image})` }}
        />
        <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 dark:bg-[var(--custom-bg-accent)]/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-1 p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[var(--custom-text-white)] mb-6 shadow-sm"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {project.project_name}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[var(--custom-text-white)] max-w-2xl bg-black/20 backdrop-blur-sm p-4 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {`Discover the excellence of ${project.project_name} in ${project.project_location}.`}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default ProjectBanner
