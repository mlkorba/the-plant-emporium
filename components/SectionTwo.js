import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { PiPlantFill } from "react-icons/pi";
import { BiSolidBookHeart } from "react-icons/bi";

export const SectionTwo = () => {
  return (
    <section className='py-10 min-h-80 bg-darkPurple mdl:flex mdl:items-center mdl:justify-center'>
      <div className='max-w-contentContainer mx-auto w-fit mdl:flex mdl:justify-center mdl:items-center mdl:gap-10 lg:gap-20 lgl:gap-24 xl:gap-28 xxl:gap-32'>
        <div className='w-52 h-52 bg-white rounded-full p-4 my-5 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
          <PiPlantFill className='text-[50px]' />
            <p className='font-semibold'>Locally sourced</p>
          </div>
        </div>

        <div className='w-52 h-52 bg-white rounded-full p-4 my-10 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <TbTruckDelivery className='text-[50px]' />
            <p className='font-semibold'>Fast delivery</p>
          </div>
        </div>

        <div className='w-52 h-52 bg-white rounded-full p-4 my-5 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
          <BiSolidBookHeart className='text-[50px] ' />
            <p className='font-semibold'>Expert Advice</p>
          </div>
        </div>
      </div>
    </section>
  )
}
