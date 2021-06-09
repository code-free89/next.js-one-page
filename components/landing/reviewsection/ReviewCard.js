import React from 'react'
import StarRating from '../../common/StarRating'

export default function ReviewCard(props) {
  return (
    <div className="rounded-md overflow-hidden bg-yellow-normal">
      <img src={props.data.imagePath} className="h-56 w-full object-cover" alt="" />
      <div className="w-full px-5 pb-5">
        <div className="w-full">
          <StarRating />
        </div>
        <div className="w-full font-bold text-xl">
          {props.data.name}
        </div>
        <div className="w-full font-light text-md">
          {props.data.review}
        </div>
      </div>
    </div>
  )
}
