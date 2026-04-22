import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BuyNowButton } from "./BuyNowButton.js";

export function ProductDetails({ product }) {
  const { image } = product;
  const imageURL = `/assets/images/product-images/${image}`;
  return (
    <div className="max-w-contentContainer mx-auto px-6 py-10">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-oliveGreen font-medium hover:text-jungleGreen transition mb-8"
      >
        <FaArrowLeftLong />
        Back
      </Link>

      <div className="lgl:flex lgl:items-start lgl:gap-14">
        <div className="lgl:w-1/2 flex justify-center">
          <div className="bg-offWhite rounded-2xl p-4 shadow-sm border border-oliveGreen/10">
            <Image
              src={imageURL}
              alt={product.plant_name}
              width={500}
              height={500}
              className="rounded-xl w-full max-w-[500px] object-cover"
            />
          </div>
        </div>

        <div className="lgl:w-1/2 flex flex-col gap-7">
          <div className="text-center lgl:text-left">
            <h1 className="text-3xl font-semibold text-slate mb-2">
              {product.plant_name}
            </h1>

            {!product.in_stock ? (
              <span className="inline-flex items-center text-sm font-semibold text-greyGreen bg-greyGreen/10 px-4 py-1 rounded-full">
                Currently Unavailable
              </span>
            ) : (
              <div className="flex items-baseline justify-center lgl:justify-start gap-4">
                <p className="text-3xl font-semibold text-jungleGreen">
                  ${product.price}
                </p>

                <p className="text-base text-greyGreen line-through">
                  ${product.oldPrice}
                </p>

                <span className="text-xs font-semibold uppercase tracking-wide text-oliveGreen bg-oliveGreen/10 border border-oliveGreen/20 px-3 py-1 rounded-full">
                  Seasonal Offer
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-oliveGreen/20 pt-5">
            <h2 className="text-lg font-semibold text-slate mb-3">
              Description
            </h2>

            <p className="text-greyGreen text-base leading-relaxed mb-5">
              {product.description}
            </p>

            <div className="space-y-2 text-greyGreen text-base">
              <p>
                <span className="text-slate font-semibold">Plant Family: </span>
                {product.plant_family}
              </p>

              <p>
                <span className="text-slate font-semibold">
                  Scientific Name:{" "}
                </span>
                {product.plant_scientific_name}
              </p>
            </div>
          </div>

          <div className="bg-offWhite rounded-2xl p-6 border border-oliveGreen/10 shadow-sm">
            <h2 className="text-lg font-semibold text-slate mb-4">
              Plant Information
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-greyGreen text-sm">
              <li>
                <span className="text-slate font-semibold">Height:</span>{" "}
                {product.height} cm
              </li>
              <li>
                <span className="text-slate font-semibold">Width:</span>{" "}
                {product.width} cm
              </li>
              <li>
                <span className="text-slate font-semibold">Pot Size:</span>{" "}
                {product.pot_size}
              </li>
              <li>
                <span className="text-slate font-semibold">Light:</span>{" "}
                {product.light_requirement}
              </li>
              <li>
                <span className="text-slate font-semibold">Watering:</span>{" "}
                {product.watering_frequency}
              </li>
            </ul>
          </div>

          <div className="pt-2 text-center lgl:text-left">
            {product.in_stock ? (
              <BuyNowButton />
            ) : (
              <button
                disabled
                className="w-full lgl:w-auto bg-greyGreen/30 text-greyGreen font-semibold py-3 px-6 rounded-full cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
