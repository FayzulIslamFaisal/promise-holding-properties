"use client";
import Link from 'next/link';
import { X, Calendar } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';
import ModeToggle from '../ModeToggle';
import { useSiteVisitModal } from '@/providers/SiteVisitProvider';

interface MobileNavMenuProps {
  onMobileMenuToggle: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
}

const MobileNavMenu = ({ onMobileMenuToggle, isMobileMenuOpen }: MobileNavMenuProps) => {
  const { openSiteVisitModal } = useSiteVisitModal();
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
        className="bg-black/90 backdrop-blur-3xl p-8 relative w-[310px] h-full border-r border-primary/30 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-1">
          <div className="flex justify-between items-center mb-8">
            <ModeToggle />
            <button
              className='p-2.5 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer border border-primary/20'
              onClick={() => onMobileMenuToggle(false)}
            >
              <X size={22} />
            </button>
          </div>
 
          <div className="mb-8 flex justify-center">
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

          <nav className="flex flex-col space-y-2 relative z-1 mb-6">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.stopPropagation();
                  onMobileMenuToggle(false);
                }}
                className="font-bold text-white/80 p-3.5 rounded-2xl tracking-widest transition-all duration-300 hover:bg-primary hover:text-black border border-white/5 hover:border-primary/50 text-xs uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              onMobileMenuToggle(false);
              openSiteVisitModal();
            }}
            className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition duration-300 cursor-pointer"
          >
            <Calendar size={16} />
            <span>Book Site Visit</span>
          </button>
        </div>

        <div className="mt-8 pt-4">
           <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center backdrop-blur-md">
              <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-1.5">Get in Touch</p>
              <p className="text-xs font-bold text-white tracking-wider">09647 444 444 | 01958 063 331</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
