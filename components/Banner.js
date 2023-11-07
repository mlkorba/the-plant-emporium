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
              className='w-full opacity-50'
            />
        </div>
    </div>
  )
}
