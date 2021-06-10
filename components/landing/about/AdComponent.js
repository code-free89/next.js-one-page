import React from 'react'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'

export default function AdComponent(props) {
  return (
    <div className={`w-full flex ${props.direction === "right" ? "justify-end" : "justify-start"}`}>
      <div className="w-full max-w-lg flex flex-wrap space-y-8 mx-20 my-auto">
        <div className="w-full text-5xl font-bold">
          {props.title}
        </div>
        <div className="w-full text-xl" dangerouslySetInnerHTML={{ __html: props.description }} />
        {
          props.label && <div className="w-full flex space-x-12 h-16">
          {
            props.label ? (
              <CustomButton label={props.label} className="px-11 py-3" />
            ) : (<></>)
          }
          {
            props.reviews ? (
              <div className="w-full flex flex-wrap items-center">
                <StarRating />
                <div className="text-lg w-full">{props.reviews} reviews</div>
              </div>
            ) : (<></>)
          }
          </div>
        }
      </div>
      <img alt="" src={props.imagePath} className={`h-700 ${props.direction === "left" ? "order-first mr-20" : "ml-20"}`} />
    </div>
  )
}
