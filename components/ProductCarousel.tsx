"use client";
import { FC } from 'react'
import { oneProductType } from './utils/ProductArrayAndTypes'
import Card from './Card'
import SectionHeader from './SectionHeader'

const ProductCarousel: FC<{ ProductData: oneProductType[] }> = ({ ProductData }) => {
  if (!ProductData || ProductData.length === 0) return <p>No products found</p>
  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="INDUSTRIES"
          title="Find custom boxes for your industry"
          description="Discover our range of fully customizable retail boxes tailored to your industry - available in an array of unique shapes, custom sizes and colors. Our packaging specialists can help you find the perfect custom packaging boxes and provide a free custom quote in minutes."
          buttonText="View All Industries"
          buttonLink="/industries"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {ProductData.map((item) => (
        <Card key={item._id} singleProductData={item} />
      ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel