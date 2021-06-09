import React from 'react'
import { productinformations } from '../../../mockdata/landing/informationsection'
import ProductInformation from './ProductInformation'

export default function InformationSection() {
  return (
    <div className={`flex items-center py-8 gap-x-4 grid grid-cols-${productinformations.length}`}>
      {
        productinformations.map((item, index) => (
          <ProductInformation key={`settings-${index}`} imagePath={item.imagePath} title={item.title} description={item.description} />
        ))
      }
    </div>
  )
}
