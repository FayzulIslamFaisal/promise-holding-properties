'use client'

import Image from 'next/image'
import { AlignRight, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import NavMenuItem from './Nav-Menu-Item'
import MobileNavMenu from './Mobile-Nav-menu'

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="container mx-auto px-4 py-2 relative opacity-100">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 lg:w-[25%]">
          <Link href="/"  className="inline-block">
            <Image
              src="/assets/images/Web-Logo.png"
              width={200}
              height={50}
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <NavMenuItem />

        {/* Hamburger Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--custom-text-secondary)] cursor-pointer">
            {isMobileMenuOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNavMenu onMobileMenuToggle={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      )}
    </>
  )
}

export default MainHeader
