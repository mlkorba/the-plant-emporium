import React from 'react'
import Image from 'next/image'

export const ProductDetails = ({ product }) => {
  const imageURL = `/assets/images/product-images/${product.image}`
  return (
    <div className='flex justify-center'>
      <div className='max-w-md'>
        <Image
          src={imageURL}
          alt={product.plant_name}
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className='text-4xl font-bold'>{product.plant_name}</h1>
        <p>{product.price}</p>
        <p>
          <span className='font-bold'>In Stock:</span>{' '}
          {product.in_stock ? 'Yes' : 'No'}
        </p>
        <p>
          <span className='font-semibold'>Scientific Name:</span>{' '}
          {product.plant_scientific_name}{' '}
        </p>
        <div>
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

        <button className='bg-green-500 text-white py-2 px-4 rounded cursor-pointer'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
