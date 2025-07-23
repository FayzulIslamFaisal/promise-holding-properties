"use client"
import { motion } from "framer-motion"

interface ProjectDetailWrapperProps {
  slug: string
}

const ProjectBanner = ({ slug }: ProjectDetailWrapperProps) => {
  console.log("Project slug:", slug)
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <div className="pb-14 border-b border-[var(--custom-bg-accent)]/40">
      <div className="w-full h-[calc(100vh-230px)] relative overflow-hidden">
        <video
          src="https://vrbn.io/wp-content/uploads/2022/11/LandingPage_Reel_Website_v006.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label={`Project banner video for ${slug}`}
        />
        <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[var(--custom-text-white)] mb-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Project Title Here
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[var(--custom-text-white)] max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            This is a captivating description for your project, providing more details and context.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default ProjectBanner
