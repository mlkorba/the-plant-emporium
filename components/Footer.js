import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/public/assets/images'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaBuilding
} from 'react-icons/fa'

export const FooterV2 = () => {
  return (
    <footer className='text-white bg-oliveGreen p-20'>
      <div className='flex justify-evenly gap-32 mb-10'>
        <div>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='w-[150px] md:hover:scale-125 transition duration-500 cursor-pointer'
            />
          </Link>
        </div>

        <div>
          <p className='font-semibold mb-3 px-2'>Company</p>
          <ul className=' flex flex-col gap-3'>
            <li className='footerHover'>About Us</li>
            <li className='footerHover'>Careers</li>
            <li className='footerHover'>Blog</li>
            <li className='footerHover'>Contact Us</li>
          </ul>
        </div>

        <div>
          <p className='font-bold mb-3 px-2'>Support</p>
          <ul className=' flex flex-col gap-3'>
            <li className='footerHover'>FAQs</li>
            <li className='footerHover'>Refund Policy</li>
            <li className='footerHover'>Shipping Policy</li>
            <li className='footerHover'>Privacy Policy</li>
            <li className='footerHover'>Returns & Exchanges</li>
          </ul>
        </div>
        <div>
          <p className='font-semibold mb-3'>Where To Find Us</p>
          <p>The Plant Emporium</p>
          <p>1234 Garden Street</p>
          <p>Botanicalville, Natureland</p>
          <p>A1A 1A1</p>
        </div>

        <div>
          <p className='font-semibold mb-3 px-2'>Connect With Us</p>
          <ul className='flex justify-center gap-3'>
            <li className='navBarHover2 md:hover:scale-125 transition duration-500 cursor-pointer'>
              <FaFacebookF />
            </li>
            <li className='navBarHover2 md:hover:scale-125 transition duration-500 cursor-pointer'>
              <FaTwitter />
            </li>
            <li className='navBarHover2 md:hover:scale-125 transition duration-500 cursor-pointer'>
              <FaInstagram />
            </li>
            <li className='navBarHover2 md:hover:scale-125 transition duration-500 cursor-pointer'>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>

      <hr className='my-3'></hr>
      <div className='flex gap-3 text-sm'>
        <p className='footerHover'>Privacy Policy</p>
        <p>|</p>
        <p className='footerHover'>Terms & Conditions</p>
      </div>
    </footer>
  )
}
