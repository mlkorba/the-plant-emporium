import React from 'react'
import Image from 'next/image'
import { succulentCorner } from '@/public/assets/images'

export const SectionFour = () => {
  return (
    <div className="relative">
  <Image src={succulentCorner} className="w-full" />
  <div className="absolute top-10 left-5 p-4 text-jungleGreen">
    <h1 className="text-2xl text-center mb-10">Thank you for bringing a bit of greenery into your life with The Plant Emporium!</h1>
    <p className='w-1/2'>Your choice to support local succulents means a lot to us and to our community. We're here to make your space a little greener, a little happier. Can't wait to see you again and help you find the perfect succulent companion. Until then, may your days be filled with the beauty of nature. Happy planting!</p>
  </div>
</div>

  )
}
