import React, { useEffect, useState } from "react";

const Slider = ({ children }) => {
  //for initating animation when component loads
  const [slide, setSlide] = useState(false);
  useEffect(() => {
    setSlide(true);
  }, []);
  const [firstDivTransitioned, setFirstDivTransitioned] = useState(false);

  return (
    <div
      className={`w-[42.52%] h-full  ${
        slide ? "" : " translate-x-[100%]"
      } transition duration-1000 ease-in-out auth-screen`}
      onTransitionEnd={() => setFirstDivTransitioned(true)}
    >
      <div
        className={`${
          firstDivTransitioned
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[20px]"
        } transition duration-1000 ease-in-out w-full h-full flex justify-center items-center overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
