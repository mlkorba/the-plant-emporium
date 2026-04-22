import Image from "next/image";
import Link from "next/link";
import { sadPlant } from "@/public/assets/images";

export default function Cancel({ children }) {
  return (
    <div className="max-w-contentContainer mx-auto px-6 py-28">
      <div className="flex flex-col items-center text-center gap-10">
        <Image
          alt="sad plant"
          src={sadPlant}
          width={320}
          className="opacity-90"
        />

        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate">
            Payment canceled
          </h1>

          <p className="text-greyGreen text-lg leading-relaxed">
            Your checkout was canceled before any payment was processed. You
            have not been charged.
          </p>

          <div className="w-16 h-[2px] bg-oliveGreen mx-auto"></div>

          <Link href="/products">
            <span className="inline-flex items-center justify-center bg-oliveGreen hover:bg-jungleGreen text-white font-semibold px-8 py-3 rounded-full transition duration-300">
              Back to Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
