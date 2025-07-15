"use client"

import { useState } from "react"
import {
  Building,
  Home,
  Bed,
  Bath,
  Wind,
  Sofa,
  Users,
  TableIcon as Toilet,
  CheckCircle,
  Clock,
  XCircle,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
  status: "Available" | "Reserved" | "Sold"
  floorPlan: string
  description: string
}

export default function ProjectFloorSummary() {
  const [units] = useState<FloorUnit[]>([
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
      description: "Luxurious floor units with panoramic city views.",
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
      description: "Well-designed compact units ideal for small families.",
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
      description: "Exclusive penthouse-style units.",
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
      description: "Efficient studio apartments for singles.",
    },
  ])

  const stats = {
    totalFloors: new Set(units.map((u) => u.floorNumber)).size,
    totalUnits: units.reduce((acc, u) => acc + u.totalUnits, 0),
    totalArea: units.reduce((acc, u) => acc + parseInt(u.area.replace(/[^\d]/g, ""), 10), 0),
    bedrooms: units.reduce((acc, u) => acc + u.bedrooms, 0),
    bathrooms: units.reduce((acc, u) => acc + u.bathrooms, 0),
    balconies: units.reduce((acc, u) => acc + u.balconies, 0),
    drawingRooms: units.reduce((acc, u) => acc + u.drawingRoom, 0),
    guestRooms: units.reduce((acc, u) => acc + u.guestRoom, 0),
    washrooms: units.reduce((acc, u) => acc + u.washrooms, 0),
    available: units.filter((u) => u.status === "Available").length,
    reserved: units.filter((u) => u.status === "Reserved").length,
    sold: units.filter((u) => u.status === "Sold").length,
  }

  const summaryCards = [
    { title: "Total Floors", count: stats.totalFloors, icon: Building, color: "text-[var(--custom-text-primary)]" },
    { title: "Total Units", count: stats.totalUnits, icon: Home, color: "text-[var(--custom-text-primary)]" },
    { title: "Total Area", count: `${stats.totalArea.toLocaleString()} sq ft`, icon: BarChart3, color: "text-[var(--custom-text-primary)]" },
    { title: "Bedrooms", count: stats.bedrooms, icon: Bed, color: "text-[var(--custom-text-primary)]" },
    { title: "Bathrooms", count: stats.bathrooms, icon: Bath, color: "text-[var(--custom-text-primary)]" },
    { title: "Balconies", count: stats.balconies, icon: Wind, color: "text-[var(--custom-text-primary)]" },
    { title: "Drawing Rooms", count: stats.drawingRooms, icon: Sofa, color: "text-[var(--custom-text-primary)]" },
    { title: "Guest Rooms", count: stats.guestRooms, icon: Users, color: "text-[var(--custom-text-primary)]" },
    { title: "Washrooms", count: stats.washrooms, icon: Toilet, color: "text-[var(--custom-text-primary)]" },
    { title: "Available", count: stats.available, icon: CheckCircle, color: "text-[var(--custom-text-primary)]" },
    { title: "Reserved", count: stats.reserved, icon: Clock, color: "text-[var(--custom-text-primary)]" },
    { title: "Sold", count: stats.sold, icon: XCircle, color: "text-[var(--custom-text-primary)]" },
  ]

return (
    <section className="w-full pt-12 px-4 bg-[var(--custom-bg-gray)]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight text-[var(--custom-text-primary)]">Floor Summary</h2>
          <p className="text-base md:text-lg text-[var(--custom-text-primary)]/75 mt-3 max-w-2xl mx-auto">
            Detailed overview of unit counts, features, and availability across the entire residential complex.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 border-[var(--custom-bg-primary)]/10 border-b pb-12">
          {summaryCards.map(({ title, count, icon: Icon }, i) => (
            <Card
              key={i}
              className="group relative transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl  bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--custom-text-primary)] flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--custom-bg-primary)]" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl md:text-3xl font-bold text-[var(--custom-text-primary)]">
                  {typeof count === "number" ? count.toLocaleString() : count}
                </div>
              </CardContent>
              <div
                className="absolute left-0 bottom-0 h-1 w-full group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(to right, var(--custom-bg-primary), var(--custom-bg-secondary), var(--custom-bg-accent))",
                }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
