import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

const InsightImageBox = () => {
  return (
    <Card className="mb-8 group overflow-hidden py-0 rounded-lg p-4 md:p-6 bg-primaryAccent">
        <div className="w-full overflow-hidden h-[400px] md:h-[500px] relative border border-[var(--custom-bg-accent)]/40 shadow-xl group-hover:shadow-2xl rounded-lg transition-shadow duration-300">
            <Image
                src="/assets/images/landowner/banner.jpg"
                alt="কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/60 dark:from-[var(--custom-bg-accent)]/60 via-[var(--custom-bg-primary)]/40  dark:via-[var(--custom-bg-primary)]/40 to-[var(--custom-bg-white)]/10 dark:to-[var(--custom-bg-white)]/10 transition-opacity duration-500 group-hover:opacity-90" />
        </div>
    </Card>
  )
}

export default InsightImageBox
