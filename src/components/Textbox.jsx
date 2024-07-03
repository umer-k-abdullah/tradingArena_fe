import React from "react";

const Textbox = ({ type, placeholder, name, register, error, leftIcon, visibility }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-center">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          {...register}
          aria-invalid={error ? "true" : "false"}
          className={"relative bg-[#010101] rounded-lg text-sm p-3 border-2 border-[#01E375] input-shadow focus:outline-none text-white max-w-[80%] flex-1"}
        />
        {leftIcon && (
          <img className="h-5  absolute" src={leftIcon} alt="" />
        )}
        {visibility && (
          <div className="absolute right-2 text-slate-400 cursor-pointer">
            {visibility}
          </div>
        )}
      </div>
      {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  );
};

export default Textbox;
