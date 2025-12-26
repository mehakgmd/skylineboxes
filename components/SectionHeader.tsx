'use client'

import { FC } from 'react'

interface SectionHeaderProps {
  label?: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
}

const SectionHeader: FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  description, 
  buttonText, 
  buttonLink,
  onButtonClick 
}) => {
  return (
    <div className="mb-10 lg:mb-14">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-3xl">
          {label && (
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              {label}
            </p>
          )}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-base lg:text-[14px] text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        {buttonText && (
          buttonLink ? (
            <a 
              href={buttonLink}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap self-start lg:self-auto"
            >
              {buttonText}
            </a>
          ) : (
            <button 
              onClick={onButtonClick}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap self-start lg:self-auto"
            >
              {buttonText}
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default SectionHeader