import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

const InsightImageBox = () => {
  return (
    <Card className="mb-8 group overflow-hidden py-0 rounded-lg p-4 md:p-6 bg-primaryAccent">
        <div className="w-full overflow-hidden h-[calc(100vh-100px)]  relative border border-primary/40 shadow-xl group-hover:shadow-2xl rounded-lg transition-shadow duration-300">
            <Image
                src="/assets/images/media-center/img2.jpg"
                alt="কৃত্রিম বুদ্ধিমত্তার ভবিষ্যৎ"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/60 dark:from-primary/60 via-[var(--brand-dark)]/40  dark:via-[var(--brand-dark)]/40 to-white/10 dark:to-white/10 transition-opacity duration-500 group-hover:opacity-90" />
        </div>
    </Card>
  )
}

export default InsightImageBox
