import { FormikProvider, useFormik, Form, Field } from "formik";
import React, { useState } from "react";
import { string, object, boolean } from "yup";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import io from "socket.io-client";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
//import { useSocket } from "../../../context/socketContext";

const SOCKET_URL = "http://localhost:3304";

const signinSchema = object({
  identifier: string().required(),
  password: string().required(),
  rememberMe: boolean(),
});

const Signin = () => {
  const [hide, setIsHide] = useState(true);
  const navigate = useNavigate();
  //const socket = useSocket();

  const handleSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/api/auth/signin", values);
      console.log(response);

      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));

      const socket = io(SOCKET_URL, {
        transports: ["websocket"],
        withCredentials: true,
      });

      socket.emit("authenticate", token);
      navigate("/dashboard");
      toast.success("user signin successfuly");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: signinSchema,
    onSubmit: handleSubmit,
  });

  const formFields = [
    {
      type: "text",
      name: "identifier",
      placeholder: "Email | Username | Phone",
      leftIcon: "/assets/icons/profile.png",
    },
    {
      type: hide ? "password" : "text",
      name: "password",
      placeholder: "Password",
      leftIcon: "/assets/icons/lock.png",
      rightIcon: hide ? <IoMdEyeOff /> : <IoMdEye />,
    },
  ];

  const { touched, error, values } = formik;

  return (
    <div className="h-screen w-[70%] flex flex-col justify-center">
      <h1 className="font-zen-dots text-[30px] leading-[48.76px] text-center mb-3 text-white">
        SIGN IN
      </h1>
      <FormikProvider value={formik}>
        <Form className="flex flex-col justify-center items-center gap-[15px]" autoComplete="off">
          {formFields.map((ele, index) => (
            <div
              key={index}
              className=" h-[55px] flex justify-start gap-[10px] items-center input-shadow rounded-[10px] px-3 w-full"
            >
              <img
                src={ele.leftIcon}
                className="w-[20px] h-[20px] opacity-50"
                alt=""
              />
              <Field
                name={ele.name}
                type={ele.type}
                className="h-[30px] w-[85%] bg-transparent outline-none text-bold text-[16px] leading-[28.82px] text-white"
                placeholder={ele.placeholder}
              />
              <i
                className="text-themeGreen text-opacity-60 text-2xl cursor-pointer"
                onMouseDown={() => setIsHide(false)}
                onMouseUp={()=> setIsHide(true)}
              >
                {ele.rightIcon}
              </i>
            </div>
          ))}
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-normal items-center gap-[10px]">
              <Field
                type="checkbox"
                name="rememberMe"
                id="remember"
                className="appearance-none h-6 w-6 bg-black border-2 border-[#EDF1FA] rounded-lg cursor-pointer"
              />
              <p className="font-medium text-white text-[16px] leading-[28.82px]">
                Remember me
              </p>
            </div>
            <p
              className="underline font-semibold text-white font-poppins text-[15px] cursor-pointer leading-[28.82px]"
              onClick={() => navigate("/forgot_password")}
            >
              forgot your password?
            </p>
          </div>
          <button
            type="submit"
            className="w-full h-[55px] bg-themeGreen text-black form-btn-shadow rounded-[10px] font-bold text-[20px] leading-[24.38px]"
          >
            SIGN IN
          </button>
          <p className="text-white">
            Don't have an account?{" "}
            <span
              className="text-themeGreen font-bold underline text-[14px] cursor-pointer font-zen-dots"
              onClick={() => navigate("/signup")}
            >
              Sign Up Now
            </span>
          </p>
          <div className="flex justify-center w-full items-center gap-3 mt-[10px]">
            <hr className="w-[35%] border border-gray-300" />
            <span className="text-white">Or</span>
            <hr className="w-[35%] border border-gray-300" />
          </div>
          <div className="w-full h-[55px]  rounded-[10px] input-shadow px-10 flex justify-center items-center gap-[30px] cursor-pointer">
            <img className="h-7" src="/assets/icons/Google-icon.png" alt="" />
            <p className="text-white font-medium text-[16px] leading-[32.02px]">
              Continue with Google
            </p>
          </div>
          <div className="w-full h-[55px]  rounded-[10px] input-shadow px-10 flex justify-center items-center gap-[25px] cursor-pointer">
            <img className="h-9" src="/assets/icons/facebook-icon.png" alt="" />
            <p className="text-white font-medium text-[16px] leading-[32.02px]">
              {" "}
              Continue with Facebook
            </p>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default Signin;
