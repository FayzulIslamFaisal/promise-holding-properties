
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
            <iframe 
              src="https://www.youtube.com/embed/3H6Evu2hPpE?autoplay=1&loop=1&mute=1&playlist=3H6Evu2hPpE&controls=1&showinfo=0&rel=0" 
              title="Explore Our Projects" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
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
