"use client";
import { FaFacebookF, FaTwitter, FaYoutube, FaWordpressSimple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gold text-white py-12 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Logo/Logo.png"
              alt="Packega logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-black">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Project Protections</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2 text-black">
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
              className="w-full px-4 py-3 rounded-l-full bg-[#1F3C4B] text-gray-200 focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#3F6B68] rounded-r-full font-semibold">
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
      <div className="border-t border-dotted border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2024 Packega Template • All Rights Reserved
      </div>
    </footer>
  );
}
