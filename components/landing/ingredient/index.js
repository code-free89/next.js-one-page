import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React from 'react'
import { product_details } from '../../../mockdata/herosection'
import { ingredients } from '../../../mockdata/landing/ingredientsection'
import CustomButton from '../../common/Button'
import StarRating from '../../common/StarRating'
import Ingredient from './Ingredient'

export default function IngredientSection() {
  return (
    <div className="px-20 py-12 container mx-auto space-y-8">
      <div className="w-full text-5xl font-bold text-center">About the Products</div>
      <div className="w-full text-xl max-w-lg mx-auto text-center">Under Your Skin uses advanced stem cell technology to extract the antioxidant-rich extract from milk thistle.</div>
      <div className="space-y-12">
        {
          ingredients.map((item, index) => (
            <Ingredient key={`ingredient-${index}`} data={item} direction={index % 2 === 0 ? "right" : "left"} >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full text-sm font-light rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      -<span className="ml-4">See complete list of ingredients</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-4 h-4 ml-3`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition-height duration-500"
                      enterFrom="h-0"
                      enterTo="h-full"
                      leave="transition-height duration-75"
                      leaveFrom="h-full"
                      leaveTo="h-0"
                    >
                      <div className={`p-5 text-sm text-gray-500 bg-yellow-normal rounded-lg mt-2`}>
                        {item.list}
                      </div>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </Ingredient>
          ))
        }
      </div>
      <div className="w-full flex flex-wrap justify-center text-center">
        <div className="w-full text-2xl font-bold">What are you waiting for?</div>
        <div className="w-full text-2xl font-light">Get this kit for only SEK 569</div>
        <div className="my-4 text-center w-full h-16">
          <CustomButton label="BUY DETOX KIT" className="px-11 py-3" />
        </div>
        <div className="w-full flex items-center justify-center space-x-8">
          <StarRating />
          <div className="text-lg">{product_details.reviews} reviews</div>
        </div>
      </div>
    </div>
  )
}
