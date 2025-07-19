"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import MainHeader from './Main-Header';

const HeaderSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 0);
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 px-4 transition-all duration-300 ease-in-out bg-[var(--custom-bg-primary)] border-[var(--custom-border-primary)] border ${
        isScrolled ? "shadow-xl fixed top-0 left-0 right-0 bg-[var(--custom-bg-primary)] backdrop-blur-2xl opacity-90 " : "shadow-lg relative"
      }`}
    >
      <div
        className={`transition-all duration-300 ease-in-out opacity-100 ${
          isScrolled ? "py-0" : "py-0"
        }`}
      >
        <MainHeader />
      </div>
    </header>
  )
}

export default HeaderSection;