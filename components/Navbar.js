import Image from "next/image";
import React from "react";
import { logo, plantCareIcon } from "@/public/assets/images";

export const Navbar = () => {
  return (
    <div className="w-full bg-oliveGreen text-white">
      <div className="max-w-container mx-auto h-20 px-4 flex items-center gap-2">
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
          <div className="flex">
            <Image src={plantCareIcon} className="w-6" />
          </div>
          <p>Plant</p>
        </div>
        {/* Department End */}
        {/* Services Start */}
        <div className="navBarHover">
          <div className="flex">
            <Image src={plantCareIcon} className="w-6" />
          </div>
          <p>Plant</p>
        </div>
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
