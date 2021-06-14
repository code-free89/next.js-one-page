import React from 'react'
import { productSettings, product_details } from '../../../mockdata/landing/herosection'
import ProductSetting from './Setting'

export default function ProductSettings() {
  return (
    <div className={`flex items-center gap-x-4 grid sm:grid-cols-${productSettings.length} grid-cols-${productSettings.length + 1}`}>
      {
        productSettings.map((item, index) => (
          <ProductSetting key={`settings-${index}`} imagePath={item.imagePath} label={item.label} />
        ))
      }
      <img alt="" src={product_details.awardImage} className="w-12 h-12 sm:hidden block" />
    </div>
  )
}
