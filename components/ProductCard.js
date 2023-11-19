import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ uid, products }) => {
  const imageURL = `/assets/images/product-images/${products.image}`
  return (
    <div className='flex justify-center flex-wrap mb-10'> 
  <div className='group w-3/4 h-full mx-2 my-2 rounded-lg shadow-lg overflow-hidden'>
    <div className='w-full cursor-pointer overflow-hidden mb-10'>
      <div>
        <Image
          className='object-cover w-full h-[500px] group-hover:scale-125 transition duration-500 cursor-pointer'
          src={imageURL}
          width={500}
          height={500}
          alt={products.plant_name}
        />
      </div>
    </div>
    <div className='relative w-full h-[250px] bg-white'>
      <div className='text-center'>
        <div>
          <h2 className='text-base font-bold'>{products.plant_name}</h2>
        </div>
        <div className='text-center mb-5'>
          <p className='font-semibold'>${products.price}</p>
          <p className='line-through'>${products.oldPrice}</p>
        </div>
        <div className='text-center px-5'>
          <p className='mb-5'>{products.description}</p> 
        </div>
        <div className='text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-5'>
          <Link href={`/products/${uid}`}>
            <span className='bg-oliveGreen hover:bg-jungleGreen text-white font-bold py-2 px-4 rounded-full cursor-pointer'>
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
