import React from 'react'
import TopHeader from './Top-Header'
import MainHeader from './Main-Header'

const HeaderSection = () => {
  return (
    <>
      <div className="bg-(--cus-bg-sec) relative overlay-header">
        <TopHeader />
      </div>
      <div className="bg-(--cus-bg-pr) border-b-1 border-(--cus-tx-sec)/25 relative overlay-header">
        <MainHeader />
      </div>
    </>
  )
}

export default HeaderSection