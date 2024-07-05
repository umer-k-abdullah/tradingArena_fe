import { Field } from "formik";
import React from "react";

const Textbox = ({
  type,
  placeholder,
  name,
  register,
  error,
  leftIcon,
  visibility,
}) => {
  return (
    <div className="w-[83%] h-[77px] flex justify-normal gap-[10px] items-center border-2 border-themeGreen input-shadow rounded-[10px] px-3">
      <img
        src="/assets/icons/email.png"
        className="w-[30px] h-[30px] opacity-50"
        alt=""
      />
      <Field
        name="email"
        type="email"
        className="h-[30px] w-[80%] bg-transparent outline-none text-bold text-[18px] leading-[28.82px] text-white"
        placeholder="Email..."
      />
      <img
        src="/assets/icons/info.png"
        className="opacity-50 w-[22px] h-[22px]"
        alt=""
      />
    </div>
  );
};

export default Textbox;
