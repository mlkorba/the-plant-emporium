import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

export const SectionTwo = () => {
  return (
    <section className='py-10 -mt-[500px] h-80 bg-darkPurple flex gap-28 items-center justify-center mb-16'>
      <div className='max-w-[1280px] flex justify-center items-center gap-52'>
        <div className='w-52 h-52 bg-white rounded-full p-4 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <TbTruckDelivery className='text-[30px]' />
            <p>Fast delivery</p>
          </div>
        </div>

        <div className='w-52 h-52 bg-white rounded-full p-4 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <TbTruckDelivery />
            <p>Fast delivery</p>
          </div>
        </div>

        <div className='w-52 h-52 bg-white rounded-full p-4 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-2'>
            <TbTruckDelivery />
            <p>Fast delivery</p>
          </div>
        </div>
      </div>
    </section>
  )
}
