import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Progress(props) {
  return (
    <div className="text-center space-y-8 relative flex flex-wrap justify-center">
      <div className="w-36 h-36 relative">
        <img src={props.imagePath} className="w-full h-full" alt="" />
        <div className="absolute -bottom-4 left-14 left- rounded-full w-8 h-8 flex items-center justify-center bg-black text-white">{props.number}</div>
      </div>

      <div className="w-full text-2xl">{props.description}</div>

      {
        !props.isLast ? (
          <ArrowRightIcon className="absolute right-0 top-16 w-6 h-6 text-red-300" />
        ) : ("")
      }
    </div>
  )
}
