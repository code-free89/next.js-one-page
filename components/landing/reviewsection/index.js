import React, { useState, useEffect } from "react";
import { reviewcards } from "../../../mockdata/landing/reviewsection";
import CustomSlider from "./CustomSlider";
import ReviewCard from "./ReviewCard";
import Masonry from "react-masonry-css";
import Slider from "react-slick";

export default function ReviewSection() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full px-20 sm:py-12 py-4 container mx-auto text-center">
        <div className="w-full sm:text-4xl text-2xl font-bold">
          Real people. Real results.
        </div>
        <div className="w-full sm:text-2xl text-xl font-light mt-4 mb-12">
          Our products are reviewed by customers worldwide
        </div>
        <CustomSlider />
        <div className="sm:my-12 my-4 text-2xl font-light">
          10 customer reviews
        </div>
      </div>
      {windowSize.width > 400 && (
        <div className="w-full">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {reviewcards.map((item, index) => (
              <ReviewCard key={`reviewcard-${index}`} data={item} />
            ))}
          </Masonry>
        </div>
      )}
      {windowSize.width < 600 && (
        <div className="w-full">
          <Slider {...settings}>
            {
              reviewcards.map((item, index) => (
                <ReviewCard key={`reviewcard-${index}`} data={item} />
              ))
            }
          </Slider>
        </div>
      )}
    </>
  );
}
