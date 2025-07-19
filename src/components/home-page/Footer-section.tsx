import React from 'react'
import FooterTopArea from './FooterTopArea'
import FooterWidgetArea from './FooterWidgetArea'
import FooterCopyRight from './FooterCopyRight'

const FooterSection = () => {
  return (
    <div className='bg-(--custom-bg-primary) text-(--custom-text-white) pt-8'>
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