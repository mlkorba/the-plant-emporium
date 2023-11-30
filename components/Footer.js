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
    <footer className='text-white bg-oliveGreen pt-10 pb-5'>
      <div className='max-w-contentContainer text-center mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
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
        <div className='text-center px-4 md:flex md:flex-col md:items-center md:justify-center'>
          <ul className='text-base'>
            <li className='navBarHover2 mb-2'>About Us</li>
            <li className='navBarHover2 mb-2'>FAQs</li>
            <li className='navBarHover2 mb-2'>Shipping Policy</li>
            <li className='navBarHover2 mb-2'>Refund Policy</li>
          </ul>
        </div>
        {/* About End */}
        {/* Location Start */}
        <div className='m-4 py-4 md:m-0 rounded-xl text-center bg-jungleGreen md:flex md:flex-col lg:text-left md:justify-center md:gap-2 md:bg-oliveGreen'>
          <h2 className='text-lg font-semibold lg:text-left text-white'>
            Location
          </h2>
          <div className='text-base mdl:flex-col mdl:gap-2 lg:text-left'>
            <p>1234 Garden Street</p>
            <p>Botanicalville, Natureland</p>
            <p>A1A 1A1</p>
            <p>Canada</p>
          </div>
        </div>
        {/* Location End */}

        {/* Subscribe Start */}
        <div className=' py-5 md:w-screen lg:w-auto'>
          <div className='text-sm flex flex-col gap-4 '>
            <h1 className='text-lg font-semibold md:text-2xl '>
              Sign up for our newsletter!
            </h1>
            <input
              className='bg-white mx-auto w-3/4 md:w-1/2 rounded-full sml:rounded-l-full px-4 py-2 lg:w-3/4'
              placeholder='E-mail address'
              type='text'
            />
            <button className='mx-auto mb-4 px-4 h-9 w-3/4 md:w-1/2 lg:w-3/4 font-semibold rounded-full text-white bg-jungleGreen navBarHover3 sml:rounded-r-full'>
              Subscribe
            </button>
          </div>
          <div>
            <p className='text-md text-center px-5 md:px-8 md:w-3/4 md:mx-auto lg:w-full'>
              Subscribe to receive new product releases, exclusive discount
              codes, invites to events, and a chance to win prizes!
            </p>
          </div>
        </div>
        {/* Subscribe End*/}
      </div>
      <div className='text-sm p-5 text-center'>
        <p className='mb-5'>
          <span className='font-semibold'>Disclaimer:</span> This website is a
          personal project created for a college assignment. Its contents and
          features are designed for experimentation and learning purposes only.
          The information provided here is not intended for commercial use, and
          any resemblance to real entities is purely coincidental. The creator
          of this website is not responsible for any consequences arising from
          the use of this site.
        </p>
        <p>&copy;2023 Marcia Korba</p>
      </div>
    </footer>
  )
}
