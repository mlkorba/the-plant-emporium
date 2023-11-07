import Image from 'next/image'
import React from 'react'
import { logo } from '@/public/assets/images'
import { IoIosSearch } from 'react-icons/io'
import { BsSuitHeartFill, BsFillPersonFill } from 'react-icons/bs'
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className="w-full bg-oliveGreen text-white">
      <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2 justify-between">
        {/* Logo Start */}
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-24 hover:scale-125 transition duration-500 cursor-pointer"
          />
        </div>
        {/* Logo End */}
        {/* Department Start */}
        <div className="navBarHover">
          <div className="flex items-center justify-center">
            <Image src={shopIcon} className="w-6" />
          </div>
          <h2 className="text-base font-semibold">Shop</h2>
        </div>
        {/* Department End */}
        {/* Services Start */}
        <div className="navBarHover">
          <div className="flex">
            <Image src={plantCareIcon} className="w-6" />
          </div>
          <h2 className="text-base font-semibold ">Plant Care</h2>
        </div>
        {/* Services End */}
        {/* Search Bar Start */}
        <div className="h-10 flex flex-1 relative">
          <input
            type="text"
            className="h-full w-full rounded-full px-4 text-jungleGreen text-base outline-none border-[1px] border-transparent focus-visible:border-jungleGreen duration-200"
            placeholder="Search"
          />
          <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 text-jungleGreen text-xl hover:scale-125 transition duration-500 cursor-pointer">
            <IoIosSearch />
          </span>
        </div>
        {/* Search Bar End */}
        {/* Cart Start */}
        <div className="navBarHover">
          <AiOutlineHeart />
          <div className="flex-col">
            <h2 className="text-base font-semibold">My Favourites</h2>
          </div>
        </div>
        {/* Cart End */}
        {/* Accounts Start*/}
        <div className="navBarHover">
          <FaRegUser />
          <div className="flex-col">
            <p className="text-xs">Sign In</p>
            <h2 className="text-base font-semibold -mt-1">Account</h2>
          </div>
        </div>
        {/* Accounts End*/}
        {/* Cart Start*/}
        <div className="flex flex-col justify-center items-center gap-2 h-12 px-4 rounded-full bg-transparent hover:bg-jungleGreen duration-300 relative">
          <BsCart2 className="text-2xl" />
          <p className="text-[10px] -mt-2">$0.00</p>
          <span className="absolute w-4 h-4 bg-red-600 text-white top-0 right-4 rounded-full flex items-center justify-center text-xs">
            0
          </span>
        </div>
        {/* Cart End*/}
      </div>
    </div>
  );
};
