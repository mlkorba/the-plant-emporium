import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { landingBg } from '@/public/assets/images'

export const Hero = () => {
  return (
    <div
      className='hero-section relative h-screen flex flex-col justify-center text-white z-0 bg-fixed'
      style={{
        backgroundImage: `url(${landingBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0 bg-black opacity-40'></div>
      <div className='hero-content text-center relative z-10 px-5 sml:px-6 md:px-8'>
        <h1 className='text-4xl lgl:text-5xl mb-4'>
          Discover the Beauty of Succulents
        </h1>
        <h2 className='text-lg lgl:text-2xl mb-8'>
          Transform your space with our handpicked collection of unique and
          low-maintenance succulent plants.
        </h2>
        <Link
          href='/products'
          className='cta-button bg-darkPurple hover:bg-lavender hover:font-semibold text-white py-2 px-4 rounded-full inline-block text-lg lgl:text-2xl drop-shadow-md duration-300 cursor-pointer'
        >
          Explore Our Collection
        </Link>
      </div>
    </div>
  )
}
