import React from 'react'
import Image from 'next/image'
import { localPlants } from '@/public/assets/images'

export const SectionThree = () => {
  return (
    <section className='max-w-contentContainer mx-auto my-10 px-10'>
      <div className='md:flex md:items-center md:justify-center md:gap-8'>
        <h1 className='text-2xl lg:text-3xl font-semibold text-center mb-5 md:w-full'>
          Plant Care Tips
        </h1>
      </div>
      <div className='md:flex md:items-center md:justify-center md:gap-8 mb-5'>
        <div className='md:w-full xl:w-1/2'>
          <p className='text-sm text-center md:text-base lg:text-lg lgl:text-xl rounded-xl mb-2'>
            Veniam mollit officia et ipsum eiusmod occaecat cupidatat culpa
            aute. Adipisicing quis anim excepteur nostrud enim aliqua duis id
            sunt velit labore. Sint tempor laboris ex laborum. Aliqua nostrud in
            ad excepteur reprehenderit sunt nisi id non labore cupidatat laboris
            sit sit. Consectetur aliqua non nulla magna ea deserunt irure ea
            labore. Nostrud non minim quis voluptate. Esse ullamco irure laborum
            mollit.
          </p>
        </div>
      </div>
      <div className='md:flex md:items-center md:justify-center md:gap-8 mb-5'>
        <div className='md:w-full xl:w-1/2'>
          <Image
            src={localPlants}
            className='w-full h-auto text-sm rounded-xl shadow-md'
          />
        </div>
      </div>
    </section>
  )
}
