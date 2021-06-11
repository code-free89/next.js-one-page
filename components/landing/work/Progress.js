import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Progress(props) {
  return (
    <div className="text-center relative flex sm:flex-wrap justify-center">
      <div className="sm:w-36 sm:h-36 w-24 h-24 relative min-w-24">
        <img src={props.imagePath} className="w-full h-full" alt="" />
        <div className="absolute -bottom-4 sm:left-14 left-10 rounded-full sm:w-8 sm:h-8 w-6 h-6 sm:flex hidden items-center justify-center bg-black text-white">{props.number}</div>
      </div>

      <div className="w-full sm:text-2xl text-md px-4 sm:my-8">
        <div className="rounded-full sm:w-8 sm:h-8 w-5 h-5 sm:hidden flex items-center justify-center bg-black text-white ml-2 mb-1">{props.number}</div>
        <div className="w-full">{props.description}</div>
      </div>

      {
        !props.isLast ? (
          <ArrowRightIcon className="absolute right-0 top-16 w-6 h-6 text-red-300 sm:block hidden" />
        ) : ("")
      }
    </div>
  )
}
