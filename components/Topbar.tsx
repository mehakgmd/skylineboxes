// // import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// // export default function TopBar() {
// //   return (
// //     <div className="bg-[#284b63] text-white text-sm">
// //       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 py-7 gap-2 sm:gap-4 text-center sm:text-left">
// //         <div className="flex flex-wrap items-center justify-center gap-4">
// //           <span className="flex items-center gap-2">
// //             <FaPhoneAlt size={14} /> (+654) 6478909
// //           </span>
// //           <span className="flex items-center gap-2">
// //             <FaEnvelope size={14} /> mail@pckga.id
// //           </span>
// //           <span className="flex items-center gap-2">
// //             <FaMapMarkerAlt size={14} /> London Eye, London
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function TopBar() {
//   return (
//     <div className="bg-[#284b63] text-white text-sm">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 py-3 gap-2 sm:gap-4 text-center sm:text-left">
//         <div className="flex flex-wrap items-center justify-center gap-4">
//           <span className="flex items-center gap-2">
//             <FaPhoneAlt size={14} /> (+654) 6478909
//           </span>
//           <span className="flex items-center gap-2">
//             <FaEnvelope size={14} /> mail@pckga.id
//           </span>
//           <span className="flex items-center gap-2">
//             <FaMapMarkerAlt size={14} /> London Eye, London
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }



import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#284b63] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-9 py-3 gap-2 sm:gap-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <span className="flex items-center gap-2">
            <FaPhoneAlt size={14} /> (+654) 6478909
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope size={14} /> mail@pckga.id
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt size={14} /> London Eye, London
          </span>
        </div>
      </div>
    </div>
  );
}
