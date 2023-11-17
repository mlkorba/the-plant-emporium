import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { landingBg } from '@/public/assets/images'

export const Hero = () => {
  return (
    <div
      className="hero-section relative h-screen flex flex-col justify-center text-white z-0"
      style={{ backgroundImage: `url(${landingBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="hero-content text-center relative z-10 xs:px-1 sm:px-2 sml:px-3">
        <h1 className="text-4xl mb-4">Discover the Beauty of Succulents</h1>
        <h2 className="text-lg mb-8">Transform your space with our handpicked collection of unique and low-maintenance succulent plants.</h2>
        <Link href="/products" className="cta-button bg-jungleGreen text-white py-2 px-4 rounded inline-block text-lg hover:bg-oliveGreen duration-300 cursor-pointer">Explore Our Collection</Link>
      </div>
    </div>
  )
}