
// HeaderSection.tsx
"use client";
import { useEffect } from 'react'
import React from 'react'
import TopHeader from './Top-Header'
import MainHeader from './Main-Header'

const HeaderSection = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-lg fixed top-0 left-0 right-0" : "shadow-md relative"
      }`}
    >
      {!isScrolled && (
        <div className="bg-[var(--custom-bg-primary)] relative overlay-top-header transition-all duration-500 ease-linear">
          <TopHeader />
        </div>
      )}
      <div
        className={`bg-[var(--custom-bg-primary)] relative overlay-header border-b border-[var(--custom-border-primary)]/25 transition-all duration-300 ease-linear ${
          isScrolled ? "py-1" : "py-0"
        }`}
      >
        <MainHeader />
      </div>
    </header>
  )
}

export default HeaderSection