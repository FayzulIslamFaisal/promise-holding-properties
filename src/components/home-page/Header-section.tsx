import React from 'react'
import TopHeader from './Top-Header'
import MainHeader from './Main-Header'

const HeaderSection = () => {
  return (
    <>
      <div className="bg-(--custom-bg-primary) relative overlay-top-header">
        <TopHeader />
      </div>
      <div className="bg-(--custom-bg-primary) relative overlay-header">
        <MainHeader />
      </div>
    </>
  )
}

export default HeaderSection