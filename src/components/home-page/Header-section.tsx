import React from 'react'
import TopHeader from './Top-Header'
import MainHeader from './Main-Header'

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-[var(--custom-bg-primary)] relative overlay-top-header">
        <TopHeader />
      </div>
      <div className="bg-[var(--custom-bg-primary)] relative overlay-header border-b border-[var(--custom-border-primary)]/25">
        <MainHeader />
      </div>
    </header>
  )
}

export default HeaderSection