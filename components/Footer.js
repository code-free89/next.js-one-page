import React from 'react'

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="px-20 py-8 container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img alt="" data-src={"//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-logo2.jpg?v=10382854549988201948"} className="h-12" />
          <div className="text-white text-sm">© UNDERYOURSKINSTHLM 2020</div>
        </div>

        <div className="flex space-x-8">
          <div className="text-white text-sm">Contact Us</div>
          <div className="text-white text-sm">Terms</div>
        </div>
      </div>
    </div>
  )
}
