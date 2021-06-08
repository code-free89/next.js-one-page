import React from "react"

export default function ProductSetting(props) {
  return (
    <div className="flex items-center space-x-3">
      <img src={props.imagePath} className="w-16 h-16" />
      <div className="text-sm font-semibold">{props.label}</div>
    </div>
  );
}
