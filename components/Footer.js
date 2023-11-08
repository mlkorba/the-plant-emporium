import React from 'react'
import Image from 'next/image'
import { logo } from '@/public/assets/images'
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
        {/* About Start */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>About Us</h2>
          <ul>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        {/* About End */}
        {/* Location Start */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Location</h2>
          <div className='text-base flex-col gap-2'>
            <p>1234 Garden Street</p>
            <p>Botanicalville, Natureland</p>
            <p>A1A 1A1</p>
            <p>Canada</p>
          </div>
        </div>
        {/* Location End */}

        {/* Subscribe Start */}
        <div>
          <div>
            <input
              className='bg-white rounded-l-full px-4 py-2 text-sm'
              placeholder='E-mail address'
              type='text'
            />
            <button className='px-4 rounded-r-full h-9 bg-jungleGreen'>
              Subscribe
            </button>
          </div>
          <div className='mt-4'>
            <p className='text-sm text-center'>
              Subscribe to receive new product releases, exclusive discount
              codes, invites to events, and a chance to win prizes!
            </p>
          </div>
        </div>
        {/* Subscribe End*/}
      </div>
    </div>
  )
}
