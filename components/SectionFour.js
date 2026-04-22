import React from 'react'
import { succulentCorner } from '@/public/assets/images'

export const SectionFour = () => {
  return (
    <div
      className='relative flex items-center text-slate'
      style={{
        backgroundImage: `url(${succulentCorner.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0 bg-offWhite/80'></div>

      <div className='relative z-10 max-w-contentContainer mx-auto px-6 py-20 md:py-28'>

        <div className='max-w-2xl'>

          <h1 className='text-2xl sml:text-3xl mdl:text-4xl font-bold mb-4 text-slate'>
            Lorem ipsum
          </h1>

          <div className='w-20 h-[2px] bg-oliveGreen mb-6'></div>

          <h2 className='text-base sml:text-lg mdl:text-xl lgl:text-2xl text-greyGreen leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h2>

        </div>
      </div>
    </div>
  )
}
