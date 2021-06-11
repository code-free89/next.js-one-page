import React from 'react'
import { Accordion} from 'react-bootstrap'
import { faqdata } from '../../../mockdata/landing/faqsection'

export default function FAQAccordion() {
  return (
    <Accordion>
      {
        faqdata.map((item, index) => (
          <div className="my-2" key={`accordion-${index}`}>
            <Accordion.Toggle eventKey={`${index}`} className="w-full flex items-center sm:space-x-6 space-x-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg font-bold text-gray-600 transition-transform duration-500 ease-in-out transform hover:rotate-45 min-w-10">+</div>
              <div className="sm:text-lg text-sm font-bold">{item.title}</div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`}>
              <div className="sm:px-16 text-left sm:text-md text-sm">{item.description}</div>
            </Accordion.Collapse>
          </div>
        ))
      }
    </Accordion>
  )
}
