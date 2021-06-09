import React from 'react'

export default function Feedback(props) {
  return (
    <div className="flex items-center space-x-4">
      <img src={props.avatarPath} className="w-32 h-32" />
      <div className="space-y-3 flex flex-wrap items-stretch">
        <div className="font-bold text-lg w-full">
          {props.title}
        </div>
        <div className="flex items-end text-sm" dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </div>
  )
}
