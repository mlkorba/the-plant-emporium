import Image from 'next/image'
import React from 'react'
import { logo } from '@/public/assets/images'
import { IoIosSearch } from 'react-icons/io'
import { BsSuitHeartFill, BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className='w-full text-white'>
      <div className='max-w-[1280px] mt-10 mx-auto h-20 px-4 flex items-center justify-evenly'>
        {/* Left side of navbar with logo, shop, services, and company name */}
        <div className='flex items-center gap-2'>
          {/* Logo Start */}
          <div>
            <Image
              src={logo}
              alt='logo'
              className='w-[100px] hover:scale-125 transition duration-500 cursor-pointer'
            />
          </div>

          <div>
            <ul className='flex items-center gap-2'>
              <li className='text-base font-semibold navBarHover'>Shop</li>
              <li className='text-base font-semibold navBarHover'>Services</li>
            </ul>
          </div>
        </div>
        <div className='text-[30px] font-bold'>
          <h2>The Plant Emporium</h2>
        </div>

        {/* Left side of navbar with account, cart, and searchbar */}
        <div className='flex items-center gap-2'>
          {/* My Favourites Start */}
          {/* <div className='flex flex-col justify-center items-center gap-2 navBarHover'>
            <BsSuitHeartFill className='text-xl' />
            <p className='text-[14px] -mt-2'>Favourites</p>
          </div> */}
          {/* My Favourites End */}

          {/* Accounts Start */}
          <div className='flex flex-col justify-center items-center navBarHover'>
            <BsFillPersonFill className='text-2xl' />
            <p className='text-[14px] -mt-2'>Account</p>
          </div>
           {/* Accounts End */}

          {/* Cart Start */}
          <div className='flex flex-col justify-center items-center navBarHover'>
            <FaShoppingCart className='text-2xl' />
            <p className='text-[14px] -mt-2'>$0.00</p>
            {/* <span className='absolute w-4 h-4 bg-red-600 text-white top-12 right-[500px] rounded-full flex items-center justify-center text-xs'>
              0
            </span> */}
          </div>
          {/* Cart End */}

          {/* Search Bar Start */}
          <div className='h-10 flex justify-center items-center relative gap-2'>
            <input
              type='text'
              className='h-full w-full rounded-full px-4 text-jungleGreen text-base outline-none border-[3px] border-transparent focus-visible:border-lavender duration-200'
              placeholder='Search'
            />
            <span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 text-jungleGreen text-xl hover:scale-125 transition duration-500 cursor-pointer'>
              <IoIosSearch />
            </span>
          </div>
          {/* Search Bar End */}
        </div>
      </div>
    </div>
  )
}
