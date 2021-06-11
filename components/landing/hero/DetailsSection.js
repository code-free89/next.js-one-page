import React from 'react'
import { product_details, review } from '../../../mockdata/herosection'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'
import PaymentGateways from './PaymentGateways'
import ProductSettings from './ProductSettings'
import Feedback from './Feedback'

export default function DetailsSection() {
  return (
    <div className="px-8 sm:space-y-8 space-y-4 relative">
      <div className="w-full flex items-center space-x-5 mt-3">
        <StarRating />
        <div className="text-md">{product_details.reviews} reviews</div>
      </div>
      
      <div className="w-full sm:text-6xl text-xl sm:font-bold font-extrabold">
        {product_details.title}
      </div>

      <div className="w-full sm:text-3xl text-xl text-green-500">
        {product_details.price} kr
      </div>

      <img alt="" src={product_details.awardImage} className="absolute w-28 h-28 right-0 top-40 sm:block hidden" />

      <div className="w-full sm:text-lg text-sm sm:block hidden">
        {product_details.description}
      </div>

      <div className="w-full flex sm:flex-nowrap flex-wrap items-center sm:space-x-6 sm:space-y-0 space-y-2">
        <CustomButton label="BUY DETOX KIT" className="px-11 py-3 sm:w-max w-full" />
        <PaymentGateways />
      </div>

      <ProductSettings />

      <div className="w-full sm:text-lg text-sm sm:hidden block">
        {product_details.description}
      </div>

      <Feedback avatarPath={review.avatarPath} title={review.title} description={review.description} />
    </div>
  )
}
