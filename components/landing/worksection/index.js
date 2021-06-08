import React from 'react'
import { progress } from '../../../mockdata/landing/worksection'
import Progress from './Progress'

export default function WorkSection() {
  return (
    <div className="px-20 py-12 container mx-auto space-y-8 text-center">
      <div className="w-full text-5xl font-bold">How does the detox work?</div>
      <div className="w-full text-xl max-w-lg mx-auto">Restore natural radiance and volume with our Detox Kit - for all hair types.</div>
      <div className="grid grid-cols-3 gap-x-8">
      {
        progress.map((item, index) => (
          <Progress key={`progress-${index}`} imagePath={item.imagePath} number={index + 1} description={item.description} isLast={index === progress.length - 1 ? 1 : 0} />
        ))
      }
      </div>
    </div>
  )
}
