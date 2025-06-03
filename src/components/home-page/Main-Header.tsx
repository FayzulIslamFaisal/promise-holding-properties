'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { AlignRight, LogIn, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import NavMenuItem from './Nav-Menu-Item'
import MobileNavMenu from './Mobile-Nav-menu'

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="container mx-auto px-4 py-4 relative z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/2 lg:w-[25%]">
          <Image
            src="/assets/images/Promise-Holdings-Ltd-03.png"
            width={200}
            height={100}
            alt="logo"
          />
        </div>

        {/* Desktop Nav */}
        <NavMenuItem />

        {/* Hamburger Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[var(--cus-tx-sec)] cursor-pointer">
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
