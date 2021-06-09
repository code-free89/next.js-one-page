import React from 'react'
import { ads } from '../../../mockdata/landing/Ads'
import AdComponent from './AdComponent'

export default function AboutSection() {
  return (
    <div>
      {
        ads.map((item, index) => (
          <div key={`AD-${index}`} className="w-full">
            <AdComponent imagePath={item.imagePath} title={item.title} description={item.description} label={item.label} reviews={item.reviews} direction={`${index % 2 == 0 ? "right" : "left"}`} />
          </div>
        ))
      }
    </div>
  )
}
