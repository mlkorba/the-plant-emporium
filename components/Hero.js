import React from "react";
import Image from "next/image";
import Link from "next/link";
import { landingBg } from "@/public/assets/images";

export const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center text-offWhite"
      style={{
        backgroundImage: `url(${landingBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-jungleGreen/60"></div>

      <div className="relative z-10 max-w-contentContainer mx-auto px-6 md:px-8 text-left">
        <div className="max-w-2xl">
          <p className="text-offWhite uppercase tracking-widest text-sm mb-4">
            Succulent Collection
          </p>

          <h1 className="text-4xl lgl:text-5xl font-bold mb-5 leading-tight">
            Discover the Beauty of Succulents
          </h1>

          <div className="w-24 h-[2px] bg-oliveGreen mb-6"></div>

          <p className="text-offWhite/80 text-lg lgl:text-xl mb-8 leading-relaxed">
            Transform your space with our handpicked collection of unique and
            low-maintenance succulent plants designed to bring calm, nature, and
            simplicity into your home.
          </p>

          <Link
            href="/products"
            className="inline-block bg-offWhite text-jungleGreen font-semibold py-3 px-8 rounded-full hover:bg-oliveGreen hover:text-offWhite transition duration-300 shadow-md"
          >
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};
