import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ uid, products }) => {
  const imageURL = `/assets/images/product-images/${products.image}`;
  return (
    <div className="max-w-contentContainer mx-auto">
      <div className="group h-full flex flex-col bg-offWhite rounded-2xl overflow-hidden shadow-sm border border-oliveGreen/10 hover:shadow-md transition duration-300">
        <Link href={`/products/${uid}`}>
          <div className="overflow-hidden">
            <Image
              src={imageURL}
              width={400}
              height={400}
              alt={products.plant_name}
              className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </Link>

        <div className="p-5 flex flex-col flex-1 gap-4">
          <h2 className="text-lg font-semibold text-slate text-center">
            {products.plant_name}
          </h2>

          <p className="text-sm text-greyGreen text-center line-clamp-2 min-h-[40px]">
            {products.description}
          </p>

          <div className="flex flex-col items-center gap-2">
            {!products.in_stock ? (
              <span className="text-sm font-semibold uppercase tracking-wide text-white bg-accentPink px-4 py-1.5 rounded-full shadow-sm">
                Out of Stock
              </span>
            ) : (
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold text-jungleGreen">
                  ${products.price}
                </p>

                <p className="text-sm text-greyGreen line-through">
                  ${products.oldPrice}
                </p>
              </div>
            )}
          </div>

          <div className="mt-auto">
            <Link
              href={`/products/${uid}`}
              className="inline-flex w-full justify-center"
            >
              <span className="w-full text-center bg-oliveGreen hover:bg-jungleGreen text-white font-semibold py-2.5 rounded-full transition duration-300">
                View Details
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
