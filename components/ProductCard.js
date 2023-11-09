import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import plantOne from '@/public/assets/images/product-images/kari-shea-3_cyj5YkhTs-unsplash.jpg'


export const ProductCard = ({ uid, plant_name, image, price, oldPrice }) => {
  return (
    <div className='group max-w-[500px] max-h-[350px] rounded-lg shadow-lg overflow-hidden '>
      <div className='w-full h-1/2 cursor-pointer overflow-hidden'>
        <Image
          className='w-full group-hover:scale-125 transition duration-500 cursor-pointer '
          src={plantOne}
          alt={plant_name}
        />
      </div>
      <div className='w-full h-auto px-2 py-4 bg-white'>
        <div className='text-center'>
          <div>
            <h2 className='text-base font-bold'>{plant_name}</h2>
          </div>
          <div className='text-center mb-4'>
              <p className='font-semibold'>${price}</p>
              {/* <p className='line-through'>${oldPrice}</p> */}
          </div>
          <div className="text-center ">
            <Link href={`/products/${uid}`}>
              <span className="bg-oliveGreen hover:bg-jungleGreen text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                 View Details
              </span>
            </Link>
         </div>
        </div>
      </div>
    </div>
  )
}
