import React from 'react'
import Image from 'next/image'
import { localPlants } from '@/public/assets/images'
import { seedling } from '@/public/assets/images'

export const SectionThree = () => {
  return (
    <section className='max-w-[1280px] mx-auto mb-16'>
      <div className='flex items-center justify-center gap-16 mb-10'>
        <div>
          <p className='w-96 rounded-xl'>
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
          <Image src={seedling} className='w-96 rounded-xl shadow-md' />
        </div>
      </div>
      <div className='flex items-center justify-center gap-16 mb-16'>
        <div>
          <Image src={localPlants} className='w-96 rounded-xl shadow-md' />
        </div>
        <div>
          <p className='w-96 rounded-xl'>
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
    </section>
  )
}
