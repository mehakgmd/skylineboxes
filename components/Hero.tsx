"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay, FaCube} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-[#FFFF] min-h-screen flex items-center justify-center px-6 py-8 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-7 items-center">
        {/* LEFT SIDE */}
        <motion.div
          className="space-y-10 mx-8"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F4A4D] leading-tight">
            Custom boxes  made easy <br/> <span className="text-[#2D6A73]">for retail</span>
          </h1>
          <p className="text-gray-600 max-w-lg">
            Supercharge your brand through the power of custom boxes and custom packaging that's big on wow-factor. With low minimums, free design expertise, super fast delivery and unlimited customization, our packaging specialists will help you create eye-catching custom shipping boxes that stand out from the crowd.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2D6A73] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#25595E] transition"
            >
              <FaCube /> Learn More
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-[#1F4A4D] font-semibold"
            >
              <div className="bg-[#1F4A4D] text-white p-3 rounded-full">
                <FaPlay size={14} />
              </div>
              Play Video
            </motion.button>
          </div>

          {/* <div className="flex gap-4 items-center mt-10">
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
                <FaArrowUp />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#E6ECEB] flex items-center justify-center text-[#2D6A73]">
                <FaUtensils />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#2D6A73] flex items-center justify-center text-white">
                <FaArrowUp />
              </button>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT SIDE (BOTTLES) */}
        <div className="relative hidden md:flex justify-center">
          <div className="absolute -bottom-0 bg-[#2D6A73] shadow-lg shadow-gray-400 w-2/3 h-1/3 rounded-[50%] opacity-80"></div>

          {/* Bottle 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image
              src="/hero-2.png"
              alt="Yogurt bottle red"
              width={450}
              height={450}
              className="relative z-10 bottom-8 "
            />
          </motion.div>

          {/* Bottle 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}




// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FaPlay, FaArrowUp, FaCube, FaUtensils } from "react-icons/fa";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#FFFF] min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden">
// <div className="max-w-[1400px] w-full grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           className="space-y-5 pl-8"
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* FIXED HEADING */}
//          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1F4A4D] leading-tight max-w-2xl">
//   Custom boxes made easy <br/> <span className="text-[#2D6A73]"> for retail</span>
// </h1>


//           <p className="text-gray-600 max-w-2xl">
//             Supercharge your brand through the power of custom boxes and custom
//             packaging that's big on wow-factor. With low minimums, free design
//             expertise, super fast delivery and unlimited customization, our
//             packaging specialists will help you create eye-catching custom
//             shipping boxes that stand out from the crowd.
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

//           {/* ICONS */}
//           <div className="flex gap-4 items-center mt-10">
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
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE (IMAGE) */}
//         <div className="relative flex justify-center -mt-16">
//           <div className="absolute -bottom-5 bg-[#2D6A73] shadow-lg shadow-gray-400 w-2/3 h-1/3 rounded-[50%] opacity-80"></div>

//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//           >
//             <Image 
//               src="/hero-2.png"
//               alt="Yogurt bottle red"
//               width={450}
//               height={450}
//               className="relative z-10"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
