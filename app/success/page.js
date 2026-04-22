import Image from "next/image";
import Link from "next/link";
import { hangingPlant } from "@/public/assets/images";

export default function Success({ children }) {
  const orderNumber = "PE-10482"; // placeholder order number
  return (
    <div className="max-w-contentContainer mx-auto px-6 py-28">
      <div className="flex flex-col items-center text-center gap-10">
        <Image
          alt="hanging plant"
          src={hangingPlant}
          width={340}
          className="opacity-95"
        />

        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate">
            Order confirmed
          </h1>

          <p className="text-greyGreen text-lg leading-relaxed">
            Thank you for your purchase. Your payment was successful and your
            order is now being processed.
          </p>

          <div className="bg-offWhite border border-oliveGreen/20 rounded-xl px-6 py-5 flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 text-sm text-greyGreen">
              <span>Order #:</span>
              <span className="font-semibold text-slate tracking-wide">
                {orderNumber}
              </span>
            </div>

            <p className="text-greyGreen text-sm">
              A confirmation email has been sent to
            </p>

            <p className="font-semibold text-slate">client@email.com</p>
          </div>

          <div className="w-16 h-[2px] bg-oliveGreen mx-auto"></div>

          <Link href="/products">
            <span className="inline-flex items-center justify-center bg-oliveGreen hover:bg-jungleGreen text-white font-semibold px-8 py-3 rounded-full transition duration-300">
              Continue Shopping
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
