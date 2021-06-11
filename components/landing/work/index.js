import React from 'react'
import { progress } from '../../../mockdata/landing/worksection'
import Progress from './Progress'

export default function WorkSection() {
  return (
    <div className="px-20 py-12 container mx-auto sm:space-y-8 space-y-3 text-center">
      <div className="w-full sm:text-5xl text-2xl font-bold">How does the detox work?</div>
      <div className="w-full sm:text-xl text-sm sm:max-w-lg max-w-xs mx-auto">Restore natural radiance and volume with our Detox Kit - for all hair types.</div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-8 items-start sm:space-y-0 space-y-5">
      {
        progress.map((item, index) => (
          <Progress key={`progress-${index}`} imagePath={item.imagePath} number={index + 1} description={item.description} isLast={index === progress.length - 1 ? 1 : 0} />
        ))
      }
      </div>
    </div>
  )
}
