"use client"
import Link from 'next/link'
import { Button } from '../ui/button'
import { LogIn, X } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'


const MobileNavMenu = ({onMobileMenuToggle, isMobileMenuOpen}) => {
  const navLinks = [
    { id:1, path: '/', label: 'Home' },
    { id:2, path: '/about', label: 'About Us' },
    { id:3, path: '/services', label: 'Services' },
    { id:4, path: '/contact', label: 'Contact' },
  ];
  
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-50 h-screen w-full transition-all duration-300 linear lg:hidden  backdrop-blur-xs ",
        isMobileMenuOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
      onClick={() => onMobileMenuToggle(false)}
    >
      <div className="bg-(--custom-bg-primary) p-4 overlay-header relative w-[340px] h-full">
        <div className="text-white relative z-10">
          <div className="flex justify-end items-center">
            <button className='cursor-pointer' onClick={() => onMobileMenuToggle(false)}><X size={28} /></button>
          </div>
            
            <div className="pt-8">
              <Image
                  src="/assets/images/Promise-Holdings-Ltd-03.png"
                  width={200}
                  height={100}
                  alt="logo"
                />
            </div>
          </div>
          <nav className="flex flex-col space-y-4  relative z-10 pt-8">
            {navLinks.map((item ) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => onMobileMenuToggle(false)}
                className="font-semibold text-white p-2 rounded tracking-wider hover:bg-[var(--custom-bg-white)] hover:text-[var(--custom-text-primary)]"
              >
                {item?.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-6 relative z-10">
            <Button className=" bg-[var(--custom-bg-accent)] text-[var(--custom-text-secondary)] :hover:bg-(--custom-bg-accent-hover) w-full">
              <LogIn className="mr-2" /> Log Out
            </Button>
          </div>
        </div>
    </div>
  )
}

export default MobileNavMenu