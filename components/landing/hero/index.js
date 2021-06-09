import React from 'react'
import CustomCarousel from './CustomCarousel'
import DetailsSection from './DetailsSection'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 w-full max-w-7xl mx-auto">
      <CustomCarousel />
      
      <DetailsSection />
    </div>
  )
}
