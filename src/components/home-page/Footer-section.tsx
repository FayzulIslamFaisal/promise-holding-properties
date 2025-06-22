import React from 'react'
import FooterTopArea from './FooterTopArea'
import FooterWidgetArea from './FooterWidgetArea'
import FooterCopyRight from './FooterCopyRight'

const FooterSection = () => {
  return (
    <div className='bg-(--custom-bg-primary) relative overlay-header text-(--custom-text-secondary)'>
      {/* footer top area */}
      <FooterTopArea />
      {/* footer widget area */}
      <FooterWidgetArea />
      {/* footer copyright */}
      <FooterCopyRight />
    </div>
  )
}

export default FooterSection