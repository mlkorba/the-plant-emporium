import Image from 'next/image'
import Link from 'next/link'
import { sadPlant } from '@/public/assets/images'

export default function Cancel ({ children }) {
  return (
    <div className='max-w-contentContainer  mx-auto items-center p-20 py-40'>
      <div className='flex items-center justify-center gap-10'>
        <div>
          <Image src={sadPlant} className='' width={350} />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl mb-5 bg-rose-500 rounded-lg w-fit mx-auto px-5 py-2 text-red-50 font-medium'>
            {' '}
            Transaction Canceled
          </h1>
          <p className='text-xl mb-5'>
            Payment was declined by your bank{' '}
            <span className='text-3xl'>😭</span>
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
