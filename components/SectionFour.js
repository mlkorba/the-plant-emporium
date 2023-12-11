import React from 'react'
import { succulentCorner } from '@/public/assets/images'

export const SectionFour = () => {
  return (
    <div
      className='relative min-h-screen flex flex-col justify-center text-white z-0 bg-fixed'
      style={{
        backgroundImage: `url(${succulentCorner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='text-left relative z-10 p-8 md:p-12 mdl:p-16 lgl:px-32 xl:p-48 '>
        <h1 className='text-xl sml:text-2xl mdl:text-3xl font-semibold mb-4'>
          Thank you for choosing The Plant Emporium for your botanical needs!
        </h1>
        <h2 className='text-base sml:text-lg mdl:text-xl lgl:text-2xl '>
          Your support means the world to us, and we hope that the green
          companions you've selected bring joy and freshness to your space.
        </h2>
      </div>
    </div>
  )
}
