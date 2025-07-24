"use client";

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, FreeMode } from "swiper/modules" // Removed Thumbs module

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom" // Optional: for zoom functionality

// Placeholder images for the gallery
const imagesGalleryItems = [
  { 
    id: 1,
    src: "/assets/images/projects/project2.jpg",
    alt: "Gallery Image 1" },
  { 
    id: 2,
    src: "/assets/images/projects/project3.jpg", 
    alt: "Gallery Image 2" },
  { 
    id: 3,
    src: "/assets/images/projects/project4.jpg",
    alt: "Gallery Image 3" },
  { 
    id: 4,
    src: "/assets/images/projects/project5.jpeg", 
    alt: "Gallery Image 4" },
  { 
    id: 5,
    src: "/assets/images/projects/project6.jpg",
    alt: "Gallery Image 5" },
  { 
    id: 6,
    src: "/assets/images/projects/project7.jpg",
    alt: "Gallery Image 6" },
  { 
    id: 7,
    src: "/assets/images/projects/project8.jpg", 
    alt: "Gallery Image 7" },
  { 
    id: 8,
    src: "/assets/images/projects/project9.jpg",
    alt: "Gallery Image 8" },
]

export default function ImageGallery() {
  const [open, setOpen] = useState(false) 
  const [index, setIndex] = useState(0)

  const slides = imagesGalleryItems.map((image) => ({
    id: 1,
    src: image.src,
    alt: image.alt,
    title: image.alt, 
  }))

  const openLightbox = (idx: number) => {
    setIndex(idx)
    setOpen(true)
  }

  return (
    <section className="px-4">
    <div className="container mx-auto pt-12 pb-14">
      <h1 className="text-3xl font-bold mb-10 text-white">Image Gallery</h1>

      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Navigation, Pagination]} 
        className="mySwiper2 mb-4 rounded-lg shadow-lg"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {imagesGalleryItems.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-96 object-cover cursor-pointer rounded-lg"
              onClick={() => openLightbox(image.id - 1)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
        {/* Lightbox for full-screen view */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }} 
        plugins={[Zoom]} 
      />
    </div>
    </section>
  )
}
