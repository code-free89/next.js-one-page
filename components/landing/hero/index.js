import React from 'react'
import CustomCarousel from './CustomCarousel'
import DetailsSection from './DetailsSection'

export default function HeroSection() {
  return (
    <div className="grid grid-cols-2 w-full max-w-1920">
      <CustomCarousel />
      
      <div className="pl-20 pr-40">
        <DetailsSection />
      </div>
    </div>
  )
}
