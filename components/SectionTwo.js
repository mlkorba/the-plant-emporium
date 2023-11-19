import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { PiPlantFill } from "react-icons/pi";
import { BiSolidBookHeart } from "react-icons/bi";

export const SectionTwo = () => {
  return (
    <section className='py-10 min-h-80 bg-lavender md:flex md:items-center md:justify-center'>
      <div className='max-w-contentContainer mx-auto w-fit md:flex md:justify-center md:items-center md:gap-5 mdl:gap-10 lg:gap-20 lgl:gap-24 xl:gap-28 xxl:gap-32'>
        <div className='w-40 h-40 sml:w-44 sml:h-44 lg:w-52 lg:h-52 bg-white rounded-full p-4 my-5 flex items-center justify-center drop-shadow-xl'>
          <div className='flex flex-col items-center gap-2 '>
          <PiPlantFill className='text-4xl lg:text-5xl' />
            <p className='text-base font-semibold'>Locally sourced</p>
          </div>
        </div>

        <div className='w-40 h-40 sml:w-44 sml:h-44 lg:w-52 lg:h-52 bg-white rounded-full p-4 my-10 flex items-center justify-center drop-shadow-xl'>
          <div className='flex flex-col items-center gap-2'>
            <TbTruckDelivery className='text-4xl lg:text-5xl' />
            <p className='text-base font-semibold'>Fast delivery</p>
          </div>
        </div>

        <div className='w-40 h-40 sml:w-44 sml:h-44 lg:w-52 lg:h-52 bg-white rounded-full p-4 my-5 flex items-center justify-center drop-shadow-xl'>
          <div className='flex flex-col items-center gap-2'>
          <BiSolidBookHeart className='text-4xl lg:text-5xl' />
            <p className='text-base font-semibold'>Expert Advice</p>
          </div>
        </div>
      </div>
    </section>
  )
}
