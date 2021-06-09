import React from 'react'
import { product_details, review } from '../../../mockdata/herosection'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'
import PaymentGateways from './PaymentGateways'
import ProductSettings from './ProductSettings'
import Feedback from './Feedback'

export default function DetailsSection() {
  return (
    <div className="px-8 space-y-8 relative">
      <div className="w-full flex items-center space-x-5">
        <StarRating />
        <div className="text-lg">{product_details.reviews} reviews</div>
      </div>
      
      <div className="w-full text-6xl font-extrabold">
        {product_details.title}
      </div>

      <div className="w-full text-3xl text-green-500">
        {product_details.price} kr
      </div>

      <img src={product_details.awardImage} className="absolute w-28 h-28 right-0 top-40" />

      <div className="w-full text-lg">
        {product_details.description}
      </div>

      <div className="w-full flex items-center space-x-6">
        <CustomButton label="BUY DETOX KIT" />
        <PaymentGateways />
      </div>

      <ProductSettings />

      <Feedback avatarPath={review.avatarPath} title={review.title} description={review.description} />
    </div>
  )
}
