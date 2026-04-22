import React from 'react'
import Image from 'next/image'
import { localPlants } from '@/public/assets/images'

export const SectionThree = () => {
  return (
    <section className='max-w-contentContainer mx-auto my-16 px-6 py-14 bg-offWhite rounded-3xl'>

      <div className='text-center mb-12'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-3 text-slate'>
          Plant Care Tips
        </h1>
        <p className='text-greyGreen max-w-xl mx-auto text-base md:text-lg'>
          Keep your plants thriving with these simple, effective care tips.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-8'>

        <div className='w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group border border-lightMist'>
          <Image
            alt='potted plants on wooden shelf'
            src={localPlants}
            className='w-full h-48 object-cover group-hover:scale-105 transition duration-300'
          />
          <div className='p-5'>
            <h3 className='font-semibold text-lg mb-2 text-slate'>
              Watering
            </h3>
            <p className='text-sm text-greyGreen leading-relaxed'>
              Avoid overwatering—most plants prefer slightly dry soil between watering.
            </p>
          </div>
        </div>

        <div className='w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group border border-lightMist'>
          <Image
            alt='potted plants on wooden shelf'
            src={localPlants}
            className='w-full h-48 object-cover group-hover:scale-105 transition duration-300'
          />
          <div className='p-5'>
            <h3 className='font-semibold text-lg mb-2 text-slate'>
              Sunlight
            </h3>
            <p className='text-sm text-greyGreen leading-relaxed'>
              Place plants in bright indirect light for best growth.
            </p>
          </div>
        </div>

        <div className='w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group border border-lightMist'>
          <Image
            alt='potted plants on wooden shelf'
            src={localPlants}
            className='w-full h-48 object-cover group-hover:scale-105 transition duration-300'
          />
          <div className='p-5'>
            <h3 className='font-semibold text-lg mb-2 text-slate'>
              Humidity
            </h3>
            <p className='text-sm text-greyGreen leading-relaxed'>
              Increase humidity with misting or nearby water sources.
            </p>
          </div>
        </div>

        <div className='w-full sm:w-[45%] lg:w-[22%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group border border-lightMist'>
          <Image
            alt='potted plants on wooden shelf'
            src={localPlants}
            className='w-full h-48 object-cover group-hover:scale-105 transition duration-300'
          />
          <div className='p-5'>
            <h3 className='font-semibold text-lg mb-2 text-slate'>
              Repotting
            </h3>
            <p className='text-sm text-greyGreen leading-relaxed'>
              Give roots space to grow by repotting when your plant outgrows its pot.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
