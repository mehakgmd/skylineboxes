// // 'use client'

// // import { FC } from 'react'
// // import { oneProductType } from './utils/ProductArrayAndTypes'

// // const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
// //   const image = singleProductData.image?.[0]

// //   return (
// //     <div style={{ border: '1px solid #ddd', padding: '12px', minWidth: '200px' }}>
// //       <h3>{singleProductData.title || 'No title'}</h3>
// //       <p>{singleProductData.shortDescription}</p>
// //       {image?.asset?.url && (
// //         <img
// //           src={image.asset.url}
// //           alt={image.alt || 'Product image'}
// //           style={{ width: '100%', height: 'auto' }}
// //         />
// //       )}
// //     </div>
// //   )
// // }

// // export default Card



// 'use client'

// import { FC } from 'react'
// import { oneProductType } from './utils/ProductArrayAndTypes'

// const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
//   const image = singleProductData.image?.[0]

//   return (
//     <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
//       {/* Image Section */}
//       <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
//         {image?.asset?.url ? (
//           <img
//             src={image.asset.url}
//             alt={image.alt || singleProductData.title || 'Product image'}
//             className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center">
//             <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           </div>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
//         <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
//           {singleProductData.title || 'No title'}
//         </h3>
        
//         <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-1">
//           {singleProductData.shortDescription || 'Showcase your products with remarkable and one-of-a-kind custom...'}
//         </p>

//         {/* Learn More Link */}
        
//           <a href={'#'}
//           className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm sm:text-base hover:gap-3 transition-all duration-300 group/link mt-auto"
//         >
//           Learn More
//           <svg 
//             className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform duration-300" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Card

// 'use client'

// import { FC } from 'react'
// import { oneProductType } from './utils/ProductArrayAndTypes'

// const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
//   const image = singleProductData.image?.[0]

//   return (
//     <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
//       <div className="flex flex-row items-stretch h-full">
//         {/* Image Section - Left Side */}
//         <div className="relative w-2/5 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden flex-shrink-0">
//           {image?.asset?.url ? (
//             <img
//               src={image.asset.url}
//               alt={image.alt || singleProductData.title || 'Product image'}
//               className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center">
//               <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </div>
//           )}
//         </div>

//         {/* Content Section - Right Side */}
//         <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-7 space-y-2 sm:space-y-3 justify-center">
//           <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
//             {singleProductData.title || 'No title'}
//           </h3>
          
//           <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-2">
//             {singleProductData.shortDescription || 'Showcase your products with remarkable and one-of-a-kind custom...'}
//           </p>

//           {/* Learn More Link */}
          
//            <a href={'#'}
//             className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs sm:text-sm lg:text-base hover:gap-3 transition-all duration-300 group/link pt-1"
//           >
//             Learn More
//             <svg 
//               className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card


"use client";

import { FC } from 'react'
import { oneProductType } from './utils/ProductArrayAndTypes'

const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
  const image = singleProductData.image?.[0]

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border border-gray-100">
      <div className="flex flex-row items-stretch h-full min-h-[200px]">
        {/* Image Section - Left Side */}
        <div className="relative w-[45%] bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden flex-shrink-0">
          {image?.asset?.url ? (
            <img
              src={image.asset.url}
              alt={image.alt || singleProductData.title || 'Product image'}
              className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Content Section - Right Side */}
        <div className="flex flex-col flex-1 p-5 lg:p-6 space-y-2.5 justify-center">
          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight">
            {singleProductData.title || 'No title'}
          </h3>
          
          <p className="text-gray-500 text-xs lg:text-sm leading-relaxed line-clamp-2">
            {singleProductData.shortDescription || 'Showcase your products with remarkable and one-of-a-kind custom...'}
          </p>

          {/* Learn More Link */}
          
           <a href={ '#'}
            className="inline-flex items-center gap-1.5 text-gray-800 font-semibold text-sm lg:text-base hover:gap-2.5 transition-all duration-300 group/link pt-1"
          >
            Learn More
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card