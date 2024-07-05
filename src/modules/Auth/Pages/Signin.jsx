import React from "react";
import Textbox from "../../../components/Textbox";

function Signin() {
  return (
    <div className="absolute top-0 right-0 flex w-[38.33%] h-screen backdrop-blur-md bg-[#010101B3] auth-screen">
      <div className="h-full w-full">
        <form
          action=""
          className="flex flex-col relative gap-5 items-center my-9"
        >
          <button className="absolute top-[8px] left-[50px]">
            <img className="h-5" src="/assets/icons/close.png" alt="" />
          </button>
          <h2 className="font-bold text-3xl text-white">SIGN UP</h2>
          <Textbox
            type={"email"}
            placeholder={"Email"}
            leftIcon={"/assets/icons/email.png"}
          />
          <Textbox type={"password"} placeholder={"Password"} />
          <Textbox type={"password"} placeholder={"Re-type password"} />
          <button className="w-full font-bold input-shadow bg-themeGreen max-w-[80%] flex-1 p-3 rounded-lg">
            SIGN UP
          </button>
          <p className="text-white">
            Already have an account?{" "}
            <span className="text-themeGreen font-bold underline cursor-pointer">
              Sign In Now
            </span>
          </p>
          <div className="flex justify-center w-full items-center gap-3">
            <hr className="w-[35%] border border-gray-300" />
            <span className="text-white">Or</span>
            <hr className="w-[35%] border border-gray-300" />
          </div>
          <button className="relative w-full input-shadow text-white border-2 border-themeGreen bg-themeBlack max-w-[80%] flex-1 p-3 rounded-lg">
            <img
              className="h-7 absolute left-[50px] top-[8px]"
              src="assets/icons/Google-icon.png"
              alt=""
            />
            Continue with Google
          </button>
          <button className="relative w-full input-shadow text-white border-2 border-themeGreen bg-themeBlack max-w-[80%] flex-1 p-3 rounded-lg">
            <img
              className="h-9 absolute left-[45px] top-[6px]"
              src="assets/icons/facebook-icon.png"
              alt=""
            />
            Continue with Facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
