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
      <main className='p-10'>
        <div className='grid grid-cols-3 max-w-screen w-contain'>
          {values.map(item => (
            <ProductCard key={item.uid} products={item} />
          ))}
        </div>
      </main>
    </>
  )
}

export default ProductsPage
