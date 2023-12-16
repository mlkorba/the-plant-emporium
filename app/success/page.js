import Image from 'next/image'
import Link from 'next/link'
import { sadPlant } from '@/public/assets/images'

export default function Success ({ children }) {
  return (
    <div className='max-w-contentContainer  mx-auto items-center p-20 py-40'>
      <div className='flex items-center justify-center gap-10'>
        <div>
          <Image src={sadPlant} className='' width={350} />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl mb-5 bg-oliveGreen rounded-lg w-fit mx-auto px-5 py-2 text-red-50 font-medium'>
            {' '}
            Transaction Successful! 😻
          </h1>
          <p className='text-xl mb-5'>
            We have sent an confirmation email to{' '}
            <span className='font-medium'>client@email.com</span>
          </p>
          <Link
            href='/'
            className='text-lg mb-5 font-medium text-jungleGreen underline'
          >
            Click here to return
          </Link>
        </div>
      </div>
    </div>
  )
}
