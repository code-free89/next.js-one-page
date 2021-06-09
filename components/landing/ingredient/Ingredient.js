import React from 'react'

export default function Ingredient(props) {
  return (
    <div className="space-y-6">
      <div className={`w-full flex justify-between max-w-4xl mx-auto`}>
        <div className="w-full max-w-xl flex flex-wrap my-auto space-y-12">
          <div className="w-full text-4xl font-semibold">
            {props.data.title}
          </div>

          <div className="w-full text-3xl font-light">
            {props.data.subtitle}
          </div>

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.description }} />

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.subdescription }} />
        </div>
        <img src={props.data.imagePath} className={`h-500 my-auto ${props.direction === "left" ? "order-first mr-20" : "ml-20"}`} />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className={`w-full max-w-4xl`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
