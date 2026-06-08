"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import SectionTitle from "../common/SectionTitle"
import { CheckCircle2 } from "lucide-react"

const ProjectFeature = ({
  items,
  className,
}: {
  items: any[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="px-4">
      <div className="container mx-auto sectionSpaceBorder">
        <SectionTitle title="Our Features" border_b={true} />
        
        <div className={cn("grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", className)}>
          {(items || []).map((item, index) => {
            const title = typeof item === "string" ? item : item?.title || item?.name || "";
            const icon = (item && typeof item === "object" && item.icon) || <CheckCircle2 className="w-8 h-8 text-primary" />;

            if (!title) return null;

            return (
              <div
                key={title}
                className="relative group block h-full w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-primary/10 block rounded-2xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-[var(--brand-dark)]/5 dark:bg-white/5 border border-primary/20 group-hover:border-primary/70 shadow-sm group-hover:shadow-lg transition-all duration-300 relative z-0">
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <div className="bg-primary/10 text-primary p-3 rounded-full mb-3">
                      {icon}
                    </div>
                    <p className="darkLight-text-color tracking-wide leading-relaxed font-semibold text-center text-md">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectFeature
