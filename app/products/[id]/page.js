import { getProducts } from '@/lib/firebase/getProducts'
import { ProductDetails } from '@/components/ProductDetails'

async function getProduct (uid) {
  const payload = await getProducts()
  const products = Object.values(payload)
  const singleItem = products.find(item => item.uid === uid)
  return singleItem
}

async function ProductPage ({ params }) {
  const id = params.id
  const productData = await getProduct(id)

  return (
    <>
      <main className='min-h-screen py-24'>
        <ProductDetails product={productData} />
      </main>
    </>
  )
}

export default ProductPage
