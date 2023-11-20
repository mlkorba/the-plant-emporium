import React from 'react'
import Image from 'next/image'
import { succulentCorner } from '@/public/assets/images'

export const SectionFour = () => {
  return (
    <div className='relative max-w-screen-sm mx-auto'>
      <div className='relative'>
        <h1 className='leading-5 p-5 text-lg font-semibold sml:text-2xl lg:text-3xl lgl:text-[65px] lgl:leading-tight text-jungleGreen w-full md:w-3/4 absolute top-2 left-0 sml:top-10 sml:left-4 lg:top-24 lg:left-10'>
          Thank you for choosing The Plant Emporium for your botancial needs!
        </h1>
        <p className='leading-4 p-5 w-[60%] sml:w-[55%]  text-jungleGreen text-sm sml:text-xl lg:text-2xl lgl:text-[50px] lgl:leading-tight absolute top-20 left-0 sm:top-16 sml:top-32 sml:left-4 lg:top-48 lg:left-10 lgl:top-96'>
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
