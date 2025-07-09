// 'use client'

// import { useEffect, useState } from 'react'
// import { MapPin } from 'lucide-react'
// import { Badge } from '@/components/ui/badge'
// import { Card, CardContent } from '@/components/ui/card'

// interface ProjectLocation {
//   lat: number
//   lng: number
// }

// interface ProjectData {
//   title: string
//   description: string
//   tags: string[]
//   location: ProjectLocation
// }

// const projectData: ProjectData = {
//   title: 'Skyline Metropolitan',
//   description:
//     "A revolutionary mixed-use development that redefines urban living with sustainable architecture, smart home technology, and premium amenities. Located in the heart of the city's most vibrant district.",
//   tags: ['Luxury', 'Smart Homes', 'Eco-Friendly', 'Prime Location', 'Modern Design'],
//   location: { lat: 40.7128, lng: -74.006 },
// }

// export default function ProjectDetailInfo() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <section className="py-16 px-4">
//       <div className="container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Project Info */}
//           <div className="space-y-8">
//             <div className={`transition-all duration-1000 ${isVisible ? 'ph-building-animate-fade-in' : 'opacity-0'}`}>
//               <h1 className="text-5xl lg:text-6xl font-normal bg-gradient-to-r from-[var(--custom-bg-primary)] via-[var(--custom-bg-secondary)] to-[var(--custom-bg-accent)] bg-clip-text text-transparent ph-building-animate-gradient-shift bg-300% leading-tight">
//                 {projectData.title}
//               </h1>
//             </div>
//             <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'ph-building-animate-slide-up' : 'opacity-0'}`}>
//               <p className="text-lg text-[var(--custom-text-primary)]/75 leading-relaxed">
//                 {projectData.description}
//               </p>
//             </div>
//             <div className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${isVisible ? 'ph-building-animate-slide-up' : 'opacity-0'}`}>
//               {projectData.tags.map((tag, index) => (
//                 <Badge
//                   key={tag}
//                   variant="secondary"
//                   className="px-4 py-2 bg-[var(--custom-bg-primary)]/75 backdrop-blur-sm border border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] hover:bg-[var(--custom-bg-accent)] hover:scale-105 transition-all duration-300 cursor-pointer hover:ph-building-animate-bounce-micro"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Map Card */}
//           <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'ph-building-animate-fade-in' : 'opacity-0'}`}>
//             <Card className="bg-[var(--custom-bg-white)]/10 backdrop-blur-md border border-[var(--custom-border-primary)] overflow-hidden group hover:bg-[var(--custom-bg-white)/15] transition-all duration-500">
//               <CardContent className="p-0 relative h-80">
//                 <div className="w-full h-full bg-gradient-to-br from-[var(--custom-bg-primary)]/20 to-[var(--custom-bg-accent)]/20 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center text-[var(--custom-text-primary)]">
//                       <MapPin className="w-12 h-12 mx-auto mb-4 ph-building-animate-pulse-ring" />
//                       <p className="text-lg font-semibold">Interactive Map</p>
//                       <p className="text-sm opacity-75">Downtown District</p>
//                     </div>
//                   </div>

//                   {/* Pulsing Marker */}
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="w-4 h-4 bg-red-500 rounded-full ph-building-animate-pulse-ring"></div>
//                     <div className="w-2 h-2 bg-red-600 rounded-full absolute top-1 left-1"></div>
//                   </div>

//                   {/* Shine Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:ph-building-animate-glass-shine"></div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// src/components/ProjectDetailInfo.tsx
'use client'

import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface ProjectLocation {
  lat: number
  lng: number
}

interface ProjectData {
  title: string
  description: string
  tags: string[]
  location: ProjectLocation
}

const projectData: ProjectData = {
  title: 'Skyline Metropolitan',
  description:
    "A revolutionary mixed-use development that redefines urban living with sustainable architecture, smart home technology, and premium amenities. Located in the heart of the city's most vibrant district.",
  tags: ['Luxury', 'Smart Homes', 'Eco-Friendly', 'Prime Location', 'Modern Design'],
  location: { lat: 40.7128, lng: -74.006 },
}

export default function ProjectDetailInfo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className=" px-4 ">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start border-[var(--custom-bg-primary)]/10 border-b py-12">
          {/* Left Column - Project Info */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl lg:text-5xl font-normal bg-gradient-to-r from-[var(--custom-bg-primary)] via-[var(--custom-bg-secondary)] to-[var(--custom-bg-accent)] bg-clip-text text-transparent bg-300% animate-gradient-shift leading-tight">
                {projectData.title}
              </h1>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-[var(--custom-text-primary)]/75 leading-relaxed">
                {projectData.description}
              </p>
            </div>
            <div className={`flex flex-wrap gap-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {projectData.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-4 py-2 bg-[var(--custom-bg-primary)] border border-[var(--custom-border-primary)] text-[var(--custom-text-secondary)] hover:bg-[var(--custom-bg-accent)] hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - Map Card */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Card className="bg-[var(--custom-bg-white)]/10 backdrop-blur-md border border-[var(--custom-border-primary)] overflow-hidden group hover:bg-[var(--custom-bg-white)]/15 transition-all duration-500 py-0">
              <CardContent className="p-0 relative h-80 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[var(--custom-bg-primary)]/25 to-[var(--custom-bg-accent)]/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-[var(--custom-text-primary)]">
                      <MapPin className="w-12 h-12 mx-auto mb-4 animate-pulse-ring" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-sm opacity-75">Downtown District</p>
                    </div>
                  </div>

                  {/* Pulsing Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse-ring"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full absolute top-1 left-1"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
