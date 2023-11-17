import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/public/assets/images'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='bg-oliveGreen text-white py-5 '>
      <div className='max-w-contentContainer text-center mx-auto grid grid-cols-1 mdl:grid-cols-4'>
        {/* Logo Start */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='w-[100px]  mdl:hover:scale-125 transition duration-500 cursor-pointer'
            />
          </Link>
          <div className='text-3xl text-center text-white mb-4'>
            <ul className='flex justify-center gap-6'>
              <li className='hover:bg-white rounded-full p-2'>
                <FaFacebookF className='hover:text-jungleGreen mdl:cursor-pointer' />
              </li>
              <li className='hover:bg-white rounded-full p-2'>
                <FaTwitter className='hover:text-jungleGreen mdl:cursor-pointer' />
              </li>
              <li className='hover:bg-white rounded-full p-2'>
                <FaInstagram className='hover:text-jungleGreen mdl:cursor-pointer' />
              </li>
              <li className='hover:bg-white rounded-full p-2'>
                <FaYoutube className='hover:text-jungleGreen mdl:cursor-pointer' />
              </li>
            </ul>
          </div>
        </div>
        {/* Logo End */}
        {/* About Start */}
        <div className='mb-4 text-left px-4'>
          <h2 className='text-lg mdl:text-2xl font-semibold text-white'>
            About Us
          </h2>
          <ul className='text-base'>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        {/* About End */}
        {/* Location Start */}
        <div className='mb-4 text-left px-4'>
          <h2 className='text-lg mdl:text-2xl font-semibold text-white'>
            Location
          </h2>
          <div className='text-base mdl:flex-col mdl:gap-2'>
            <p>1234 Garden Street</p>
            <p>Botanicalville, Natureland</p>
            <p>A1A 1A1</p>
            <p>Canada</p>
          </div>
        </div>
        {/* Location End */}

        {/* Subscribe Start */}
        <div className='bg-jungleGreen mb-4'>
          <div className='text-sm py-5 mdl:flex mdl:flex-col '>
            <input
              className='bg-white mx-auto rounded-full mdl:rounded-l-full px-4 py-2 mb-3'
              placeholder='E-mail address'
              type='text'
            />
            <button className='mx-auto px-4 h-9 w-[232px] rounded-full text-white bg-oliveGreen navBarHover3 mdl:rounded-r-full'>
              Subscribe
            </button>
          </div>
          <div className='mb-4 '>
            <p className='text-sm text-center px-5'>
              Subscribe to receive new product releases, exclusive discount
              codes, invites to events, and a chance to win prizes!
            </p>
          </div>
        </div>
        {/* Subscribe End*/}
        <div>
          <p>&copy;2023 Marcia Korba</p>
        </div>
      </div>
    </div>
  )
}
