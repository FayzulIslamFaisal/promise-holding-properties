"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCreative, Autoplay, Parallax, Keyboard } from "swiper/modules"
import { Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/parallax"

interface SliderProps {
  id: number
  image: string
}

const slides: SliderProps[] = [
  { id: 1, image: "/assets/images/slider/banner1.png" },
  { id: 2, image: "/assets/images/slider/banner2.png" },
  { id: 3, image: "/assets/images/slider/banner4.png" },
  { id: 4, image: "/assets/images/slider/banner5.png" },
  { id: 5, image: "/assets/images/slider/banner6.png" },
]

export default function SuperFlowSlider() {
  const swiperRef = useRef<any>(null)
  const [progress, setProgress] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Track mouse for parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
  }, [])

  // Enable mousemove tracking
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      // Optional: Disable right-click
      container.addEventListener("contextmenu", (e) => e.preventDefault())
      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("contextmenu", (e) => e.preventDefault())
      }
    }
  }, [handleMouseMove])

  // Progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.25))
    }, 20)
    return () => clearInterval(interval)
  }, [])

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-94px)] overflow-hidden"
    >
      {/* Overlay background for dim effect */}
      <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 z-50 pointer-events-none" />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => setProgress(0)}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-100%", 0, -500],
            scale: 0.8,
            opacity: 0.4,
          },
          next: {
            shadow: true,
            translate: ["100%", 0, -500],
            scale: 0.8,
            opacity: 0.4,
          },
        }}
        grabCursor={true}
        modules={[EffectCreative, Autoplay, Parallax, Keyboard]}
        className="w-full h-full"
        speed={1200}
        parallax
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        centeredSlides
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full relative"
              data-swiper-parallax="-400"
              style={{
                transform: `scale(1.05) translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
                transition: "transform 0.5s ease-out",
              }}
            >
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen button */}
      <div className="absolute top-8 left-8 z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-[var(--custom-bg-accent)]/40 hover:bg-[var(--custom-bg-accent)]/60 backdrop-blur-xl border-2 border-[var(--custom-bg-accent)]/20 hover:border-[var(--custom-bg-accent)]/40 text-white w-14 h-14 rounded-full cursor-pointer transition-all duration-500 hover:scale-110"
        >
          <Maximize className="w-6 h-6" />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="h-2 bg-black/20 backdrop-blur-sm overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--custom-bg-accent)] via-[var(--custom-bg-primary)] to-[var(--custom-bg-white)] transition-all duration-100 ease-linear relative"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
