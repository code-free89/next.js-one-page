import React from 'react'
import FAQAccordion from './FAQAccordion'

export default function FAQSection() {
  return (
    <div className="w-full px-20 py-12 container mx-auto text-center">
      <div className="w-full sm:text-4xl text-2xl font-bold">
        Frequently asked questions
      </div>
      <div className="w-full sm:text-2xl text-md font-light mt-4 mb-12">
        Are you still not sure? Find the answers here
      </div>
      <div className="w-full max-w-3xl mx-auto sm:px-0 px-4">
        <FAQAccordion />
      </div>
    </div>
  )
}
