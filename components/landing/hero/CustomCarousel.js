import React, { useState } from "react";
import { product_details } from "../../../mockdata/herosection";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import Slider from "react-slick";

export default function CustomCarousel() {
  const [mainslider, setmainslider] = useState();
  const [thumbnailslider, setthumbnailslider] = useState();

  const mainSettings = {
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const thumbSettings = {
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  }

  const prevImage = () => {
    mainslider.slickPrev();
  }

  const nextImage = () => {
    mainslider.slickNext();
  }

  return (
    <div className="px-8">
      <div className="w-full relative">
        <Slider
          asNavFor={thumbnailslider}
          ref={slider => (setmainslider(slider))}
          {...mainSettings}
        >
          {
            product_details.mockupImages.map((item, index) => (
              <div key={`main-slider-${index}`} className="w-full h-600">
                <img alt="" src={item} className="h-full mx-auto" />
              </div>
            ))
          }
        </Slider>
        <Slider
          asNavFor={mainslider}
          ref={slider => (setthumbnailslider(slider))}
          className="mt-12 mr-32"
          {...thumbSettings}
        >
          {
            product_details.mockupImages.map((item, index) => (
              <div key={`main-slider-${index}`} className="w-full">
                <img alt="" src={item} className="w-20 h-20 mx-auto" />
              </div>
            ))
          }
        </Slider>
        <div className="absolute right-0 bottom-10 flex items-center space-x-8">
          <ArrowLeftIcon className="w-5 h-5 text-lg cursor-pointer" onClick={prevImage} />
          <ArrowRightIcon className="w-5 h-5 text-lg cursor-pointer" onClick={nextImage} />
        </div>
      </div>
    </div>
  );
}
