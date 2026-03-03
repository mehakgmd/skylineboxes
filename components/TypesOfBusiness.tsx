"use client";
import React from 'react';

export default function CustomBoxesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className=" aspect-square flex items-center justify-center">
              <img
                src="/3-Types-of-Custom-Boxes.webp"
                alt="Custom packaging boxes display"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              3 Main Types of Custom Boxes for Businesses
            </h2>

            <p className="text-gray-700 text-[14px] leading-relaxed">
              There are 3 main types of custom packaging boxes, each can be designed to meet specific business needs, including:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2.5 mr-3"></div>
                <div>
                  <span className="font-bold text-goldDark text-lg">Folding Cartons:</span>
                  <span className="text-gray-700 text-[14px]"> Highly flexible in various styles, sizes, and shapes, ideal for retail product packaging.</span>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2.5 mr-3"></div>
                <div>
                  <span className="font-bold text-goldDark text-lg">Shipping Boxes:</span>
                  <span className="text-gray-700 text-[14px]"> Exclusively designed boxes to ensure safe shipping and minimize product damage.</span>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2.5 mr-3"></div>
                <div>
                  <span className="font-bold text-goldDark text-lg">Mailer Boxes:</span>
                  <span className="text-gray-700 text-[14px]"> Compact and space-saving boxes for shipping small products, subscriptions, and promotional items.</span>
                </div>
              </li>
            </ul>

            <p className="text-gray-700 text-[14px] leading-relaxed pt-2">
              Including custom boxes in your packaging strategy helps you protect your products and deliver a powerful brand experience.
            </p>

            <button className="bg-gold hover:bg-gold text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 mt-4">
              Get customized boxes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}