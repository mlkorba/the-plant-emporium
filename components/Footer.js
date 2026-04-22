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

export const Footer = () => {
  return (
    <footer className='bg-jungleGreen text-offWhite'>

      <div className='max-w-contentContainer mx-auto px-6 py-16'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12'>

          <div className='flex flex-col gap-4'>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                className='w-[140px] hover:scale-105 transition duration-300 cursor-pointer'
              />
            </Link>
            <p className='text-sm text-offWhite/80 leading-relaxed'>
              Bringing nature closer to your home with carefully curated succulents and plants.
            </p>
          </div>

          <div>
            <p className='font-semibold mb-4 text-offWhite'>Company</p>
            <ul className='flex flex-col gap-2 text-sm text-offWhite/80'>
              <li className='hover:text-oliveGreen transition cursor-pointer'>About Us</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Careers</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Blog</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Contact Us</li>
            </ul>
          </div>

          <div>
            <p className='font-semibold mb-4 text-offWhite'>Support</p>
            <ul className='flex flex-col gap-2 text-sm text-offWhite/80'>
              <li className='hover:text-oliveGreen transition cursor-pointer'>FAQs</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Refund Policy</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Shipping Policy</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Privacy Policy</li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>Returns & Exchanges</li>
            </ul>
          </div>

          <div>
            <p className='font-semibold mb-4 text-offWhite'>Visit Us</p>
            <div className='text-sm text-offWhite/80 leading-relaxed'>
              <p>The Plant Emporium</p>
              <p>1234 Garden Street</p>
              <p>Botanicalville, Natureland</p>
              <p>A1A 1A1</p>
            </div>
          </div>

          <div>
            <p className='font-semibold mb-4 text-offWhite'>Connect</p>
            <ul className='flex gap-4 text-lg'>
              <li className='hover:text-oliveGreen transition cursor-pointer'>
                <FaFacebookF />
              </li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>
                <FaTwitter />
              </li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>
                <FaInstagram />
              </li>
              <li className='hover:text-oliveGreen transition cursor-pointer'>
                <FaYoutube />
              </li>
            </ul>
          </div>

        </div>

        <div className='border-t border-offWhite/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-offWhite/70'>

          <p>© {new Date().getFullYear()} Marcia Korba. All rights reserved.</p>

          <div className='flex gap-4'>
            <span className='hover:text-oliveGreen cursor-pointer transition'>Privacy Policy</span>
            <span className='hover:text-oliveGreen'>|</span>
            <span className='hover:text-oliveGreen cursor-pointer transition'>Terms & Conditions</span>
          </div>

        </div>

      </div>

    </footer>
  )
}
