'use client'

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

interface VideoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ProjectVideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setReady(true), 200)
      return () => clearTimeout(timeout)
    } else {
      setReady(false)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-screen h-auto border p-10 bg-amber-300">
        <div className="relative w-full h-[60vh]">
          <ReactPlayer
            url="https://www.youtube.com/embed/kqq0JTjrXlM?si=7plOU1Snda88XVjy"
            width="100%"
            height="100%"
            controls
            playing={ready}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectVideoModal
