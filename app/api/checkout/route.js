import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

async function POST(request) {
  console.clear();

  const body = await request.formData();
  const formData = new FormData();
  const price = body.get("price");
  const quantity = 1;
  const headersList = await headers();

  //Create Checkout Sessions from body params.
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: "price_1ONmzCBHzX9Fd9GlzqfEIku5",
        quantity,
      },
    ],
    success_url: `${headersList.get("origin")}/success`,
    cancel_url: `${headersList.get("origin")}/canceled`,
  });

  // redirect(checkoutSession.url)
  return Response.redirect(checkoutSession.url);
}

export { POST };
