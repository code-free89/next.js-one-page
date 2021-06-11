import React from 'react'
import { lastseen } from '../../../mockdata/lastseensection'

export default function LastseenSection() {
  return (
    <div className="w-full sm:h-36 h-44 px-16 py-4 container flex flex-wrap items-stretch">
      <div className="w-full text-center sm:text-lg text-sm">Last seen in ...</div>
      <div className={`w-full items-center grid sm:grid-cols-${lastseen.length} grid-cols-3 sm:gap-0 gap-2`}>
        {
          lastseen.map((item, index) => (
            <div key={`lastseen-${index}`} className="flex justify-center">
              <img alt="" src={item} className="h-8" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
