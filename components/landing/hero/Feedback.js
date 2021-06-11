import React from 'react'

export default function Feedback(props) {
  return (
    <div className="flex items-center space-x-4">
      <img alt="" src={props.avatarPath} className="sm:w-32 sm:h-32 h-24 w-24" />
      <div className="sm:space-y-3 space-y-1 flex flex-wrap items-stretch">
        <div className="font-bold sm:text-lg text-md w-full">
          {props.title}
        </div>
        <div className="flex items-end sm:text-sm text-xs" dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </div>
  )
}
