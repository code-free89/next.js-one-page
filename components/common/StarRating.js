import React from 'react'
import ReactStars from "react-rating-stars-component";

export default function StarRating() {
  const options = {
    count: 5,
    size: 30,
    value: 5,
    edit: false,
    activeColor:"#ffd700"
  };

  return (
    <div>
      <ReactStars {...options} />
    </div>
  )
}
