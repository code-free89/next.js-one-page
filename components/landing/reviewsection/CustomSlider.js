import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import Slider from "react-slick";
import { reviews } from "../../../mockdata/landing/reviewsection";
import Review from "./Review";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowRightIcon className="text-secondary w-6 h-6 absolute right-0 top-20 z-50 cursor-pointer" onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowLeftIcon className="text-secondary w-6 h-6 absolute left-0 top-20 z-50 cursor-pointer" onClick={onClick} />
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default function CustomSlider() {
  return (
    <div className="w-full">
      <Slider {...settings} className="px-5">
        {
          reviews.map((item, index) => (
            <div key={`review-${index}`}>
              <Review avatarPath={item.avatarPath} title={item.title} description={item.description} name={item.name} />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
