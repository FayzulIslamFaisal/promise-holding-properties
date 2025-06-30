// // HeaderSection.tsx
// "use client";
// import { useEffect } from 'react'
// import React from 'react'
// import TopHeader from './Top-Header'
// import MainHeader from './Main-Header'

// const HeaderSection = () => {
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header className="sticky top-0 z-50 shadow-md">
//       <div className="bg-[var(--custom-bg-primary)] relative overlay-top-header">
//         <TopHeader />
//       </div>
//       <div className="bg-[var(--custom-bg-primary)] relative overlay-header border-b border-[var(--custom-border-primary)]/25">
//         <MainHeader />
//       </div>
//     </header>
//   )
// }

// export default HeaderSection


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
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"}`}>
      <div className={`bg-[var(--custom-bg-primary)] relative overlay-top-header transition-all duration-300 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      }`}>
        <TopHeader />
      </div>
      <div className={`bg-[var(--custom-bg-primary)] relative overlay-header border-b border-[var(--custom-border-primary)]/25 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-1"
      }`}>
        <MainHeader />
      </div>
    </header>
  )
}

export default HeaderSection