import React from "react"

export default function ProductSetting(props) {
  return (
    <div className="flex sm:flex-nowrap flex-wrap items-center sm:space-x-3">
      <img alt="" src={props.imagePath} className="sm:w-16 sm:h-16 w-10 h-10 mx-auto" />
      <div className="sm:text-sm sm:font-semibold text-xs text-center w-full">{props.label}</div>
    </div>
  );
}
