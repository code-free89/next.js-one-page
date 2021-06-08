import React from 'react'
import ImageGallery from 'react-image-gallery'

const mockupImages = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
]

export default function CustomCarousel() {
  return (
    <div className="px-8">
      <ImageGallery items={mockupImages} showFullscreenButton={false} useBrowserFullscreen={false} showPlayButton={false} />
    </div>
  )
}
