'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { logo } from '@/public/assets/images'
import { IoIosSearch } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart, FaGithub } from 'react-icons/fa'

const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu.classList.toggle('hidden')
}

export const Navbar = ({ background }) => {
  const navbarStyle = {
    backgroundColor: background || 'transparent'
  }

  return (
    <div className='max-w-screen bg-greyGreen text-white'>
      <div className='max-w-contentContainer p-10 mx-auto h-20 px-4 flex items-center justify-between  gap-2'>
        {/* Left side of the navbar */}

        <div className='flex items-center gap-2'>
          <div>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                className='w-[80px] hover:scale-125 transition duration-500 cursor-pointer'
              />
            </Link>
          </div>

          <div className='hidden md:block'>
            <ul className='flex items-center gap-1'>
              <li className='text-base font-semibold navBarHover'>
                <Link href='/products'>Shop</Link>
              </li>
              <li className='text-base font-semibold navBarHover'>
                <a
                  href='https://github.com/mlkorba/the-plant-emporium'
                  target='_blank'
                >
                  <FaGithub className='text-xl' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right side of the navbar */}
        <div className='hidden md:flex items-center justify-center'>
          <h1 className='text-3xl font-semibold'>The Plant Emporium</h1>
        </div>
        <div className='hidden md:flex items-center justify-end gap-2'>
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
        {/* Mobile hamburger menu */}
        <div className='block md:hidden'>
          {/* Add your mobile menu icon (e.g., a hamburger menu) */}
          <button
            type='button'
            className='text-white focus:outline-none'
            onClick={toggleMobileMenu}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      <div id='mobile-menu' className='hidden md:hidden px-4 py-2'>
        <ul className='flex flex-col items-center gap-2'>
          <li className='text-base font-semibold navBarHover'>
            <Link href='/products'>Shop</Link>
          </li>
          <li className='text-base font-semibold navBarHover'>
            <a
              href='https://github.com/mlkorba/the-plant-emporium'
              target='_blank'
            >
              GitHub
            </a>
          </li>
          <li className='text-base font-semibold navBarHover'>
            <Link href='#'>Account</Link>
          </li>
          <li className='text-base font-semibold navBarHover'>
            <Link href='#'>My Cart</Link>
          </li>
          <li className='text-base font-semibold navBarHover'>
            <Link href='#'>Search</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
