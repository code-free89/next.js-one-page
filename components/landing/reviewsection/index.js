import React from 'react'
import { reviewcards } from '../../../mockdata/landing/reviewsection'
import CustomSlider from './CustomSlider'
import ReviewCard from './ReviewCard'
// import {} from "@appnest/masonry-layout"

export default function ReviewSection() {
  return (
    <>
    <div className="w-full px-20 py-12 container mx-auto text-center">
      <div className="w-full text-4xl font-bold">
        Real people. Real results.
      </div>
      <div className="w-full text-2xl font-light mt-4 mb-12">
        Our products are reviewed by customers worldwide
      </div>
      <CustomSlider />
      <div className="my-12 text-2xl font-light">10 customer reviews</div>
    </div>
    <div className="w-full">
      {/* <masonry-layout cols="5" gap={20}>
        {
          reviewcards.map((item, index) => (
            <ReviewCard key={`reviewcard-${index}`} data={item} />
          ))
        }
      </masonry-layout> */}
    </div>
    </>
  )
}
