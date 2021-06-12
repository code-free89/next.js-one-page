import React from 'react'
import { productinformations } from '../../../mockdata/landing/informationsection'
import ProductInformation from './ProductInformation'

export default function InformationSection() {
  return (
    <div className={`flex items-center py-8 sm:gap-x-4 gap-x-0 sm:gap-y-0 gap-y-2 container grid sm:grid-cols-${productinformations.length} sm:grid-cols-1`}>
      {
        productinformations.map((item, index) => (
          <ProductInformation key={`settings-${index}`} imagePath={item.imagePath} title={item.title} description={item.description} />
        ))
      }
    </div>
  )
}
