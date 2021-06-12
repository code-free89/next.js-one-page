import React from 'react'
import CustomCarousel from './CustomCarousel'
import DetailsSection from './DetailsSection'

export default function HeroSection() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-1920 mx-auto">
      <CustomCarousel />
      
      <div className="sm:pl-20 sm:pr-40">
        <DetailsSection />
      </div>
    </div>
  )
}
