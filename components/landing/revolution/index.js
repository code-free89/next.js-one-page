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

  const videoOpen = () => {
    setopenVideo(true);
  }
  return (
    <div className="text-center">
      <div className="py-12 pb-80">
        <div className="container space-y-8">
          <div className="w-full text-5xl font-bold">
            Revolution in a bottle
          </div>
          <div className="w-full text-xl max-w-4xl mx-auto">
            We want to eliminate harmful chemicals in skin care We want to
            eliminate harmful chemicals from skincare. The revolution starts
            here, with products that really work.
          </div>
        </div>
      </div>
      <div className="py-12 bg-yellow-light">
        <div className="max-w-6xl mx-auto w-full -mt-80 relative flex justify-center">
          <img alt="" src={imagePath} className="w-full h-500" />
          <div className="absolute top-36 w-full max-w-xl flex flex-wrap justify-center">
            <PlayIcon
              className="w-20 h-20 text-white cursor-pointer"
              onClick={()=>{setopenVideo(true);}}
            />
            <div className="w-full text-center text-white text-5xl font-extrabold">
              It is important to take care of your scalp & your hair
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-16 container mt-10">
          <div className="text-lg flex justify-end w-full">
            <div className="text-left max-w-md">{revolution_description}</div>
          </div>

          <div className="text-lg flex w-full">
            <div className="text-left max-w-md">
              {revolution_options.map((item, index) => (
                <div
                  className="w-full flex items-center"
                  key={`option-${index}`}
                >
                  <CheckIcon className="text-secondary font-dark w-5 h-5 mr-4" />
                  <div className="text-lg font-semibold">{item}</div>
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
            width={"60%"}
            height={"35rem"}
            className="z-50"
          />
          <div
            className="w-8 h-8 bg-black text-white absolute right-10 top-5 cursor-pointer z-50 flex items-center justify-center"
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
