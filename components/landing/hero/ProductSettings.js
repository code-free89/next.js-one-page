import React from 'react'
import { productSettings } from '../../../mockdata/herosection'
import ProductSetting from './Setting'

export default function ProductSettings() {
  return (
    <div className={`flex items-center gap-x-4 grid grid-cols-${productSettings.length}`}>
      {
        productSettings.map((item, index) => (
          <ProductSetting key={`settings-${index}`} imagePath={item.imagePath} label={item.label} />
        ))
      }
    </div>
  )
}
