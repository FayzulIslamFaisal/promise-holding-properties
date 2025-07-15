'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  Home,
  Bed,
  Bath,
  Wind,
  Sofa,
  UserCheck,
  Square,
  Eye
} from 'lucide-react'
import Link from 'next/link'

interface FloorUnit {
  id: number
  floorNumber: string
  unitNumber: string
  image: string
  totalUnits: number
  bedrooms: number
  bathrooms: number
  balconies: number
  drawingRoom: number
  guestRoom: number
  washrooms: number
  area: string
  price: string
  status: string
  floorPlan: string
  description: string
}

const floorUnitsData: FloorUnit[] = [
  {
    id: 1,
    floorNumber: "Floor 5A",
    unitNumber: "Unit 501-504",
    image: "/placeholder.svg",
    totalUnits: 4,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    drawingRoom: 1,
    guestRoom: 1,
    washrooms: 3,
    area: "1,850 sq ft",
    price: "$450,000",
    status: "Available",
    floorPlan: "Premium",
    description: "Luxurious floor units with panoramic city views, premium finishes, and spacious layouts perfect for modern families."
  },
  {
    id: 2,
    floorNumber: "Floor 8B",
    unitNumber: "Unit 801-806",
    image: "/placeholder.svg",
    totalUnits: 6,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    drawingRoom: 1,
    guestRoom: 0,
    washrooms: 2,
    area: "1,200 sq ft",
    price: "$320,000",
    status: "Available",
    floorPlan: "Standard",
    description: "Well-designed compact units ideal for young professionals and small families with modern amenities."
  },
  {
    id: 3,
    floorNumber: "Floor 12C",
    unitNumber: "Unit 1201-1202",
    image: "/placeholder.svg",
    totalUnits: 2,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 3,
    drawingRoom: 2,
    guestRoom: 2,
    washrooms: 4,
    area: "2,500 sq ft",
    price: "$750,000",
    status: "Reserved",
    floorPlan: "Penthouse",
    description: "Exclusive penthouse-style units with multiple balconies, spacious rooms, and premium architectural features."
  },
  {
    id: 4,
    floorNumber: "Floor 15A",
    unitNumber: "Unit 1501-1508",
    image: "/placeholder.svg",
    totalUnits: 8,
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    drawingRoom: 1,
    guestRoom: 0,
    washrooms: 1,
    area: "650 sq ft",
    price: "$180,000",
    status: "Available",
    floorPlan: "Studio",
    description: "Efficient studio apartments perfect for singles and investors, featuring smart space utilization."
  },
  {
    id: 5,
    floorNumber: "Floor 20B",
    unitNumber: "Unit 2001-2004",
    image: "/placeholder.svg",
    totalUnits: 4,
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    drawingRoom: 1,
    guestRoom: 1,
    washrooms: 3,
    area: "1,950 sq ft",
    price: "$520,000",
    status: "Sold",
    floorPlan: "Premium",
    description: "High-floor premium units with breathtaking views and luxury finishes throughout."
  },
  {
    id: 6,
    floorNumber: "Floor 25A",
    unitNumber: "Unit 2501-2503",
    image: "/placeholder.svg",
    totalUnits: 3,
    bedrooms: 4,
    bathrooms: 3,
    balconies: 2,
    drawingRoom: 2,
    guestRoom: 1,
    washrooms: 4,
    area: "2,200 sq ft",
    price: "$680,000",
    status: "Available",
    floorPlan: "Luxury",
    description: "Luxury floor units with premium amenities, spacious layouts, and exceptional build quality."
  },
  {
    id: 7,
    floorNumber: "Floor 30C",
    unitNumber: "Unit 3001",
    image: "/placeholder.svg",
    totalUnits: 1,
    bedrooms: 5,
    bathrooms: 4,
    balconies: 4,
    drawingRoom: 2,
    guestRoom: 2,
    washrooms: 5,
    area: "3,200 sq ft",
    price: "$1,200,000",
    status: "Available",
    floorPlan: "Penthouse",
    description: "Exclusive single-unit floor with unparalleled luxury, multiple terraces, and panoramic city views."
  },
  {
    id: 8,
    floorNumber: "Floor 18B",
    unitNumber: "Unit 1801-1806",
    image: "/placeholder.svg",
    totalUnits: 6,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    drawingRoom: 1,
    guestRoom: 0,
    washrooms: 2,
    area: "1,350 sq ft",
    price: "$380,000",
    status: "Reserved",
    floorPlan: "Standard",
    description: "Mid-rise floor units with excellent value proposition and modern living conveniences."
  }
]

export default function ProjectFloorCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  console.log("hoveredCard",hoveredCard);
  

  return (
    <section className="px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-[var(--custom-text-primary)] mb-4">
            Floor Units & Layouts
          </h2>
          <p className="text-lg text-[var(--custom-text-third)] max-w-2xl mx-auto">
            Discover our thoughtfully designed floor units with detailed room configurations and premium amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {floorUnitsData.map((unit) => (
            <Card
              key={unit.id}
              onMouseEnter={() => setHoveredCard(unit.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group py-0 relative bg-[var(--custom-bg-white)] border border-[var(--custom-border-primary)] transition-all duration-300 hover:bg-[var(--custom-bg-primary)]/5 cursor-pointer"
            >
              <CardContent className="p-0 relative h-full">


                <div className="relative p-6 bg-[url('/assets/images/projects/project8.jpg')] bg-cover bg-center rounded-t-lg"
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--custom-bg-primary)]/20 rounded-t-lg" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {unit.floorNumber}
                          </h3>
                          <p className="text-sm text-gray-200">{unit.unitNumber}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge className="bg-gray-500 text-white border-0">
                            {unit.status}
                          </Badge>
                          <Badge className="bg-[var(--custom-bg-accent)] text-white border-0">
                            {unit.floorPlan}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-white">{unit.price}</div>
                        <div className="text-sm text-gray-200">{unit.area}</div>
                      </div>
                    </div>
                  </div>


                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <Home className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.totalUnits} Units</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <Bed className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <Bath className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <Wind className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.balconies} Balconies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <Sofa className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.drawingRoom} Drawing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                      <UserCheck className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                      <span>{unit.guestRoom} Guest Room</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--custom-text-primary)]">
                    <Square className="w-4 h-4 text-[var(--custom-bg-primary)]" />
                    <span>{unit.washrooms} Washrooms Total</span>
                  </div>

                  <Link
                    href={`/floor-details/${unit.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-[var(--custom-bg-primary)] text-[var(--custom-text-secondary)] rounded-lg hover:bg-[var(--custom-bg-accent)] transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Floor Plan</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
