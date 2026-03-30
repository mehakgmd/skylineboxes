// "use client";
// import { FaFacebookF, FaTwitter, FaYoutube, FaWordpressSimple } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gold text-white py-12 rounded-t-[60px]">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
//         {/* Logo & Description */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <img
//               src="/Logo/Logo.png"
//               alt="Packega logo"
//               className="h-12 w-auto object-contain"
//             />
//           </div>
//           <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.
//           </p>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Company</h3>
//           <ul className="space-y-2 text-white">
//             <li><a href="#">Terms & Conditions</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//             <li><a href="#">Project Protections</a></li>
//             <li><a href="#">FAQs</a></li>
//           </ul>
//         </div>

//         {/* About */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">About</h3>
//           <ul className="space-y-2 text-white">
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Services</a></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Sign Up To Our Newsletters</h3>
//           <div className="flex items-center mb-4">
//             <input
//               type="text"
//               placeholder="Text"
//               className="w-full px-4 py-3 rounded-l-full bg-[#1F3C4B] text-gray-200 focus:outline-none"
//             />
//             <button className="px-6 py-3 bg-[#3F6B68] rounded-r-full font-semibold">
//               Submit
//             </button>
//           </div>
//           <div className="flex gap-4 text-xl">
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaYoutube /></a>
//             <a href="#"><FaWordpressSimple /></a>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-dotted border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
//         © 2024 Packega Template • All Rights Reserved
//       </div>
//     </footer>
//   );
// }




"use client";
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpressSimple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Wave Separator */}
      <div className="relative w-full overflow-hidden" style={{ height: "100px" }}>
        <style>{`
          @keyframes waveShift1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes waveShift2 {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .wave-layer-1 {
            animation: waveShift1 10s linear infinite;
          }
          .wave-layer-2 {
            animation: waveShift2 14s linear infinite;
          }
        `}</style>

        {/* Wave Layer 1 — back layer, slightly lighter */}
        <svg
          className="wave-layer-1 absolute bottom-0"
          style={{ width: "200%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,100 L0,100 Z"
            fill="#C9A100"
          />
        </svg>

        {/* Wave Layer 2 — front layer, full gold */}
        <svg
          className="wave-layer-2 absolute bottom-0"
          style={{ width: "200%", height: "80%" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C360,100 720,10 1080,50 C1440,90 1800,10 2160,50 C2520,90 2880,10 2880,50 L2880,100 L0,100 Z"
            fill="#e0c112"
          />
        </svg>
      </div>

      {/* Footer Body */}
      <div className="bg-gold pt-4 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
         <div className="flex items-center gap-3 mb-4">
  <img
    src="/Logo/Logo-2.png"
    alt="Packega logo"
    className="h-24 w-48 object-contain"
  />
</div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-white">
              <li><a href="terms-conditions">Terms & Conditions</a></li>
              <li><a href="privacy-policy">Privacy Policy</a></li>
              <li><a href="#">Project Protections</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sign Up To Our Newsletters</h3>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Text"
                className="w-full px-4 py-3 rounded-l-full bg-white text-gray-200 focus:outline-none"
              />
              <button className="px-6 py-3 bg-goldDark text-white rounded-r-full font-semibold">
                Submit
              </button>
            </div>
            <div className="flex gap-4 text-xl">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWordpressSimple /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dotted border-white mt-10 pt-6 text-center text-white text-sm">
          © 2024 Packega Template • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}