import React from 'react'
import { reviewcards } from '../../../mockdata/landing/reviewsection'
import CustomSlider from './CustomSlider'
import ReviewCard from './ReviewCard'
import Masonry from 'react-masonry-css'

export default function ReviewSection() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
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
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          reviewcards.map((item, index) => (
            <ReviewCard key={`reviewcard-${index}`} data={item} />
          ))
        }
      </Masonry>
    </div>
    </>
  )
}
