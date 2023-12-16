'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'

async function createCheckoutSession (checkoutFormData) {
  const formData = new FormData()
  const id = checkoutFormData.get('id')
  const price = checkoutFormData.get('price')

  //Create Checkout Sessions from body params.
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: 'Test First',
        quantity: 1
      }
    ],
    success_url: `${headers().get('origin')}/success`,
    cancel_url: `${headers().get('origin')}/canceled`
  })

  // redirect(checkoutSession.url)
  redirect(checkoutSession.url)
}

export { createCheckoutSession }
