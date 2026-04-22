import React from 'react'

export const SectionOne = () => {
  return (
    <section className='max-w-contentConatiner mx-auto px-4 md:px-6 mb-12'>
      <div className='bg-offWhite rounded-2xl shadow-sm px-6 py-14 flex flex-col items-center text-center gap-6'>

        <p className='text-oliveGreen text-xs md:text-sm uppercase tracking-widest'>
          Botanical Collection
        </p>

        <h1 className='text-lg sml:text-xl md:text-2xl lg:text-3xl px-6 py-3 bg-jungleGreen font-semibold rounded-full text-white shadow-md'>
          Discover Nature's Bounty
        </h1>

        <span className='w-24 h-[2px] bg-oliveGreen'></span>

        <p className='lgl:w-2/3 text-greyGreen text-base md:text-lg lgl:text-xl leading-relaxed'>
          Welcome to our botanical haven, where we invite you to Discover
          Nature's Bounty. Immerse yourself in the lush world of plants and
          greenery as we celebrate the beauty and vitality of the natural
          kingdom. Our plant shop is more than just a place to find your
          favorite greens—it's an exploration of the wonders of nature. From
          expertly curated collections to eco-conscious practices, we are
          dedicated to providing a verdant experience that goes beyond the
          ordinary. Join us on this journey of discovery, and let the abundance
          of nature inspire and enrich your life.
        </p>

        <span className='w-24 h-[2px] bg-oliveGreen'></span>

      </div>
    </section>
  )
}
