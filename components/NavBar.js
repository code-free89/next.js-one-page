import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "About the Products", href: "about", current: true },
  { name: "How a detox works", href: "howworks", current: false },
  { name: "Ingredients", href: "ingredients", current: false },
  { name: "Reviews", href: "reviews", current: false },
  { name: "FAQ", href: "faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar(props) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="sm:py-8 py-6 relative sm:bg-white bg-yellow-light">
            <div className="absolute left-0 top-0 bg-yellow-light h-full w-2/5"></div>
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:container mx-auto sm:px-20 pl-12">
                <div className="flex items-center justify-center">
                  <img
                    data-src="//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-logo.jpg?v=1606107443"
                    className="lazyloaded h-8"
                    alt="Logo"
                    src="//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-logo.jpg?v=1606107443"
                  />
                  <div className="sm:text-lg text-sm max-w-200 pl-6">
                    Made in Sweden, organic, vegan & cruelty free
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-lg px-3 py-2 rounded-md text-sm cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        href={item.href}
                        onClick={props.onClick}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "text-lg px-3 py-2 rounded-md text-sm cursor-pointer"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  href={item.href}
                  onClick={props.onClick}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
