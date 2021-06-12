import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Fragment } from "react";

export default function Footer() {
  const [isOpen, setisOpen] = useState(false);
  function closeModal() {
    setisOpen(false)
  }

  function openModal() {
    setisOpen(true)
  }
  return (
    <div className="bg-black">
      <div className="px-20 py-8 container mx-auto sm:flex items-center justify-between">
        <div className="flex items-center space-x-8 w-full sm:justify-start justify-between">
          <img
            alt=""
            src={
              "//cdn.shopify.com/s/files/1/0047/3907/2090/files/lpg-logo2.jpg?v=10382854549988201948"
            }
            className="sm:h-12 h-8"
          />
          <div className="text-white sm:text-sm text-xs">© UNDERYOURSKINSTHLM 2020</div>
        </div>

        <div className="flex space-x-8 w-full sm:justify-end justify-between sm:mt-0 mt-2">
          <div
            className="text-white text-sm cursor-pointer"
            onClick={openModal}
          >
            Contact Us
          </div>
          <div className="text-white text-sm">Terms</div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="bg-black opacity-75 fixed inset-0" />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm relative">
                <Dialog.Title
                  as="h3"
                  className="text-3xl font-semibold leading-6 text-gray-900 text-center"
                >
                  Contact
                </Dialog.Title>
                <div className="mt-4 space-y-4 text-sm">
                  <p>Do you have questions, idéas or just want to have a chat?</p>
                  <p>Customer service answer your questions within 48 hours on email:<span>&nbsp;</span>hello@underyourskin.se</p>
                  <p>Other&nbsp;enquiries:&nbsp;</p>
                  <p>Showroom<span>&nbsp;</span>(open by appointment):<br/>Riddargatan 23<br/>Stockholm</p>
                  <p>CEO &amp; Founder<br/>Lovisa Hahn&nbsp;<br/>lovisa.hahn@underyourskin.se</p>
                  <p>Press<br/>press@underyourskin.se</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </div>
                <button className="absolute right-3 top-3 w-5 h-5" onClick={closeModal}>
                  <XIcon className="w-full h-full" />
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
