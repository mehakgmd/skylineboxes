import React from 'react';
import { LuPackageOpen, LuCircleDollarSign, LuAlarmClockPlus } from "react-icons/lu";
import { FaTags, FaAward } from "react-icons/fa6";


export default function PackagingSection() {
  const features = [
    {
      icon: LuPackageOpen,
      title: "Starting From",
      subtitle: "100 Boxes"
    },
    {
      icon: LuCircleDollarSign,
      title: "Competitive",
      subtitle: "Pricing"
    },
    {
      icon: FaTags,
      title: "Custom Design,",
      subtitle: "Sizes & Style"
    },
    {
      icon: FaAward,
      title: "High Quality",
      subtitle: "Offset Printing"
    },
    {
      icon: LuAlarmClockPlus,
      title: "Fast Turnaround",
      subtitle: "8-10 Business Days"
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden rounded-br-3xl" style={{ backgroundColor: '#e8f5e9' }}>
      {/* Decorative waves */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 0,50 Q 25,30 50,50 T 100,50 T 150,50 T 200,50 L 200,0 L 0,0 Z"
            fill="#133342"
            opacity="0.3"
          />
          <path
            d="M 0,80 Q 25,60 50,80 T 100,80 T 150,80 T 200,80 L 200,0 L 0,0 Z"
            fill="#133342"
            opacity="0.2"
          />
          <path
            d="M 0,110 Q 25,90 50,110 T 100,110 T 150,110 T 200,110 L 200,0 L 0,0 Z"
            fill="#133342"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#133342' }}>
              Fast & Reliable Custom Packaging Boxes
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We're on a mission to help companies, large and small, harness the potential of{' '}
                <span className="font-semibold" style={{ color: '#133342' }}>custom packaging</span>. 
                We firmly believe that creative packaging can do way more than just protect your products. 
                It can be a conversation starter for your brand.
              </p>
              
              <p>
                Get high-quality custom printed boxes that you can customize from corner to corner: 
                the shape, color, artwork, texture and size. With a low minimum quantity starting from 
                100 boxes, your custom box order will be shipped flat and arrive within 8-10 business 
                days or sooner with expedited shipping.
              </p>
              
              <p>
                Together, we'll revolutionize your custom printed box strategy - at a price you'll love. 
                Let your creative streak run wild and unbox your brand's latest asset with{' '}
                <span className="font-semibold" style={{ color: '#133342' }}>custom boxes</span>. 
                No matter the idea, logo, artwork, shape or size of your box, nothing is out of reach.
              </p>
            </div>
          </div>

          {/* Right Content - Feature Cards with decorative lines */}
          <div className="relative">
            {/* Premium decorative shapes behind cards */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
              {/* Soft gradient blob 1 */}
              <div 
                className="absolute rounded-full blur-3xl opacity-30"
                style={{
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(19, 51, 66, 0.15) 0%, rgba(19, 51, 66, 0.05) 50%, transparent 100%)',
                  top: '10%',
                  right: '-10%',
                }}
              />
              
              {/* Soft gradient blob 2 */}
              <div 
                className="absolute rounded-full blur-3xl opacity-25"
                style={{
                  width: '350px',
                  height: '350px',
                  background: 'radial-gradient(circle, rgba(19, 51, 66, 0.12) 0%, rgba(19, 51, 66, 0.04) 50%, transparent 100%)',
                  bottom: '5%',
                  left: '-15%',
                }}
              />
              
              {/* Elegant curved lines */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 500 700"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#133342', stopOpacity: 0.08 }} />
                    <stop offset="50%" style={{ stopColor: '#133342', stopOpacity: 0.15 }} />
                    <stop offset="100%" style={{ stopColor: '#133342', stopOpacity: 0.08 }} />
                  </linearGradient>
                </defs>
                
                {/* Smooth flowing curve */}
                <path
                  d="M -50,150 Q 150,100 300,180 T 550,200"
                  stroke="url(#lineGradient)"
                  strokeWidth="120"
                  fill="none"
                  strokeLinecap="round"
                />
                
                <path
                  d="M -80,400 Q 200,350 350,420 T 600,450"
                  stroke="url(#lineGradient)"
                  strokeWidth="100"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-10">
              {/* First row - 3 cards */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                {features.slice(0, 3).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                      style={{ 
                        border: '1px solid rgba(19, 51, 66, 0.1)',
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: 'rgba(19, 51, 66, 0.1)' }}
                      >
                        <Icon 
                          size={32} 
                          style={{ color: '#133342' }}
                          strokeWidth={2}
                        />
                      </div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: '#133342' }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="font-bold text-lg"
                        style={{ color: '#133342' }}
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Second row - 2 cards centered */}
              <div className="flex justify-center gap-6">
                {features.slice(3, 5).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index + 3}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                      style={{ 
                        border: '1px solid rgba(19, 51, 66, 0.1)',
                        width: 'calc(33.333% - 1rem)'
                      }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: 'rgba(19, 51, 66, 0.1)' }}
                      >
                        <Icon 
                          size={32} 
                          style={{ color: '#133342' }}
                          strokeWidth={2}
                        />
                      </div>
                      <h3 
                        className="font-bold text-lg mb-1"
                        style={{ color: '#133342' }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="font-bold text-lg"
                        style={{ color: '#133342' }}
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}