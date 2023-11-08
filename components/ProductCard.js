import React from 'react'

export const ProductCard = () => {
  return (
    <div>ProductCard</div>
  )
}



// export const ProductCard = ({ product }) => {
//     return (
//       <div className="max-w-xs rounded overflow-hidden shadow-lg">
//         <img src={product.imageUrl} alt={product.name} className="w-full" />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{product.name}</div>
//           <p className="text-gray-700 text-base">Price: ${product.price}</p>
//         </div>
//         <div className="px-6 py-4">
//           <Link href={`/products/${product.id}`}>
//             <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//               View Details
//             </a>
//           </Link>
//         </div>
//       </div>
//     );
//   };
