import Image from "next/image";
import React from "react";
import { logo } from "@/public/assets/images";

export const Navbar = () => {
  return (
    <div className="w-full bg-oliveGreen text-white">
      <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
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
          <div className="w-4 grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
          </div>
          <p>Plant Care</p>
        </div>
        {/* Department End */}
        {/* Services Start */}
        {/* Services End */}
        {/* Search Bar Start */}
        {/* Search Bar End */}
        {/* MyItems Start */}
        {/* MyItems End */}
        {/* Accounts Start*/}
        {/* Accounts End*/}
        {/* Cart Start*/}
        {/* Cart End*/}
        {/* ******* */}
        {/* Navbar Bottomr Start*/}
        {/* Navbar Bottomr End*/}
      </div>
    </div>
  );
};
