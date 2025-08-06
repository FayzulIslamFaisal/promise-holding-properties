"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { motion } from "framer-motion"
import React from "react"

interface ContactItem {
  icon: React.ReactNode
  title: string
  details: string[]
}

export default function ContactCard() {
  const contactItems: ContactItem[] = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Corporate Office",
    details: [
      "Khaja Super Market, 2nd to 7th Floor,",
      "Kallyanpur Bus Stop, Mirpur Road,",
      "Dhaka-1207, Bangladesh"
    ]
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    details: ["info@promiseassets.com"] // Update to your actual email if needed
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Sales Enquiry",
    details: ["09647 444 444"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Joint Venture Development",
    details: ["09647 444 444"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "General Enquiry",
    details: ["09647 444 444"]
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "International Callers",
    details: ["+8809647444444"]
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp",
    details: ["+09647 444 444"] // You can update if needed
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Project Name",
    details: ["Promise Assets"]
  }
]


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section className="px-4 pt-10 md:pt-14">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto "
      >
        <div className="text-center group mb-8">
          <h2 className="text-3xl md:text-4xl capitalize font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] tracking-wide">
             get in touch
          </h2>
          <div className="w-24 h-1 bg-[var(--custom-bg-accent)] mx-auto mt-4 rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center border-b border-[var(--custom-bg-accent)]/40 pb-10 md:pb-14">
        {contactItems.map((item, index) => (
            <Card
                key={index}
                className="bg-[var(--custom-bg-white)] dark:bg-[var(--custom-bg-primary)] border-[var(--custom-bg-accent)]/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group mb-2 h-full"
            >
                <CardContent className="space-y-6">
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center flex-col justify-center text-center gap-4 "
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-[var(--custom-bg-accent)] rounded-full flex items-center justify-center text-[var(--custom-text-white)] shadow-md">
                        {item.icon}
                        </div>

                        <div className="flex-1 min-w-0">
                        <h3 className="font-semibold capitalize text-[var(--custom-text-primary)] mb-2 dark:text-[var(--custom-text-white)] transition-colors duration-300">
                            {item.title}
                        </h3>
                        <div className="space-y-1">
                            {item.details.map((detail, detailIndex) => (
                            <p
                                key={detailIndex}
                                className="text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)] text-sm leading-relaxed transition-colors duration-300"
                            >
                                {detail}
                            </p>
                            ))}
                        </div>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
            ))}
        </div>
        
      </motion.div>
    </section>
  )
}
