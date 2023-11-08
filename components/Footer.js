import React from 'react'
import Image from 'next/image'
import { logo, paymentMethods } from '@/public/assets/images'
import { ImGithub } from 'react-icons/im'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='bg-oliveGreen text-white py-20 '>
      <div className='max-w-[1280px] mx-auto grid grid-cols-4'>
        {/* Logo Start */}
        <div className='flex flex-col gap-2'>
          <Image
            src={logo}
            alt='logo'
            className='w-[100px] hover:scale-125 transition duration-500 cursor-pointer'
          />
          <div className='flex gap-5 text-lg text-white'>
            <ul className='flex items-center gap-3'>
              <li>
                <FaFacebookF className='hover:text-jungleGreen duration-300 cursor-pointer' />
              </li>
              <li>
                <FaTwitter className='hover:text-jungleGreen duration-300 cursor-pointer' />
              </li>
              <li>
                <FaInstagram className='hover:text-jungleGreen duration-300 cursor-pointer' />
              </li>
              <li>
                <FaYoutube className='hover:text-jungleGreen duration-300 cursor-pointer' />
              </li>
            </ul>
          </div>
        </div>
        {/* Logo End */}
        {/* Location Start */}
        <div >
          <h2 className='text-2xl font-semibold text-white mb-4'>Location</h2>
          <div className='text-base flex-col gap-2'>
            <p>1234 Garden Street</p>
            <p>Botanicalville, Natureland</p>
            <p>A1A 1A1</p>
            <p>Canada</p>
          </div>
        </div>
        {/* Location End */}
        {/* Profile Start */}
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Location</h2>
        </div>
      </div>
    </div>
  )
}
