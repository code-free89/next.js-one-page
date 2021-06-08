import React from 'react'
import ImageGallery from 'react-image-gallery'
import { product_details } from '../../../mockdata/herosection'

export default function CustomCarousel() {
  return (
    <div className="px-8">
      <ImageGallery items={product_details.mockupImages} showFullscreenButton={false} useBrowserFullscreen={false} showPlayButton={false} />
    </div>
  )
}
