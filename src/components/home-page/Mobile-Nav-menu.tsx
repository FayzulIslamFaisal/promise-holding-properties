"use client";
import Link from 'next/link';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

interface MobileNavMenuProps {
  onMobileMenuToggle: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
}

const MobileNavMenu = ({ onMobileMenuToggle, isMobileMenuOpen }: MobileNavMenuProps) => {
  const navLinks = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about', label: 'About Us' },
    { id: 3, path: '/services', label: 'Services' },
    { id: 4, path: '/contact', label: 'Contact' },
  ];

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-[100] h-screen w-full transition-all duration-300 linear lg:hidden backdrop-blur-xs",
        isMobileMenuOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
      onClick={() => onMobileMenuToggle(false)}
    >
      <div className="bg-[var(--brand-dark)] p-4 overlay-header relative w-[340px] h-full">
        <div className="text-[var(--brand-white)] relative z-1">
          <div className="flex justify-end items-center">
            <button
              className='cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                onMobileMenuToggle(false);
              }}
            >
              <X size={28} />
            </button>
          </div>

          <div className="pt-8">
            <Image
              src="/assets/images/Web-Logo.png"
              width={200}
              height={50}
              alt="logo"
            />
          </div>
        </div>

        <nav className="flex flex-col space-y-4 relative z-1 pt-8">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={(e) => {
                e.stopPropagation();
                onMobileMenuToggle(false);
              }}
              className="font-semibold text-[var(--brand-white)] p-2 rounded tracking-wider hover:bg-[var(--brand-white)] hover:text-[var(--brand-dark)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </div>
  );
};

export default MobileNavMenu;
