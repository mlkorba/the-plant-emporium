import React from 'react'
import Image from 'next/image'
import { FaRulerCombined } from 'react-icons/fa'

export const ProductDetails = ({ product }) => {
  const imageURL = `/assets/images/product-images/${product.image}`
  return (
    <div className='max-w-contentContainer lgl:mx-auto'>
      <div className='lgl:flex lgl:items-center lgl:justify-center lgl:gap-10 lgl:my-5 '>
        <div>
          <Image
            src={imageURL}
            alt={product.plant_name}
            width={320}
            height={200}
            className='w-full h-auto mx-auto sml:w-[75%] md:w-[60%] mdl:w-[40%] lgl:w-[100%]'
          />
        </div>
        <div className='mx-auto p-8 md:w-[75%] lgl:w-[50%] lgl:mx-0'>
          <div className='text-center text-jungleGreen mb-4'>
            <h1 className='text-2xl font-bold'>{product.plant_name}</h1>
            <span>
              {product.in_stock ? (
                <>
                  <div className='flex items-center justify-center gap-4 text-lg text-jungleGreen'>
                    <p className='font-bold text-base'>${product.price}</p>
                    <p className='line-through text-base'>
                      ${product.oldPrice}
                    </p>
                  </div>
                </>
              ) : (
                <p className='text-red-500 font-bold text-base'>Out of Stock</p>
              )}
            </span>
          </div>

          <div className='text-sm p-2 mb-4 border-t-2 border-darkPurple text-jungleGreen '>
            <h2 className='text-xl font-semibold '>Description</h2>
            <div className=' text-sm'>
              <p className='text-base mb-4'>{product.description}</p>
              <p className='text-base  mb-4'>
                <span className='font-semibold'>Plant Family: </span>
                {product.plant_family}
              </p>
              <p className='text-base '>
                <span className='font-semibold'>Plant Scientific Name: </span>
                {product.plant_scientific_name}
              </p>
            </div>
          </div>

          <div className='text-sm mb-8 border-solid item rounded-2xl border-2 border-darkPurple sml:w-[75%] mdl:w-[50%] lgl:w-[80%] mx-auto'>
            <h2 className='text-lg text-white bg-darkPurple px-4 py-2 rounded-t-xl'>
              Plant Information
            </h2>
            <ul className='flex flex-col gap-1 p-3 rounded-b-xl text-darkPurple text-base '>
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
            <button
              className={`text-base bg-jungleGreen hover:bg-oliveGreen text-white py-2 px-4 rounded-full cursor-pointer w-full sml:w-[75%] mdl:w-[50%] font-semibold`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
