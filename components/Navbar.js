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

export const Navbar = () => {
  return (
    <div className='bg-jungleGreen text-offWhite'>
      <div className='max-w-contentContainer mx-auto px-6 h-20 flex items-center justify-between'>

        {/* Left */}
        <div className='flex items-center gap-6'>

          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='w-[80px] hover:scale-105 transition duration-300 cursor-pointer'
            />
          </Link>

          <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-offWhite/80'>
            <li className='hover:text-oliveGreen transition'>
              <Link href='/products'>Shop</Link>
            </li>
            <li className='hover:text-oliveGreen transition'>
              <a
                href='https://github.com/mlkorba/the-plant-emporium'
                target='_blank'
              >
                <FaGithub className='text-xl' />
              </a>
            </li>
          </ul>

        </div>

        {/* Center brand (desktop only) */}
        <div className='hidden md:block'>
          <h1 className='text-lg font-semibold tracking-wide'>
            The Plant Emporium
          </h1>
        </div>

        {/* Right */}
        <div className='hidden md:flex items-center gap-5'>

          <BsFillPersonFill className='text-xl hover:text-oliveGreen transition cursor-pointer' />

          <FaShoppingCart className='text-xl hover:text-oliveGreen transition cursor-pointer' />

          <IoIosSearch className='text-xl hover:text-oliveGreen transition cursor-pointer' />

        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button
            type='button'
            className='text-offWhite focus:outline-none'
            onClick={toggleMobileMenu}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      <div id='mobile-menu' className='hidden md:hidden px-6 pb-4'>
        <ul className='flex flex-col gap-3 text-offWhite/80 text-base font-medium'>

          <li className='hover:text-oliveGreen transition'>
            <Link href='/products'>Shop</Link>
          </li>

          <li className='hover:text-oliveGreen transition'>
            <a
              href='https://github.com/mlkorba/the-plant-emporium'
              target='_blank'
            >
              GitHub
            </a>
          </li>

          <li className='hover:text-oliveGreen transition'>
            <Link href='#'>Account</Link>
          </li>

          <li className='hover:text-oliveGreen transition'>
            <Link href='#'>My Cart</Link>
          </li>

          <li className='hover:text-oliveGreen transition'>
            <Link href='#'>Search</Link>
          </li>

        </ul>
      </div>
    </div>
  )
}
