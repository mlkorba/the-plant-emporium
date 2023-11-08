import React from 'react'
import { ProductCard } from './ProductCard'

export const ProductSection = () => {
  return (
    <div className='py-10 -mt-[500px] bg-white'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-lavender text-white py-2 w-96 text-center -mt-[68px]'>
                Discover Nature's Bounty
            </h1>
            <span className='w-20 h-[3px] bg-jungleGreen'></span>
            <p className='max-w-[800px] text-oliveGreen text-center'>Nulla consectetur et mollit tempor esse. Eiusmod aliqua ea culpa veniam exercitation irure duis. Labore officia in amet aliquip ut officia id amet. Elit consequat fugiat nisi proident laboris fugiat fugiat officia mollit. Aute excepteur officia ad irure qui aliqua amet fugiat fugiat.</p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductCard />
            </div>
    </div>
  )
}
