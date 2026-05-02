"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { EffectCreative, Autoplay, Parallax, Keyboard } from "swiper/modules"
import { Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { HeaderBanner } from "@/types/api"

import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/parallax"

interface Slide {
  id: number;
  image: string;
  title: string;
  short_description?: string;
  slug: string | null;
}

const fallbackSlides: Slide[] = [
  { id: 1, image: "/assets/images/slider/banner1.png", title: "Banner 1", short_description: "", slug: null },
  { id: 2, image: "/assets/images/slider/banner2.png", title: "Banner 2", short_description: "", slug: null },
  { id: 3, image: "/assets/images/slider/banner4.png", title: "Banner 3", short_description: "", slug: null },
  { id: 4, image: "/assets/images/slider/banner5.png", title: "Banner 4", short_description: "", slug: null },
  { id: 5, image: "/assets/images/slider/banner6.png", title: "Banner 5", short_description: "", slug: null },
]

interface HeroSliderProps {
  banners?: HeaderBanner[]
}

export default function SuperFlowSlider({ banners }: HeroSliderProps) {
  const slides: Slide[] = (banners && banners.length > 0) ? banners : fallbackSlides;

  const swiperRef = useRef<SwiperClass | null>(null)
  const [progress, setProgress] = useState(0)
  const [, setIsFullscreen] = useState(false)
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
      className="relative w-full aspect-[4/3] md:h-[calc(100vh-94px)] overflow-hidden"
    >
      <Swiper
        key={slides.length}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => setProgress(0)}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        modules={[EffectCreative, Autoplay, Parallax, Keyboard]}
        className="w-full h-full"
        speed={1000}
        parallax
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        centeredSlides
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full relative overflow-hidden group"
            >
              {/* Background Image with subtle Blur and Parallax */}
              <div 
                className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-110"
                data-swiper-parallax="20%"
              >
                {slide.slug ? (
                  <Link href={`/project/${slide.slug}`} className="absolute inset-0 z-1 block">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover blur-[0.5px] brightness-90 dark:brightness-75"
                      priority
                    />
                  </Link>
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover blur-[0.5px] brightness-90 dark:brightness-75"
                    priority
                  />
                )}
              </div>

              {/* Light Mode Overlay - Custom Accent (Brand) Color */}
              <div className="absolute inset-0 bg-primary/25 dark:opacity-0 transition-opacity duration-500 z-2" />
              {/* Dark Mode Overlay - Elegant Dark Gradient */}
              <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-gradient-to-b from-primary/30 via-black/40 to-black/90 transition-opacity duration-500 z-2" />

              {/* Text Content Overlay - Matching SecondaryBanner Style */}
              {(slide.title || slide.short_description) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                  <h2 
                    className="text-white text-3xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4 md:mb-8 drop-shadow-2xl leading-tight"
                    data-swiper-parallax="-400"
                  >
                    {slide.title}
                  </h2>
                  
                  {slide.short_description && (
                    <div 
                      className="flex items-center gap-4 md:gap-10 opacity-95"
                      data-swiper-parallax="-200"
                    >
                      <span className="h-[2px] w-8 md:w-32 bg-gradient-to-r from-transparent to-primary rounded-full hidden sm:block"></span>
                      <p className="text-white text-xs md:text-2xl font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] drop-shadow-lg max-w-[280px] md:max-w-4xl">
                        {slide.short_description}
                      </p>
                      <span className="h-[2px] w-8 md:w-32 bg-gradient-to-l from-transparent to-primary rounded-full hidden sm:block"></span>
                    </div>
                  )}
                </div>
              )}
              
              {/* Bottom Premium Border Shine */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="h-1 bg-black/10 backdrop-blur-sm overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Fullscreen button - Repositioned to be more subtle */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFullscreen}
          className="bg-black/20 hover:bg-primary/60 backdrop-blur-md border border-white/10 text-white w-10 h-10 rounded-full cursor-pointer transition-all duration-500"
        >
          <Maximize className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
