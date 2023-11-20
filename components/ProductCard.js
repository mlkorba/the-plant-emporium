import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ uid, products }) => {
  const imageURL = `/assets/images/product-images/${products.image}`
  return (
    <div className='mb-5 lg:mb-10 px-2'>
  <div className='w-full sml:w-full m-2 rounded-lg shadow-lg overflow-hidden'>
    <div className='w-full cursor-pointer overflow-hidden mb-5'>
      <div>
        <Image
          className='object-cover w-full h-[320px] lg:h-[400px] lgl:h-[450px] xl:h-[500px] group-hover:scale-125 transition duration-500 cursor-pointer'
          src={imageURL}
          width={320}  // Adjusted width for smaller screens
          height={250} // Adjusted height for smaller screens
          alt={products.plant_name}
        />
      </div>
    </div>
    <div className='relative w-full h-[250px] sml:h-[265px] lgl:h-[300px] bg-white p-2 lg:p-5 lgl:px-8 '>
      <div >
        <div>
          <h2 className='text-sm md:text-base text-center font-bold mb-2 text-jungleGreen'>{products.plant_name}</h2>
        </div>
        <div className='text-sm px-2 md:text-base text-jungleGreen'>
          <p className='mb-5'>{products.description}</p> 
        </div>
        <div className='sml:absolute sml:bottom-20 sml:left-8 sml:w-3/4 mb-2'>

        <div className='text-center sml:flex sml:justify-between text-sm md:text-base mb-2 text-jungleGreen '>
          <p className='font-semibold'>${products.price}</p>
          <p className='line-through'>${products.oldPrice}</p>
        </div>
        </div>
        <div className='text-center md:text-base mb-10 absolute bottom-0 left-0 w-full '>
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
