"use client";
import Link from 'next/link';
import { X } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';
import ModeToggle from '../ModeToggle';

interface MobileNavMenuProps {
  onMobileMenuToggle: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
}

const MobileNavMenu = ({ onMobileMenuToggle, isMobileMenuOpen }: MobileNavMenuProps) => {
  const navLinks = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about', label: 'About Us' },
    { id: 3, path: '/project', label: 'Projects' },
    { id: 4, path: '/landowner', label: 'Landowner' },
    { id: 5, path: '/services', label: 'Services' },
    { id: 6, path: '/contact', label: 'Contact' },
  ];

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 z-[100] h-screen w-full transition-all duration-500 ease-in-out lg:hidden backdrop-blur-sm bg-black/20",
        isMobileMenuOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
      onClick={() => onMobileMenuToggle(false)}
    >
      <div 
        className="bg-black/90 backdrop-blur-3xl p-8 relative w-[310px] h-full border-r border-primary/30 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-1">
          <div className="flex justify-between items-center mb-10">
            <ModeToggle />
            <button
              className='p-2.5 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer border border-primary/20'
              onClick={() => onMobileMenuToggle(false)}
            >
              <X size={22} />
            </button>
          </div>
 
          <div className="mb-12 flex justify-center">
            <Link href="/" onClick={() => onMobileMenuToggle(false)}>
              <Image
                src="/assets/images/Web-Logo.png"
                width={190}
                height={48}
                alt="logo"
                className="brightness-110 transition-all hover:scale-105"
              />
            </Link>
          </div>
        </div>

        <nav className="flex flex-col space-y-3 relative z-1">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={(e) => {
                e.stopPropagation();
                onMobileMenuToggle(false);
              }}
              className="font-bold text-white/80 p-4 rounded-2xl tracking-widest transition-all duration-300 hover:bg-primary hover:text-black border border-white/5 hover:border-primary/50 text-sm uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 left-8 right-8">
           <div className="p-5 rounded-3xl bg-primary/10 border border-primary/20 text-center backdrop-blur-md">
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-2">Get in Touch</p>
              <p className="text-xs font-bold text-white tracking-wider">09647 444 444 | 01958 063 331</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
