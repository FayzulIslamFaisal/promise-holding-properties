'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import ProjectVideoModal from './ProjectVideoModal'

const ProjectVideoThumbnail = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto cursor-pointer" onClick={() => setOpen(true)}>
        <Image
          src="/assets/images/slider/banner1.png" 
          alt="Sheltech Windflower"
          width={1200}
          height={675}
          className="rounded-lg w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-10 h-10 text-black" />
          </div>
        </div>
      </div>

      <ProjectVideoModal open={open} onOpenChange={setOpen} />
    </>
  )
}

export default ProjectVideoThumbnail
