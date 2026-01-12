export default function EcoFriendlySection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8 xl:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Side - Image Grid and CTA */}
          <div className="flex flex-col">
            {/* Single Image with Grid Layout Overlay */}
            <div className="relative mb-10 lg:mb-12">
              <img
                src="/Group-1000006618-1.webp"
                alt="Custom eco-friendly packaging boxes showcase"
                className="h-auto w-full max-w-md items-center justify-center ml-7 object-cover"
              />
            </div>

            {/* Easy Order Process Section */}
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-[2.55rem] lg:leading-tight">
                Easy Order Process
              </h2>
              <p className="mb-6 text-[14px] text-gray-700 lg:text-lg">
                Get your custom boxes with our easy order process!
              </p>
              <button className="inline-flex w-fit items-center justify-center rounded-lg bg-[#133342] px-8 py-3.5 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#ff7a28] hover:shadow-lg">
                Get Instant Quote
              </button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[2.55rem] lg:leading-tight xl:text-4xl">
              Eco-Friendly Boxes: Good for Your Business, Safe for the Environment
            </h1>

            {/* Description */}
            <p className="mb-10 text-[12px] leading-relaxed text-gray-700 lg:mb-12 lg:text-lg">
              We believe your custom boxes should be high-quality and environmentally responsible. That's why we use eco-friendly materials, ensuring your printed boxes not only benefit your business but also help protect the planet.
            </p>

            {/* Three Icons Row */}
            <div className="mb-12 grid grid-cols-3 gap-6 lg:mb-14">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#133342] shadow-md lg:h-16 lg:w-16">
                  <svg className="h-10 w-10 text-white lg:h-10 lg:w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-900 lg:text-lg">
                  Eco Friendly Packaging
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#133342] shadow-md lg:h-16 lg:w-16">
                  <svg className="h-10 w-10 text-white lg:h-10 lg:w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-900 lg:text-lg">
                  Recyclable Materials
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#133342] shadow-md lg:h-16 lg:w-16">
                  <svg className="h-10 w-10 text-white lg:h-10 lg:w-10" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-gray-900 lg:text-lg">
                  Biodegradable
                </p>
              </div>
            </div>

            {/* Process Steps - 2x2 Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {/* Custom Quote */}
              <div className="flex gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#caf0f8]">
                  <svg className="h-9 w-9 text-[#133342]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Custom Quote</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Fill in the quote form with your custom box requirements (size, shape, quantity, and printing option).
                  </p>
                </div>
              </div>

              {/* Designing */}
              <div className="flex gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#caf0f8]">
                  <svg className="h-9 w-9 text-[#133342]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Designing</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Our packaging expert will contact you to provide guidance and consultation on creating your branded boxes design.
                  </p>
                </div>
              </div>

              {/* Production & Printing */}
              <div className="flex gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#caf0f8]">
                  <svg className="h-9 w-9 text-[#133342]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Production & Printing</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    We will double-check the box design before printing & its measurements during the production.
                  </p>
                </div>
              </div>

              {/* Smooth Shipping */}
              <div className="flex gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#caf0f8]">
                  <svg className="h-9 w-9 text-[#133342]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Smooth Shipping</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    Our smooth shipping service ensures the on-time arrival of your boxes at your door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}