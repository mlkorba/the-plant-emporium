import Image from 'next/image'
import React from 'react'
import { logo } from '@/public/assets/images'
import { IoIosSearch } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='w-full text-white'>
  <div className='max-w-container mt-10 mx-auto h-20 px-4 flex items-center justify-between gap-5'>
    <div className='flex items-center'>
      <div>
        <Image
          src={logo}
          alt='logo'
          className='w-[100px] hover:scale-125 transition duration-500 cursor-pointer'
        />
      </div>

      <div>
        <ul className='flex items-center gap-1'>
          <li className='text-base font-semibold navBarHover'>Shop</li>
          <li className='text-base font-semibold navBarHover'>Services</li>
        </ul>
      </div>
    </div> 

    <div className='text-center flex-grow'>
      <p className='text-lg font-semibold'>The Plant Emporium</p>
    </div>
    {/* Company Name */}
    
    <div className='flex items-center justify-end'>
      <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
        <BsFillPersonFill className='text-2xl' />
        <p className='text-[14px]'>Account</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
        <FaShoppingCart className='text-2xl' />
        <p className='text-[14px]'>$0.00</p>
      </div>

      <div className='relative'>
  <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
    <IoIosSearch className='text-2xl' />
  </div>

  <div className='absolute top-12 right-0 p-2 bg-white rounded-full hidden'>
    {/* Search bar content */}
    <div className="flex">
      <input type='text' className="rounded-full p-2" placeholder='Search...' />
      <button className="bg-blue-500 text-white rounded-r-lg">Search</button>
    </div>
  </div>
</div>



      
    </div>
    {/* Right Side: Account and Cart */}
  </div>
</div>


  )
}
