import { BellRing, PhoneOutgoing } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const TopHeader = () => {
  return (
    <div className='container mx-auto px-4 py-3 relative z-10 '>
      <div className='flex justify-between items-center'>
        <div className='text-sm text-(--cus-tx-sec)'>
          <p><PhoneOutgoing className='inline-block mr-1'/> 09647 444 444</p>
        </div>
        <div className=''>
          <Button className='bg-(--cus-bg-accent) text-(--cus-tx-sec) :hover:bg-(--cus-bg-accent-hover)' size="lg"><BellRing className='font-semibold'/> Get a Quote</Button>
        </div>
      </div>
    </div>
  )
}

export default TopHeader