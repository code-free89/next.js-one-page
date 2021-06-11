import React, { useState } from 'react'
import { product_information } from '../../../mockdata/landing/informationsection'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'
import PaymentGateways from '../hero/PaymentGateways'

export default function Details() {
  const [quantity, setquantity] = useState(0);
  return (
    <div className="px-8 space-y-8 relative">
      <div className="w-full flex items-center space-x-5">
        <StarRating />
        <div className="text-lg">{product_information.reviews} reviews</div>
      </div>
      
      <div className="w-full text-4xl font-extrabold">
        {product_information.title}
      </div>

      <div className="w-full text-3xl text-gray-700">
        Now {product_information.price} kr
      </div>


      <div className="w-full text-lg">
        {product_information.description}
      </div>

      <div className="w-full text-md space-y-4">
        <div className="font-semibold">Included in this kit:</div>
        <ul className="pl-1">
        {
          product_information.included.map((item, index) => (
            <li key={`li-${index}`} className="font-light">{item}</li>
          ))
        }
        </ul>
      </div>

      <div className="w-full text-md space-y-4">
        <div className="font-semibold">Select quantity:</div>
        <div className="space-x-8 flex items-center h-16">
          <div className="bg-white rounded-md w-36 h-full grid grid-cols-3 text-lg">
            <div className="text-center cursor-pointer my-auto" onClick={()=>{setquantity(quantity - 1)}}>-</div>
            <div className="text-center my-auto">{quantity}</div>
            <div className="text-center cursor-pointer my-auto" onClick={()=>{setquantity(quantity + 1)}}>+</div>
          </div>
          <CustomButton label="BUY NOW FOR SEK 569" className="h-16 px-11" />
        </div>
      </div>

      <div className="w-full flex items-center space-x-6">
        <PaymentGateways />
        <img alt="" src={"//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-nortonIcon.jpg?v=1606107443"} className="h-12" />
      </div>

      <div className="w-full space-x-8 flex items-center">
        <img alt="" src={product_information.awardImage} className="w-20 h-20 right-0 top-40" />
        <div>
          {product_information.awardText}
        </div>
      </div>
    </div>
  )
}
