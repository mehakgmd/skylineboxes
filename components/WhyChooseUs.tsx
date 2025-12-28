"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FiBox,
  FiSettings,
  FiTruck,
  FiDollarSign,
  FiHeadphones,
} from 'react-icons/fi';

const features = [
  {
    icon: FiBox,
    title: 'Free Design Support',
    description: 'Discuss your requirements and collaborate with our experts.',
  },
  {
    icon: FiSettings,
    title: 'Limitless Customizations',
    description: 'Customized boxes that meet your business needs.',
  },
  {
    icon: FiTruck,
    title: 'Fast TAT & Free Shipping',
    description: 'Custom boxes shipped promptly without any fee.',
  },
  {
    icon: FiDollarSign,
    title: 'Wholesale Prices & No MOQ',
    description: 'Freedom to order your custom packaging boxes.',
  },
  {
    icon: FiHeadphones,
    title: 'Professional Customer Support',
    description: 'Our team will answer all your packaging inquiries.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white pt-[80px] pb-[50px] px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[55px]">
          {/* <h2 className="relative inline-block text-[44px] font-semibold text-black leading-[1.15]">
            Why Choose Custom Box Makers?
            <span className="absolute right-0 -bottom-[10px] w-[176px] h-[6px] bg-[#F7941D] rounded-full" />
          </h2> */}
          {/* <h2 className="relative inline-block text-[44px] font-semibold text-black leading-[1.15]">
  Why Choose Custom Box{' '}
  <span className="relative inline-block">
    Makers?
    <svg
      className="absolute left-0 -bottom-[12px]"
      width="170"
      height="10"
      viewBox="0 0 170 10"
      fill="none"
    >
      <motion.path
        d="M 2 6 Q 85 1 168 6"
        stroke="#F7941D"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </svg>
  </span>
</h2> */}
<h2 className="relative inline-block text-[44px] font-semibold text-black leading-[1.15]">
  Why Choose Custom Box{' '}
  <span className="relative inline-block">
    Makers?
    {/* Hand-drawn underline */}
    <span className="absolute left-0 -bottom-[14px] w-full">
      <svg
        viewBox="0 0 1418 125"
        preserveAspectRatio="none"
        className="w-full h-[14px]"
      >
        <path
          d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68Z"
          fill="#2D6A73"
        />
      </svg>
    </span>
  </span>
</h2>


          <p className="mt-[34px] text-[18px] text-gray-600 max-w-[760px] mx-auto">
            Here are more reasons your business should choose us:
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
            {features.slice(0, 2).map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
            {features.slice(2, 4).map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-[50%]">
              <FeatureCard {...features[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {/* Icon (OVERLAPPING) */}
      <div
        className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          w-[55px]
          h-[55px]
          rounded-full
          bg-[#1F4A4D]
          flex
          items-center
          justify-center
          z-10
        "
      >
        <Icon size={30} className="text-white" strokeWidth={2} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: '0 14px 32px rgba(247,148,29,0.22)',
        }}
        className="
          ml-[38px]
          bg-white
          border
          border-[#284b63]
          rounded-[30px]
          px-[48px]
          py-[20px]
        "
      >
        <h3 className="text-[18px] font-semibold text-black mb-[6px]">
          {title}
        </h3>
        <p className="text-[14px] text-gray-600 leading-[1.4] max-w-[750px]">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
