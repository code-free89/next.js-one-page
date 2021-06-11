import React, { useState } from 'react'
import { product_information } from '../../../mockdata/landing/informationsection'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'
import PaymentGateways from '../hero/PaymentGateways'

export default function Details() {
  const [quantity, setquantity] = useState(0);
  return (
    <div className="px-8 sm:space-y-8 space-y-4 relative sm:mt-0 mt-3">
      <div className="w-full flex items-center space-x-5">
        <StarRating />
        <div className="text-lg">{product_information.reviews} reviews</div>
      </div>
      
      <div className="w-full sm:text-4xl text-2xl font-extrabold">
        {product_information.title}
      </div>

      <div className="w-full sm:text-3xl text-xl sm:text-gray-700 text-red-500">
        Now {product_information.price} kr
      </div>


      <div className="w-full sm:text-lg text-sm">
        {product_information.description}
      </div>

      <div className="w-full sm:text-md text-xs space-y-4">
        <div className="font-semibold">Included in this kit:</div>
        <ul className="pl-1">
        {
          product_information.included.map((item, index) => (
            <li key={`li-${index}`} className="font-light sm:text-base text-xs">{item}</li>
          ))
        }
        </ul>
      </div>

      <div className="w-full text-md space-y-4">
        <div className="font-semibold sm:text-base text-sm">Select quantity:</div>
        <div className="sm:space-x-8 space-x-3 flex items-center sm:h-16 h-12">
          <div className="bg-white rounded-md sm:w-36 w-20 h-full grid grid-cols-3 text-lg">
            <div className="text-center cursor-pointer my-auto" onClick={()=>{setquantity(quantity - 1)}}>-</div>
            <div className="text-center my-auto">{quantity}</div>
            <div className="text-center cursor-pointer my-auto" onClick={()=>{setquantity(quantity + 1)}}>+</div>
          </div>
          <CustomButton label="BUY NOW FOR SEK 569" className="sm:h-16 h-12 sm:px-11 px-8 sm:text-base text-xs" />
        </div>
      </div>

      <div className="w-full flex items-center space-x-6">
        <PaymentGateways />
        <img alt="" src={"//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-nortonIcon.jpg?v=1606107443"} className="h-12" />
      </div>

      <div className="w-full sm:space-x-8 space-x-4 flex items-center">
        <img alt="" src={product_information.awardImage} className="sm:w-20 sm:h-20 w-12 h-12 right-0 top-40" />
        <div className="sm:text-base text-xs">
          {product_information.awardText}
        </div>
      </div>
    </div>
  )
}
