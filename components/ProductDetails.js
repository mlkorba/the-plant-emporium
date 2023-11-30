import React from 'react'
import Image from 'next/image'
import { FaRulerCombined } from 'react-icons/fa'

export const ProductDetails = ({ product }) => {
  const imageURL = `/assets/images/product-images/${product.image}`
  return (
    <div className='max-w-contentContainer flex justify-center gap-10'>
      <div>
        <div>
          <Image
            src={imageURL}
            alt={product.plant_name}
            width={500}
            height={500}
            className=''
          />
        </div>
        <div className='py-8 px-4 sml:p-8'>
          <div className='text-center'>
            <h1 className='text-xl sm:text-2xl sml:text-3xl font-bold'>
              {product.plant_name}
            </h1>
            <span>
              {product.in_stock ? (
                <>
                  <div className='flex items-center justify-center gap-4'>
                    <p className='text-lg font-bold'>${product.price}</p>
                    <p className='line-through'>${product.oldPrice}</p>
                  </div>
                </>
              ) : (
                <p className='text-red-500 font-bold text-base sm:text-lg sml:text-xl'>
                  Out of Stock
                </p>
              )}
            </span>
            <span className='w-20 min-h-[5px] bg-jungleGreen'></span>
          </div>

          <div className='text-sm p-2 mb-2'>
            <h2 className='text-lg sm:text-xl sml:text-2xl font-bold mb-2'>
              Description
            </h2>
            <div className='text-sm sm:text-base'>
              <p className='mb-2'>{product.description}</p>
              <p className='mb-2'>
                <span className='font-semibold'>Plant Family: </span>
                {product.plant_family}
              </p>
              <p>
                <span className='font-semibold'>Plant Scientific Name: </span>
                {product.plant_scientific_name}
              </p>
            </div>
          </div>

          <div className='text-sm mb-4 border-solid text-white bg-darkPurple p-4 item rounded-xl'>
            <h2 className='text-lg sm:text-xl sml:text-2xl font-semibold mb-2  '>
              Plant Information
            </h2>
            <ul className='flex flex-col gap-1 text-sm sm:text-base'>
              <li>
                <span className='font-semibold'>Height:</span> {product.height}{' '}
                cm
              </li>
              <li>
                <span className='font-semibold'>Width:</span> {product.width} cm
              </li>
              <li>
                <span className='font-semibold'>Pot Size:</span>{' '}
                {product.pot_size}
              </li>
              <li>
                <span className='font-semibold'>Light Requirement:</span>{' '}
                {product.light_requirement}
              </li>
              <li>
                <span className='font-semibold'>Watering Frequency:</span>{' '}
                {product.watering_frequency}
              </li>
            </ul>
          </div>
          <div className='text-center px-2'>
            <button className='bg-jungleGreen hover:bg-oliveGreen text-white p-4 rounded-full cursor-pointer w-full font-semibold'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
