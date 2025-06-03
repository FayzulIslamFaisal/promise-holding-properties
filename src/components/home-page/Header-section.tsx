import React from 'react'
import TopHeader from './Top-Header'
import MainHeader from './Main-Header'

const HeaderSection = () => {
  return (
    <>
      <div className="bg-(--cus-bg-pr) relative overlay-top-header">
        <TopHeader />
      </div>
      <div className="bg-(--cus-bg-pr) relative overlay-header">
        <MainHeader />
      </div>
    </>
  )
}

export default HeaderSection