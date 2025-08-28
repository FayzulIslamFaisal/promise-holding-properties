
import { Home } from "lucide-react"
import Image from "next/image"

export default function LeftSide() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--custom-bg-primary)]/20 via-[var(--custom-bg-primary)]/60 to-[var(--custom-bg-primary)]/40 z-10" />
      <div className="relative w-full h-full">
        <Image
          src="/assets/images/slider/banner10.png"
          alt="Luxury Property"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute bottom-8 left-8 z-20 text-[var(--custom-text-white)]">
        <div className="flex items-center gap-2 mb-4">
          <Home className="h-10 w-10" />
          <span className="text-2xl font-bold">LuxeEstate</span>
        </div>
        <h2 className="text-4xl font-bold mb-2 text-balance">Find Your Dream Home</h2>
        <p className="text-lg opacity-90 text-pretty">Discover luxury properties in the most exclusive locations</p>
      </div>
    </div>
  )
}

