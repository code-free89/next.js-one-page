import { ArrowRightIcon } from "@heroicons/react/outline"
import React from "react"

export default function CustomButton(props) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center min-w-max px-6 py-4 border border-transparent text-lg font-medium rounded-md hover:shadow-lg text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-none"
    >
      {props.label}
      <ArrowRightIcon className="w-5 h-5 ml-4" />
    </button>
  );
}
