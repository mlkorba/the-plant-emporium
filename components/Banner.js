import React from 'react'
import Image from 'next/image'
import { landingBg } from '@/public/assets/images'

export const Banner = () => {
  return (
    <div className='max-w-full mx-auto'>
  <div className='bg-black relative -z-1 -mt-10 md:-mt-20 lg:-mt-32'>
    <Image
      src={landingBg}
      alt='logo'
      className='w-full h-auto opacity-50'
    />
  </div>
</div>

  )
}
