import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/public/assets/images'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='text-white bg-oliveGreen pt-5'>
      <div className='max-w-contentContainer text-center mx-auto grid grid-cols-1 md:grid-cols-3'>
        {/* Logo Start */}
        <div className='flex flex-col items-center justify-center gap-2'>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              className='w-[100px] md:hover:scale-125 transition duration-500 cursor-pointer'
            />
          </Link>
          <div className='text-3xl md:text-xl text-center text-white mb-4'>
            <ul className='flex justify-center gap-6 md:gap-2'>
              <li className='navBarHover2'>
                <FaFacebookF />
              </li>
              <li className='navBarHover2'>
                <FaTwitter />
              </li>
              <li className='navBarHover2'>
                <FaInstagram />
              </li>
              <li className='navBarHover2'>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
        {/* Logo End */}
        {/* About Start */}
        <div className='mb-4 text-center px-4 md:flex md:flex-col md:items-center md:justify-center'>
          <h2 className='text-lg mdl:text-2xl navBarHover2 text-white'>
            About Us
          </h2>
          <ul className='text-base'>
            <li className='navBarHover2'>FAQs</li>
            <li className='navBarHover2'>Shipping Policy</li>
            <li className='navBarHover2'>Refund Policy</li>
          </ul>
        </div>
        {/* About End */}
        {/* Location Start */}
        <div className='m-4 py-4 md:m-0 rounded-full text-center bg-jungleGreen md:flex md:flex-col md:items-center md:justify-center md:gap-2 md:bg-oliveGreen'>
          <h2 className='text-lg md:text-2xl font-semibold text-white'>
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
        <div className='bg-darkPurple py-5 md:w-screen '>
          <div className='text-sm flex flex-col gap-4 '>
            <h1 className='text-lg font-semibold md:text-2xl '>
              Sign up for our newsletter!
            </h1>
            <input
              className='bg-white mx-auto w-3/4 md:w-1/2 rounded-full sml:rounded-l-full px-4 py-2'
              placeholder='E-mail address'
              type='text'
            />
            <button className='mx-auto mb-4 px-4 h-9 w-3/4 md:w-1/2 rounded-full text-white bg-lavender navBarHover3 sml:rounded-r-full'>
              Subscribe
            </button>
          </div>
          <div>
            <p className='text-sm text-center px-5 md:px-8'>
              Subscribe to receive new product releases, exclusive discount
              codes, invites to events, and a chance to win prizes!
            </p>
          </div>
        </div>
        {/* Subscribe End*/}
      </div>
      <div className='p-5 text-center'>
        <p>&copy;2023 Marcia Korba</p>
      </div>
    </footer>
  )
}
