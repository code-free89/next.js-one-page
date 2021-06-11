import { ArrowRightIcon } from "@heroicons/react/outline"
import classNames from 'classname'
import React from "react"

export default function CustomButton(props) {
  return (
    <button
      type="button"
      className={classNames("inline-flex items-center justify-center min-w-max border border-transparent font-medium rounded-md hover:shadow-xl text-white bg-black focus:outline-none focus:ring-none", props.className)}
    >
      {props.label}
      <ArrowRightIcon className="w-5 h-5 ml-4" />
    </button>
  );
}
