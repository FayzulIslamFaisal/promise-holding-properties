"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { motion } from "framer-motion"
import React from "react"
import SectionTitle from "../common/SectionTitle"

interface ContactItem {
  icon: React.ReactNode
  title: string
  details: string[]
}

import { useSettings } from '@/providers/SettingsProvider'

export default function ContactCard() {
  const settings = useSettings();
  
  const siteAddress = settings?.general_settings?.site_address || "Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207, Bangladesh";
  const siteEmail = settings?.general_settings?.site_email || "info@promiseassets.com";
  const sitePhone = settings?.general_settings?.site_phone || "09647 444 444";
  const siteName = settings?.general_settings?.site_name || "Promise Assets";

  const contactItems: ContactItem[] = [
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Corporate Office",
    details: [siteAddress]
  },
  {
    icon: <Mail className="w-10 h-10" />,
    title: "Email Address",
    details: [siteEmail]
  },
  {
    icon: <Phone className="w-10 h-10" />,
    title: "Phone Number",
    details: [sitePhone]
  },
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Project Name",
    details: [siteName]
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
    <section className="px-4 pt-10 md:pt-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto "
      >
          <SectionTitle title="get in touch"  border_b={true} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center pt-0 sectionSpaceBorder">
        {contactItems.map((item, index) => (
            <Card
                key={index}
                className="hover:-translate-y-2 group mb-2 h-full"
                variant={"hoverEffect"}
            >
                <CardContent className="space-y-6">
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center flex-col justify-center text-center gap-4 "
                    >
                        <div className="flex-shrink-0 p-2 w-16 h-16 bg-[var(--custom-bg-accent)] rounded-full flex items-center justify-center text-[var(--custom-text-white)] shadow-md">
                         <span className="group-hover:animate-pulse">{item.icon}</span>
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
