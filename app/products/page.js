import Link from 'next/link'
import Image from 'next/image'
import { getProducts } from '@/lib/firebase/getProducts'
import { ProductCard } from '@/components/ProductCard'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

async function ProductsPage () {
  const payload = await getProducts()
  const keys = Object.keys(payload)
  const values = Object.values(payload)
  const entries = Object.entries(payload)
  const dataLoading = true

  return (
    <>
      <main className='py-10'>
        <div className='grid grid-cols-4 gap-6 max-w-[1200px] w-contain mx-auto'>
          {values.map(item => (
            <ProductCard key={item.uid} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductsPage
