import Image from 'next/image'
import React from 'react'
import { logo } from '@/public/assets/images'
import { IoIosSearch } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='w-full text-white'>
      <div className='max-w-container mt-10 mx-auto h-20 px-4 flex items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
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
          <h1 className='text-[32px] font-bold'>The Plant Emporium</h1>
        </div>

        <div className='flex items-center justify-end gap-2'>
          <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
            <BsFillPersonFill className='text-2xl' />
          </div>

          <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
            <FaShoppingCart className='text-2xl' />
          </div>

          <div className='relative'>
            <div className='flex flex-col justify-center items-center gap-0 navBarHover'>
              <IoIosSearch className='text-2xl' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
