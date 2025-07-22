'use client'

// import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
// import ProjectVideoModal from './ProjectVideoModal'

const ProjectVideoThumbnail = () => {
  // const [open, setOpen] = useState(false)

  return (
    <>
      <section className="px-4">
        <div className="container mx-auto  group py-14 border-b border-[var(--custom-bg-accent)]/50">
          <div className="text-center text-[var(--custom-text-white)]">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6 lg:mb-10">
              Explore Our Promise Assets Projects
            </h1>
          </div>

          <div
            className="relative w-full h-[300px] md:h-[500px] rounded-lg cursor-pointer border border-[var(--custom-border-primary)] overflow-hidden shadow-2xl group"
            // onClick={() => setOpen(true)}
          >
            <Image
              src="/assets/images/slider/banner1.png"
              alt="Sheltech Windflower"
              fill
              className="rounded-lg w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--custom-bg-accent)]/30  rounded-lg transition-all duration-500 group-hover:bg-[var(--custom-bg-accent)]/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[var(--custom-bg-accent)] border-3 border-[var(--custom-bg-white)] opacity-50 animate-ping scale-110" />
                  <div 
                    className="relative z-10 w-20 h-20 
                    bg-[var(--custom-bg-accent)]/40 
                      backdrop-blur-xl backdrop-saturate-200 
                      border border-[var(--custom-bg-white)]/10 
                    hover:bg-[var(--custom-bg-accent)]/80 
                      transition-all duration-300 
                      rounded-full flex items-center justify-center 
                      shadow-xl shadow-[var(--custom-bg-accent)]/20"
                  >
                      <Play className="w-10 h-10 text-[var(--custom-text-white)]" />
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* {
        open && (
          <ProjectVideoModal open={open} onOpenChange={setOpen} />
        )
      } */}
    </>
  )
}

export default ProjectVideoThumbnail
