// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaPlay, FaCube} from "react-icons/fa";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#e3dacb] min-h-screen flex items-center justify-center px-6 py-8 overflow-hidden">
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-7 items-center">
//         {/* LEFT SIDE */}
//         <motion.div
//           className="space-y-10 mx-8"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="text-5xl md:text-6xl font-extrabold text-blackPrimary leading-tight">
//             Custom boxes  made easy <br/> <span className="text-[#2D6A73]">for retail</span>
//           </h1>
//           <p className="text-gray-600 max-w-lg">
//             Supercharge your brand through the power of custom boxes and custom packaging that's big on wow-factor. With low minimums, free design expertise, super fast delivery and unlimited customization, our packaging specialists will help you create eye-catching custom shipping boxes that stand out from the crowd.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 items-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#2D6A73] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#25595E] transition"
//             >
//               <FaCube /> Learn More
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-2 text-[#1F4A4D] font-semibold"
//             >
//               <div className="bg-[#1F4A4D] text-white p-3 rounded-full">
//                 <FaPlay size={14} />
//               </div>
//               Play Video
//             </motion.button>
//           </div>

//           {/* <div className="flex gap-4 items-center mt-10">
//             <div className="flex gap-3">
//               <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
//                 <FaArrowUp />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
//                 <FaUtensils />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-[#2D6A73] flex items-center justify-center text-white">
//                 <FaArrowUp />
//               </button>
//             </div>
//           </div> */}
//         </motion.div>

//         {/* RIGHT SIDE (BOTTLES) */}
//         <div className="relative hidden md:flex justify-center">
//           {/* <div className="absolute -bottom-0 bg-[#2D6A73] shadow-lg shadow-gray-400 w-2/3 h-1/3 rounded-[50%] opacity-80"></div> */}

//           {/* Bottle 1 */}
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           >
//             <Image
//               src="/Gemini_Generated_Image_49erx249erx249er-removebg-preview.png"
//               alt="Yogurt bottle red"
//               width={500}
//               height={500}
//               className="relative z-10 bottom-8 "
//             />
//           </motion.div>

//           {/* Bottle 2 */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
//           >
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




// // "use client";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { FaPlay, FaArrowUp, FaCube, FaUtensils } from "react-icons/fa";

// // export default function HeroSection() {
// //   return (
// //     <section className="bg-[#FFFF] min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden">
// // <div className="max-w-[1400px] w-full grid md:grid-cols-2 gap-10 items-center">

// //         {/* LEFT SIDE */}
// //         <motion.div
// //           className="space-y-5 pl-8"
// //           initial={{ opacity: 0, x: -80 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         >
// //           {/* FIXED HEADING */}
// //          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F4A4D] leading-tight max-w-2xl">
// //   Custom boxes made easy <br/> <span className="text-[#2D6A73]"> for retail</span>
// // </h1>


// //           <p className="text-gray-600 max-w-2xl">
// //             Supercharge your brand through the power of custom boxes and custom
// //             packaging that's big on wow-factor. With low minimums, free design
// //             expertise, super fast delivery and unlimited customization, our
// //             packaging specialists will help you create eye-catching custom
// //             shipping boxes that stand out from the crowd.
// //           </p>

// //           {/* BUTTONS */}
// //           <div className="flex gap-4 items-center">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="bg-[#2D6A73] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#25595E] transition"
// //             >
// //               <FaCube /> Learn More
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               className="flex items-center gap-2 text-[#1F4A4D] font-semibold"
// //             >
// //               <div className="bg-[#1F4A4D] text-white p-3 rounded-full">
// //                 <FaPlay size={14} />
// //               </div>
// //               Play Video
// //             </motion.button>
// //           </div>

// //           {/* ICONS */}
// //           <div className="flex gap-4 items-center mt-10">
// //             <div className="flex gap-3">
// //               <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
// //                 <FaArrowUp />
// //               </button>
// //               <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
// //                 <FaUtensils />
// //               </button>
// //               <button className="w-10 h-10 rounded-full bg-[#2D6A73] flex items-center justify-center text-white">
// //                 <FaArrowUp />
// //               </button>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT SIDE (IMAGE) */}
// //         <div className="relative flex justify-center -mt-16">
// //           <div className="absolute -bottom-5 bg-[#2D6A73] shadow-lg shadow-gray-400 w-2/3 h-1/3 rounded-[50%] opacity-80"></div>

// //           <motion.div
// //             animate={{ y: [0, -10, 0] }}
// //             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
// //           >
// //             <Image 
// //               src="/hero-2.png"
// //               alt="Yogurt bottle red"
// //               width={450}
// //               height={450}
// //               className="relative z-10"
// //             />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


"use client";
import React from 'react';
import { MdStarPurple500 } from "react-icons/md";
import { TbMessageCircleHeart } from "react-icons/tb";


export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#ece9e1' }}>
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-3xl lg:text-6xl xl:text-7xl font-semibold text-gray-800 leading-tight">
              Custom Boxes That Brand Your Business
            </h1>
            
            {/* Description */}
            <p className="text-md lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Make your business a brand with high-quality, fully personalized boxes. 
              Get an instant quote, free design support, and no minimums—the complete 
              custom packaging box solution at wholesale prices!
            </p>
            
            {/* CTA Button */}
            <button className="bg-[#e0c112] hover:bg-[#d66d2b] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Instant Quote
            </button>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              {/* Customer Avatars */}
              <div className="flex -space-x-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-white shadow-md flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-md flex items-center justify-center text-white font-bold">
                  RK
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">4.9</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <MdStarPurple500 key={i} className="w-5 h-5 fill-[#e67e3c] text-[#e67e3c]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Based on <span className="underline font-semibold">110+ Reviews</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image - Naturally Placed */}
          <div className="hidden lg:flex items-center justify-center lg:justify-center mr-24">
            {/* Image positioned to look like it's sitting on the surface */}
            <img 
              src="/hero-Photoroom.png" 
              alt="Custom packaging boxes collection" 
              className=" w-full h-auto object-contain scale-110 lg:scale-150"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-[#e0c112] hover:bg-[#d66d2b] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50">
        <TbMessageCircleHeart className="w-6 h-6" />
      </button>
    </div>
  );
}