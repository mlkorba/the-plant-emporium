import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ uid, products }) => {
  const imageURL = `/assets/images/product-images/${products.image}`
  return (
    <div className='max-w-contentContainer'>
      <div className='w-full mb-4 rounded-lg shadow-lg overflow-hidden'>
        <div className='cursor-pointer overflow-hidden mb-5'>
          <div>
            <Link href={`/products/${uid}`}>
              <Image
                className='object-cover object-bottom w-full h-[275px] lg:h-[400px] lgl:h-[450px] xl:h-[500px] transition duration-500 cursor-pointer hover:scale-110'
                src={imageURL}
                width={320} // Adjusted width for smaller screens
                height={250} // Adjusted height for smaller screens
                alt={products.plant_name}
              />
            </Link>
          </div>
        </div>
        {/* Description */}
        <div className='relative w-full h-[275px] sml:h-[265px] lgl:h-[300px] bg-white p-2 lg:p-5 lgl:px-8'>
          <div className='flex flex-col'>
            <div>
              <h2 className='text-lg mdl:text-xl lg:text-2xl text-center font-bold mb-2 text-jungleGreen'>
                {products.plant_name}
              </h2>
            </div>
            <div className='px-4'>
              <div className='text-sm md:text-base text-jungleGreen'>
                <p>{products.description}</p>
              </div>
              <div className='absolute bottom-24 left-10 right-10'>
                {!products.in_stock && (
                  <p className='text-red-500 font-bold text-base text-center'>
                    Out of Stock
                  </p>
                )}
                <div className='flex justify-between text-sm md:text-base text-jungleGreen'>
                  <>
                    <p className='font-bold'>${products.price}</p>
                    <p className='line-through'>${products.oldPrice}</p>
                  </>
                </div>
              </div>
              <div className='text-center md:text-base absolute bottom-10 left-0 w-full'>
                <Link href={`/products/${uid}`}>
                  <span className='bg-oliveGreen hover:bg-jungleGreen text-white font-bold py-2 px-4 lgl:px-8 lgl:py-4 rounded-full cursor-pointer'>
                    View Details
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
