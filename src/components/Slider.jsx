import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../modules/Auth/Pages/AuthForm";
import { IoClose } from "react-icons/io5";
import { handleOnCloseSlider } from "../app/slider";

const Slider = () => {
  const showSlider = useSelector((state) => state.slider.showSlider);
  const [firstDivTransitioned, setFirstDivTransitioned] = useState(false);
  const [secondDivTransitioned, setSecondDivTransitioned] = useState(false);
  const dispatch = useDispatch();
  const handleOnClose = () => {
    dispatch(handleOnCloseSlider());
    setFirstDivTransitioned(false);
    setSecondDivTransitioned(false);
  };

  useEffect(() => {
    if (showSlider) {
      setFirstDivTransitioned(false);
      setSecondDivTransitioned(false);
    }
  }, [showSlider]);

  const handleFirstDivTransitionEnd = () => {
    setFirstDivTransitioned(true);
  };

  const handleSecondDivTransitionEnd = () => {
    setSecondDivTransitioned(true);
  };

  useEffect(() => {
    if (showSlider && firstDivTransitioned && secondDivTransitioned) {
      const fadeUpTransition = setTimeout(() => {
        setFadeUpTransition(true);
      }, 500);

      return () => clearTimeout(fadeUpTransition);
    }
  }, [showSlider, firstDivTransitioned, secondDivTransitioned]);

  const [fadeUpTransition, setFadeUpTransition] = useState(false);

  return (
    <div
      className={`absolute right-0 top-0 flex justify-normal items-start w-screen h-screen slider-overlay-transition ${
        showSlider ? "" : "translate-x-[105%]"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-[#01010180] backdrop-blur-md ${
          showSlider ? "translate-x-0" : "translate-x-[105%]"
        } slider-overlay-transition`}
        onTransitionEnd={handleFirstDivTransitionEnd}
        onClick={handleOnClose}
      ></div>
      <div
        className={`absolute top-0 right-0 w-[33%] h-screen bg-[#010101B2] backdrop-blur-md auth-screen z-10 flex flex-col justify-start items-start gap-[10px] p-10 ${
          showSlider && firstDivTransitioned
            ? "translate-x-0"
            : "translate-x-[105%]"
        } slider-transition`}
        onTransitionEnd={handleSecondDivTransitionEnd}
      >
        <div className="absolute top-10 left-5">
          <IoClose
            className="text-white w-[30px] h-[30px] cursor-pointer "
            onClick={handleOnClose}
          />
        </div>
        <div
          className={`w-[83%] absolute top-10 left-12 ${
            showSlider && firstDivTransitioned && secondDivTransitioned
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[20px]"
          } transition duration-1000 ease-in-out`}
        >
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Slider;
