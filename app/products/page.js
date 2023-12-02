import { getProducts } from '@/lib/firebase/getProducts'
import { ProductCard } from '@/components/ProductCard'

async function ProductsPage () {
  const payload = await getProducts()
  const keys = Object.keys(payload)
  const values = Object.values(payload)
  const entries = Object.entries(payload)
  const dataLoading = true

  return (
    <>
      <main className='p-3 md:p-4 lg:p-5 lgl:p-7 xl:p-8'>
        <h1 className='text-2xl lgl:text-4xl text-center text-jungleGreen font-bold pt-4 mb-10'>
          Plants
        </h1>
        <div className='sml:grid sml:grid-cols-2 sml:gap-5 mdl:grid-cols-3 max-w-contentContainer mx-auto w-contain'>
          {values.map(item => (
            <ProductCard uid={item.uid} products={item} />
          ))}
        </div>
      </main>
    </>
  )
}

export default ProductsPage
