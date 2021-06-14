import React, { useState, useEffect } from 'react'

export default function Ingredient(props) {
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

  return (
    <div className="space-y-6">
      <div className={`w-full flex justify-between max-w-4xl mx-auto`}>
        <div className="w-full max-w-xl sm:flex hidden flex-wrap my-auto space-y-12">
          <div className="w-full text-4xl font-semibold">
            {props.data.title}
          </div>

          <div className="w-full text-3xl font-light">
            {props.data.subtitle}
          </div>

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.description }} />

          <div className="w-full text-lg font-light" dangerouslySetInnerHTML={{ __html: props.data.subdescription }} />
        </div>
        <img alt="" src={`${process.env.ImageKitURL}${windowSize.width > 600 ? 'tr:h-500' : 'tr:h-150'}/${props.data.imagePath}`} className={`my-auto ${props.direction === "left" ? "order-first sm:mr-20" : "sm:ml-20"}`} />
        <div className="sm:hidden flex flex-wrap my-auto justfiy-center mx-4">
          <div className="w-full text-xl font-semibold">
            {props.data.title}
          </div>

          <div className="w-full text-lg font-light">
            {props.data.subtitle}
          </div>
        </div>
      </div>

      <div className="w-full text-sm font-light sm:hidden block" dangerouslySetInnerHTML={{ __html: props.data.description }} />

      <div className="w-full text-sm font-light sm:hidden block" dangerouslySetInnerHTML={{ __html: props.data.subdescription }} />

      <div className="w-full max-w-4xl mx-auto">
        <div className={`w-full max-w-4xl`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
