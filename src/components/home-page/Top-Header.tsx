"use client";
import { BellRing, PhoneOutgoing } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { useSettings } from '@/providers/SettingsProvider';

const TopHeader = () => {
  const settings = useSettings();
  return (
    <div className="container mx-auto px-4 py-3 relative z-1 ">
      <div className="flex justify-between items-center">
        <div className="text-sm text-[var(--custom-text-secondary)]">
          <p><PhoneOutgoing className="inline-block mr-1" /> {settings?.general_settings.site_phone || "09647 444 444"}</p>
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
