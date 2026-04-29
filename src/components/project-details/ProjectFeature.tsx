
"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import SectionTitle from "../common/SectionTitle"

const ProjectFeature = ({
  items,
  className,
}: {
  items: {
    title: string
    icon: React.ReactNode

  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="px-4 ">
    <div className="container mx-auto sectionSpaceBorder">
        
        <SectionTitle
          title="Our Features"
          border_b={true}
        />
        <div className={cn("grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", className)}>
            {items.map((item, index) => (
                <div
                    key={item?.title}
                    className="relative group block h-full w-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                <AnimatePresence>
                    {hoveredIndex === index && (
                    <motion.span
                        className="absolute inset-0 h-full w-full bg-[var(--custom-bg-accent)]/10 block rounded-2xl"
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
                <Card>
                    <CardTitle>{item.icon}</CardTitle>
                    <CardDescription>{item.title}</CardDescription>
                </Card>
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}
export default ProjectFeature;

const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-[var(--custom-bg-primary)]/5 dark:bg-[var(--custom-bg-white)]/5 border border-[var(--custom-bg-accent)]/20 group-hover:border-[var(--custom-bg-accent)]/70 shadow-sm group-hover:shadow-lg transition-all duration-300 relative z-0",
        className,
      )}
    >
    <div className=" h-full w-full flex flex-col items-center justify-center">{children}</div>
    </div>
  )
}
const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <h4 className={cn("bg-[var(--custom-bg-accent)]/10 text-[var(--custom-bg-accent)] p-3 rounded-full mb-3", className)}>{children}</h4>
}

const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn("darkLight-text-color tracking-wide leading-relaxed font-semibold text-center text-md", className)}>{children}</p>
}
