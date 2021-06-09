import { CheckIcon } from "@heroicons/react/outline";
import React from "react";
import ReactPlayer from "react-player";
import {
  revolution_description,
  revolution_options,
  videoPath,
} from "../../../mockdata/landing/revolutionsection";

export default function RevolutionSection() {
  return (
    <div className="px-20 py-12 container mx-auto space-y-8 text-center space-y-16">
      <div className="w-full text-5xl font-bold">Revolution in a bottle</div>
      <div className="w-full text-xl max-w-4xl mx-auto">
        We want to eliminate harmful chemicals in skin care We want to eliminate
        harmful chemicals from skincare. The revolution starts here, with
        products that really work.
      </div>
      <ReactPlayer
        url={videoPath}
        controls={true}
        width={"100%"}
        height={"35rem"}
      />
      <div className="w-full grid grid-cols-2 gap-x-16">
        <div className="text-lg flex justify-end w-full">
          <div className="text-left max-w-md">{revolution_description}</div>
        </div>

        <div className="text-lg flex w-full">
          <div className="text-left max-w-md">
            {revolution_options.map((item, index) => (
              <div className="w-full flex items-center" key={`option-${index}`}>
                <CheckIcon className="text-secondary font-dark w-5 h-5 mr-4" />
                <div className="text-lg font-semibold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
