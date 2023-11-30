import React from 'react'
import Image from 'next/image'
import { FaRulerCombined } from 'react-icons/fa'

export const ProductDetails = ({ product }) => {
  const imageURL = `/assets/images/product-images/${product.image}`
  return (
    <div className='max-w-contentContainer mx-auto'>
      <div className='flex justify-center gap-10'>
        <div>
          <Image
            src={imageURL}
            alt={product.plant_name}
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className='text-4xl font-bold'>{product.plant_name}</h1>
          <p>${product.price}</p>
          <p className='line-through'>${product.oldPrice}</p>

          <div className='mb-5'>
            <h2 className='font-semibold'>Description</h2>
            <p>{product.description}</p>
            <p>{product.plant_family}</p>
            <p>{product.plant_scientific_name}</p>
          </div>

          <div>
            <h2 className='font-semibold'>Plant Information</h2>
            <ul>
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
          <div className='flex justify-between'>
            <button className='bg-green-500 text-white py-2 px-4 rounded cursor-pointer'>
              Add to Cart
            </button>
            <span className='font-bold'>
              {product.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
