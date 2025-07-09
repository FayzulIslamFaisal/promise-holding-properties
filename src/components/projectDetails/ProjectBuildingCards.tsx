// /ProjectBuildingCards.tsx
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Calendar, Home } from 'lucide-react'

interface Project {
  id: number
  name: string
  image: string
  floors: number
  units: number
  type: string
  amenities: string[]
  completion: string
}

const projectData: Project[] = [
  {
    id: 1,
    name: "Tower A - Residential",
    image: "/assets/images/projects/project1.jpg",
    floors: 45,
    units: 320,
    type: "Residential",
    amenities: ["Rooftop Pool", "Gym", "Concierge", "Sky Lounge"],
    completion: "Q4 2024",
  },
  {
    id: 2,
    name: "Tower B - Commercial",
    image: "/assets/images/projects/project2.jpg",
    floors: 35,
    units: 180,
    type: "Commercial",
    amenities: ["Business Center", "Conference Rooms", "Parking", "Retail"],
    completion: "Q2 2024",
  },
  {
    id: 3,
    name: "Garden Pavilion",
    image: "/assets/images/projects/project3.jpg",
    floors: 8,
    units: 64,
    type: "Mixed-Use",
    amenities: ["Garden Terrace", "Café", "Co-working", "Art Gallery"],
    completion: "Q1 2024",
  },
  {
    id: 4,
    name: "Wellness Center",
    image: "/assets/images/projects/project4.jpg",
    floors: 3,
    units: 12,
    type: "Amenity",
    amenities: ["Spa", "Fitness", "Yoga Studio", "Medical Center"],
    completion: "Q3 2024",
  },
]

export default function ProjectBuildingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  return (
    <section className="py-12 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projectData.map((building, index) => (
            <Card
              key={building.id}
              onMouseEnter={() => setHoveredCard(building.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-[var(--customer-bg-white)] backdrop-blur-md border border-[var(--custom-border-primary)] overflow-hidden transition-all duration-700 hover:bg-[var(--custom-bg-primary)]/50 hover:scale-105 shadow-lg hover:shadow-2xl hover:[var(--customer-bg-white)] cursor-pointer py-0`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both',
              }}
            >
              <CardContent className="p-0 relative h-96">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Badge className="absolute top-4 right-4 bg-[var(--custom-bg-primary)] backdrop-blur-sm text-white border-0">
                    {building.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-normal text-black group-hover:text-black transition-colors duration-300">
                    {building.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-black">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{building.floors} Floors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      <span>{building.units} Units</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Calendar className="w-4 h-4" />
                    <span>Completion: {building.completion}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                      <span>Explore Building</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
                </div>

                {/* Hover Panel */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-white/100  border-t border-white/20 p-4 transform transition-all duration-500 ${
                    hoveredCard === building.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-normal text-black group-hover:text-black transition-colors duration-300">
                        {building.name}
                  </h3>
                    <p className="text-sm font-normal text-black"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                    <div className="flex flex-wrap gap-1">
                      {building.amenities.slice(0, 3).map((amenity) => (
                        <Badge
                          key={amenity}
                          variant="default"
                          className="text-xs border-white/30 text-black"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                      <span>Explore Building</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
                {/* Hover border bottom */}
                <div className="absolute left-0 bottom-0 h-2 w-0 bg-[linear-gradient(to_right,var(--custom-bg-primary),var(--custom-bg-secondary),var(--custom-bg-accent))] group-hover:w-full transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


