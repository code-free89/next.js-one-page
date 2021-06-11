import { XIcon } from "@heroicons/react/outline";
import { CheckIcon, PlayIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  imagePath,
  revolution_description,
  revolution_options,
  videoPath,
} from "../../../mockdata/landing/revolutionsection";

export default function RevolutionSection() {
  const [openVideo, setopenVideo] = useState(false);

  return (
    <div className="text-center">
      <div className="py-12 pb-80">
        <div className="container smspace-y-8 space-y-4">
          <div className="w-full sm:text-5xl text-2xl font-bold">
            Revolution in a bottle
          </div>
          <div className="w-full sm:text-xl text-md max-w-4xl mx-auto">
            We want to eliminate harmful chemicals in skin care We want to
            eliminate harmful chemicals from skincare. The revolution starts
            here, with products that really work.
          </div>
        </div>
      </div>
      <div className="py-12 bg-yellow-light">
        <div className="max-w-6xl mx-auto w-full -mt-80 relative flex justify-center">
          <img alt="" src={imagePath} className="w-full sm:h-500 h-80" />
          <div className="absolute sm:top-36 top-24 w-full max-w-xl flex flex-wrap justify-center">
            <PlayIcon
              className="sm:w-20 sm:h-20 w-12 h-12 text-white cursor-pointer"
              onClick={()=>{setopenVideo(true);}}
            />
            <div className="w-full text-center text-white sm:text-5xl text-2xl font-extrabold">
              It is important to take care of your scalp & your hair
            </div>
          </div>
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-x-16 sm:gap-y-0 gap-y-4 container mt-10 sm:text-lg text-sm">
          <div className="flex justify-end w-full">
            <div className="text-left max-w-md">{revolution_description}</div>
          </div>

          <div className="flex w-full">
            <div className="text-left max-w-md">
              {revolution_options.map((item, index) => (
                <div
                  className="w-full flex items-center"
                  key={`option-${index}`}
                >
                  <CheckIcon className="text-secondary font-dark w-5 h-5 mr-4" />
                  <div className="sm:text-lg text-sm font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openVideo && (
        <div className="fixed top-0 left-0 -mt-screen w-screen h-screen flex items-center justify-center z-50">
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-90 z-40" />
          <ReactPlayer
            url={videoPath}
            controls={true}
            className="z-50 sm:w-2/3 w-3/4 sm:h-80 h-40"
          />
          <div
            className="w-8 h-8 bg-black text-white absolute sm:right-10 right-5 top-5 cursor-pointer z-50 flex items-center justify-center"
            onClick={() => {
              setopenVideo(false);
            }}
          >
            <XIcon className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
}
