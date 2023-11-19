import React from 'react'
import Image from 'next/image'
import { succulentCorner } from '@/public/assets/images'

export const SectionFour = () => {
  return (
    <div className='relative max-w-screen-sm mx-auto'>
      <div className='relative'>
        <h1 className='leading-5 text-lg px-4 font-semibold sml:text-2xl lg:text-3xl text-jungleGreen p-4 w-full md:w-3/4 absolute top-2 left-2 sml:top-10 sml:left-4 lg:top-24 lg:left-10'>
          Thank you for choosing The Plant Emporium for your botancial needs!
        </h1>
        <p className='leading-4 text-sm px-5 sml:text-lg lg:text-2xl text-jungleGreen p-4 w-3/4 sml:w-1/2 xl:w-full absolute top-20 left-2 sm:top-16 sml:top-32 sml:left-4 lg:top-48 lg:left-10'>
          Your support means the world to us!
        </p>
        <Image
          src={succulentCorner}
          className='w-full'
          alt='Succulent Corner'
        />
      </div>
    </div>
  )
}
