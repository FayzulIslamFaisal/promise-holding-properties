"use client";
import { BellRing, PhoneOutgoing } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { useSettings } from '@/providers/SettingsProvider';

const TopHeader = () => {
  const settings = useSettings();
  const sitePhone = settings?.general_settings?.site_phone || "09647 444 444 | 01958 063 331";
  const phoneNumbers = sitePhone ? sitePhone.split('|').map((p) => p.trim()) : [];

  return (
    <div className="container mx-auto px-4 py-3 relative z-1 ">
      <div className="flex justify-between items-center">
        <div className="text-sm text-primary flex items-center gap-1.5">
          <PhoneOutgoing className="inline-block flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            {phoneNumbers.map((phone, idx) => (
              <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:underline">
                {phone}
              </a>
            ))}
          </div>
        </div>
        <div>
          <Button variant="default" className="btn-glow-accent">
            <BellRing className="w-4 h-4 animate-pulse" />
            Get a Quote
        </Button>
      </div>

      </div>
    </div>
  )
}

export default TopHeader
