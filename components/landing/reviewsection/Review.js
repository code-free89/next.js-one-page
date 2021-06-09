import React from "react";
import StarRating from "../../common/StarRating";

export default function Review(props) {
  return (
    <div className="flex flex-wrap justify-center items-start space-y-4">
      <img src={props.avatarPath} className="w-24 h-24" alt="" />
      <div className="w-full flex justify-center">
        <StarRating />
      </div>
      <div className="w-full text-lg font-bold text-center">{props.title}</div>
      <div className="w-full text-lg font-light text-center">{props.description}</div>
      <div className="w-full text-lg font-light text-center">{props.name}</div>
    </div>
  );
}
