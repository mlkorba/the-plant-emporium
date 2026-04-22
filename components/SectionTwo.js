import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { PiPlantFill } from 'react-icons/pi'
import { BiSolidBookHeart } from 'react-icons/bi'

export const SectionTwo = () => {
  return (
    <section className='py-20 bg-jungleGreen'>
      <div className='max-w-contentContainer mx-auto px-6 text-center'>

        <h2 className='text-2xl lg:text-3xl font-semibold mb-12 text-offWhite/95'>
          Why Shop With Us
        </h2>

        <div className='flex flex-col md:flex-row items-center justify-center gap-12'>

          <div className='flex flex-col items-center text-center group'>
            <div className='w-36 h-36 lg:w-44 lg:h-44 bg-offWhite rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition duration-300'>
              <PiPlantFill className='text-4xl lg:text-5xl text-oliveGreen' />
            </div>
            <p className='mt-5 text-base font-semibold text-offWhite/95'>
              Locally Sourced
            </p>
            <p className='text-sm text-offWhite/80 max-w-[200px] mt-2 leading-relaxed'>
              Fresh, high-quality plants grown by trusted local growers.
            </p>
          </div>

          <div className='flex flex-col items-center text-center group'>
            <div className='w-36 h-36 lg:w-44 lg:h-44 bg-offWhite rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition duration-300'>
              <TbTruckDelivery className='text-4xl lg:text-5xl text-oliveGreen' />
            </div>
            <p className='mt-5 text-base font-semibold text-offWhite/95'>
              Fast Delivery
            </p>
            <p className='text-sm text-offWhite/80 max-w-[200px] mt-2 leading-relaxed'>
              Quick and reliable shipping straight to your door.
            </p>
          </div>

          <div className='flex flex-col items-center text-center group'>
            <div className='w-36 h-36 lg:w-44 lg:h-44 bg-offWhite rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition duration-300'>
              <BiSolidBookHeart className='text-4xl lg:text-5xl text-oliveGreen' />
            </div>
            <p className='mt-5 text-base font-semibold text-offWhite/95'>
              Expert Advice
            </p>
            <p className='text-sm text-offWhite/80 max-w-[200px] mt-2 leading-relaxed'>
              Helpful tips to keep your plants healthy and thriving.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
