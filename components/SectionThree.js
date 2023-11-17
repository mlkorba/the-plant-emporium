import React from 'react'
import Image from 'next/image'
import { localPlants } from '@/public/assets/images'

export const SectionThree = () => {
  return (
    <section className='max-w-contentContainer mx-auto p-4'>
      <div className='md:flex md:items-center md:justify-center md:gap-16 mb-10'>
        <div>
          <p className='text-sm rounded-xl'>
            Veniam mollit officia et ipsum eiusmod occaecat cupidatat culpa
            aute. Adipisicing quis anim excepteur nostrud enim aliqua duis id
            sunt velit labore. Sint tempor laboris ex laborum. Aliqua nostrud in
            ad excepteur reprehenderit sunt nisi id non labore cupidatat laboris
            sit sit. Consectetur aliqua non nulla magna ea deserunt irure ea
            labore. Nostrud non minim quis voluptate. Esse ullamco irure laborum
            mollit.
          </p>
        </div>
        <div>
          <Image src={localPlants} className='text-sm rounded-xl shadow-md ' />
        </div>
      </div>
      <div className='md:flex md:items-center md:justify-center md:gap-16 mb-10'>
        <div>
          <p className='rounded-xl'>
            Veniam mollit officia et ipsum eiusmod occaecat cupidatat culpa
            aute. Adipisicing quis anim excepteur nostrud enim aliqua duis id
            sunt velit labore. Sint tempor laboris ex laborum. Aliqua nostrud in
            ad excepteur reprehenderit sunt nisi id non labore cupidatat laboris
            sit sit. Consectetur aliqua non nulla magna ea deserunt irure ea
            labore. Nostrud non minim quis voluptate. Esse ullamco irure laborum
            mollit.
          </p>
          <div>
            <Image src={localPlants} className='rounded-xl shadow-md' />
          </div>
        </div>
      </div>
    </section>
  )
}
