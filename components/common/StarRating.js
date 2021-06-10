import React from 'react'
import ReactStars from "react-rating-stars-component";

export default function StarRating() {
  const options = {
    count: 5,
    size: 20,
    value: 5,
    edit: false,
    activeColor:"#ddb499"
  };

  return (
    <div className="pt-3">
      <ReactStars {...options} />
    </div>
  )
}
