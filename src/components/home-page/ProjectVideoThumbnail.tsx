
// import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
// import ProjectVideoModal from './ProjectVideoModal'

const ProjectVideoThumbnail = () => {
  // const [open, setOpen] = useState(false)

  return (
    <>
      <section className="px-4">
        <div className="container mx-auto  group sectionSpaceBorder">
          <div className="text-center">
            <SectionTitle 
              title="Explore Our Projects" 
              border_b={true}/>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-[var(--border-subtle)]">
            <video 
              src="/assets/videos/Promise Haven City Mine Video.mp4" 
              title="Explore Our Projects" 
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
            ></video>
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
