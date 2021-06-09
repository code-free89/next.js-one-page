import React from 'react'
import { lastseen } from '../../../mockdata/lastseensection'

export default function LastseenSection() {
  return (
    <div className="w-full h-36 px-16 py-4 container flex flex-wrap items-stretch">
      <div className="w-full text-center text-lg">Last seen in ...</div>
      <div className={`w-full items-center grid grid-cols-${lastseen.length}`}>
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
