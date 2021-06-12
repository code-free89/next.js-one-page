import React from "react";
import CustomButton from "../../common/Button";
import StarRating from "../../common/StarRating";

export default function AdComponent(props) {
  return (
    <div
      className={`w-full sm:flex items-end ${
        props.direction === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <img
        alt=""
        src={props.imagePath}
        className={`sm:h-700 h-80 sm:w-auto w-full ${
          props.direction === "left"
            ? ""
            : "order-last"
        }`}
      />
      <div
        className={`w-full max-w-5xl flex flex-wrap sm:space-y-8 space-y-3 sm:px-40 px-8 py-4 ${
          props.direction === "right" ? "bg-white" : "bg-yellow-light"
        }`}
      >
        <div className="sm:w-full w-64 sm:text-5xl text-3xl font-bold">
          {props.title}
        </div>
        <div
          className="w-full sm:text-xl text-sm"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        {props.label && (
          <div className="w-full sm:flex sm:space-x-12 sm:h-16 sm:space-y-0 space-y-3">
            {props.label ? (
              <CustomButton
                label={props.label}
                className="px-11 py-3 sm:w-auto w-full text-lg"
              />
            ) : (
              <></>
            )}
            {props.reviews ? (
              <div className="w-full flex sm:flex-wrap items-center sm:justify-start justify-center">
                <StarRating />
                <div className="text-lg sm:w-full">{props.reviews} reviews</div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
