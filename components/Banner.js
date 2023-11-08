import React from 'react'
import Image from 'next/image'
import { landingBg } from '@/public/assets/images'

export const Banner = () => {
  return (
    <div className='max-w-full mx-auto'>
        <div className='bg-black relative -z-1 -mt-[150px] '>
        <Image
              src={landingBg}
              alt='logo'
              className='w-full h-auto opacity-50'
            />
            <div className="absolute top-[450px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold">
      Your Text Goes Here
    </div>
        </div>
    </div>
  )
}
