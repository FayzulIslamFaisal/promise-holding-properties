
"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import type React from "react"

export const ProjectFeature = ({
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
    <div className="container mx-auto pt-10 pb-10 md:pb-14 md:pt-14 border-t border-b border-[var(--custom-bg-accent)]/40">
        <div className="pb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-[var(--custom-bg-white)]">
                Features
            </h2>
        </div>
        <div className={cn("grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-[var(--custom-border-primary)] p-2 md:p-4 rounded-3xl", className)}>
            {items.map((item, index) => (
                <div
                    key={item?.title}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                <AnimatePresence>
                    {hoveredIndex === index && (
                    <motion.span
                        className="absolute inset-0 h-full w-full bg-[var(--custom-bg-accent)] block rounded-3xl"
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
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[var(--custom-bg-primary)]/90 border border-transparent group-hover:border-[var(--custom-bg-accent)]/70 relative z-20",
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
  return <h4 className={cn("bg-[var(--custom-bg-white)] p-2 rounded-full mb-2", className)}>{children}</h4>
}

const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn(" text-[var(--custom-text-white)] tracking-wide leading-relaxed text-md", className)}>{children}</p>
}
