import Link from 'next/link'
import Image from 'next/image'
import { getProducts } from '@/lib/firebase/getProducts'
import {PageHeader } from '@/components/PageHeader'

// Link element to create a dynamic route.
// function Card ({ uid, fullname, position, profileImage }) {
//   return (
//     <aside>
//       <h2>{fullname}</h2>
//       <Image src={`/${profileImage}`} width={200} height={200} alt={fullname} />
//       <p>{position}</p>
//       <p>{uid}</p>
//       <Link className='text-blue-600 font-semibold' href={`/employee/${uid}`}>
//         {fullname} using id: {uid}
//       </Link>
//     </aside>
//   )
// }

export const ProductCard = ({ uid, plant_name, image, price   }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img src={image} alt={plant_name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{plant_name}</div>
          <p className="text-gray-700 text-base">Price: ${price}</p>
        </div>
        <div className="px-6 py-4">
          <Link href={`/products/${uid}`}>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View Details
            </span>
          </Link>
        </div>
      </div>
    );
  };


async function ProductsPage () {
  const payload = await getProducts()
  const keys = Object.keys(payload)
  const values = Object.values(payload)
  const entries = Object.entries(payload)
  const dataLoading = true

  //  conditional rendering data loading
  // if(dataLoading) {
  //   return  null
  // }

  // if(!dataLoading) {
  //   return <p>You have the data</p>
  // }

  return (
    <>
      <PageHeader
        title='All Products Display'
        tagline='example of displaying all items in data'
      />
      <main className=' min-h-screen py-24'>
        {values.map(item => (
          <ProductCard key={item.uid} {...item} />
        ))}
      </main>
    </>
  )
}

export default ProductsPage
