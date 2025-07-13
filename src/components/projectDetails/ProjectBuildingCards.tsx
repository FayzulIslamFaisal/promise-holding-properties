// /ProjectBuildingCards.tsx
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Building2, Calendar, Home } from 'lucide-react'
import Link from 'next/link'

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
  {
    id: 5,
    name: "Skyline Lofts",
    image: "/assets/images/projects/project9.jpg",
    floors: 20,
    units: 150,
    type: "Residential",
    amenities: ["Private Balconies", "Pet Park", "Laundry Lounge", "Library"],
    completion: "Q1 2025",
  },
  {
    id: 6,
    name: "Innovation Hub",
    image: "/assets/images/projects/project6.jpg",
    floors: 10,
    units: 60,
    type: "Commercial",
    amenities: ["Startup Labs", "Tech Support", "Open Workspace", "Event Space"],
    completion: "Q3 2025",
  },
  {
    id: 7,
    name: "Harbor View Residences",
    image: "/assets/images/projects/project7.jpg",
    floors: 30,
    units: 240,
    type: "Residential",
    amenities: ["Marina Access", "Infinity Pool", "Sun Deck", "Lounge Bar"],
    completion: "Q2 2025",
  },
  {
    id: 8,
    name: "Cultural Exchange Center",
    image: "/assets/images/projects/project8.jpg",
    floors: 5,
    units: 25,
    type: "Mixed-Use",
    amenities: ["Exhibition Hall", "Language Lab", "Cultural Café", "Workshop Studios"],
    completion: "Q4 2025",
  },
];


export default function ProjectBuildingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  return (
    <section className="px-4" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-b border-[var(--custom-bg-primary)]/10 py-12">
          {projectData.map((building, index) => (
            <Card
              key={building.id}
              onMouseEnter={() => setHoveredCard(building.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-[var(--customer-bg-white)] border border-[var(--custom-border-primary)] overflow-hidden transition-all duration-700 hover:bg-[var(--custom-bg-primary)]/75 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer py-0 h-full`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both',
              }}
            >
              <CardContent className="p-0 relative">
                {/* Image */}
                <div className="relative h-50 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/50 via-transparent to-[var(--custom-bg-accent)]/50 z-10 pointer-events-none" />
                  <Image
                    src={building.image}
                    alt={building.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 bg-gradient-to-t from-[var(--custom-bg-primary)]/50 via-transparent to-[var(--custom-bg-accent)]/50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-primary)]/50 via-transparent to-[var(--custom-bg-accent)]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-4 right-4 bg-[var(--custom-bg-primary)] backdrop-blur text-[var(--custom-bg-white)] border-0 z-20">
                    {building.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-normal text-[var(--custom-text-primary)] group-hover:text-[var(--custom-text-primary)] transition-colors duration-300">
                    {building.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-[var(--custom-text-primary)]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{building.floors} Floors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      <span>{building.units} Units</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                    <Calendar className="w-4 h-4" />
                    <span>Completion: {building.completion}</span>
                  </div>
                  <Link href="/building-details/1" className="btn-glow-accent w-full">
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <span>Explore Building</span>
                </Link>
                </div>

                {/* Hover Panel */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-[var(--custom-bg-white)]/100  border-t border-[var(--custom-border-primary)] p-4 transform transition-all duration-500 ${
                    hoveredCard === building.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-normal text-[var(--custom-text-primary)] group-hover:text-[var(--custom-text-primary)] transition-colors duration-300">
                        {building.name}
                  </h3>
                    <p className="text-sm font-normal text-[var(--custom-text-primary)]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                    <div className="flex flex-wrap gap-1">
                      {building.amenities.slice(0, 3).map((amenity) => (
                        <Badge
                          key={amenity}
                          variant="default"
                          className="text-xs border-[var(--custom-border-primary)]/30 text-[var(--custom-text-secondary)]"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    <Link href="/building-details/1" className="btn-glow-accent w-full">
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <span>Explore Building</span>
                    </Link>
                  </div>
                </div>
                {/* Hover border bottom */}
                <div className="absolute left-0 bottom-0 h-1 w-0 bg-[linear-gradient(to_right,var(--custom-bg-primary),var(--custom-bg-secondary),var(--custom-bg-accent))] group-hover:w-full transition-all duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


