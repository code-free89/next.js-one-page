import React from 'react'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'

export default function AdComponent(props) {
  return (
    <div className={`w-full flex ${props.direction === "right" ? "justify-end" : "justify-start"}`}>
      <div className="w-full max-w-xl flex flex-wrap my-auto space-y-12">
        <div className="w-full text-5xl font-bold">
          {props.title}
        </div>
        <div className="w-full text-xl" dangerouslySetInnerHTML={{ __html: props.description }} />
        <div className="w-full flex space-x-12">
          {
            props.label ? (
              <CustomButton label={props.label} />
            ) : (<></>)
          }
          {
            props.reviews ? (
              <div className="w-full flex items-center space-x-5">
                <StarRating />
                <div className="text-lg">{props.reviews} reviews</div>
              </div>
            ) : (<></>)
          }
        </div>
      </div>
      <img alt="" src={props.imagePath} className={`h-700 ${props.direction === "left" ? "order-first mr-20" : "ml-20"}`} />
    </div>
  )
}
