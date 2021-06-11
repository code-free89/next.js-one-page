import React from 'react'

export default function Ingredient(props) {
  return (
    <div className="space-y-6">
      <div className={`w-full flex justify-between max-w-4xl mx-auto`}>
        <div className="w-full max-w-xl sm:flex hidden flex-wrap my-auto space-y-12">
          <div className="w-full text-4xl font-semibold">
            {props.data.title}
          </div>

          <div className="w-full text-3xl font-light">
            {props.data.subtitle}
          </div>

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.description }} />

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.subdescription }} />
        </div>
        <img alt="" src={props.data.imagePath} className={`sm:h-500 h-40 my-auto ${props.direction === "left" ? "order-first sm:mr-20" : "sm:ml-20"}`} />
        <div className="sm:hidden flex flex-wrap my-auto justfiy-center mx-4">
          <div className="w-full text-xl font-semibold">
            {props.data.title}
          </div>

          <div className="w-full text-lg font-light">
            {props.data.subtitle}
          </div>
        </div>
      </div>

      <div className="w-full text-sm font-light sm:hidden block" dangerouslySetInnerHTML={{ __html: props.data.description }} />

      <div className="w-full text-sm font-light sm:hidden block" dangerouslySetInnerHTML={{ __html: props.data.subdescription }} />

      <div className="w-full max-w-4xl mx-auto">
        <div className={`w-full max-w-4xl`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
