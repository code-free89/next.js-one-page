import React from 'react'
import CustomCarousel from '../hero/CustomCarousel'
import Details from './Details'

export default function PurchaseSection() {
  return (
    <div className="grid grid-cols-2 w-full max-w-7xl mx-auto py-12">
      <CustomCarousel />
      
      <Details />
    </div>
  )
}
