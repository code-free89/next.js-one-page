import React from "react";
import StarRating from "../../common/StarRating";

export default function ReviewCard(props) {
  return (
    <div className="rounded-md overflow-hidden bg-yellow-light">
      <img
        src={`${process.env.ImageKitURL}/${
          props.screenWidth > 600 ? "tr:h-280" : "tr:h-200"
        }tr:h-280/${props.data.imagePath}`}
        className={`${
          props.screenWidth > 600 ? "h-80" : "h-60"
        } w-full object-cover`}
        alt=""
      />
      <div className="w-full p-3">
        <div className="w-full">
          <StarRating />
        </div>
        <div className="w-full font-bold sm:text-xl text-sm">
          {props.data.name}
        </div>
        <div className="w-full font-light sm:text-md text-xs">
          {props.data.review}
        </div>
      </div>
    </div>
  );
}
