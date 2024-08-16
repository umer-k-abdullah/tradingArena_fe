import { FormikProvider, useFormik, Form, Field } from "formik";
import React, { useState } from "react";
import { string, object } from "yup";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const signupSchema = object({
  email: string().required(),
  password: string().required(),
  confirmPassword: string().required(),
});

const SignUp = () => {
  const [hide, setIsHide] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/api/auth/signUp", values);
      console.log(response);
      if (response.status == 201) {
        toast.success("user signup successfuly");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  });

  const formFields = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      leftIcon: "/assets/icons/email.png",
      // rightIcon: "/assets/icons/info.png",
    },
    {
      type: hide ? "password" : "text",
      name: "password",
      placeholder: "Password",
      leftIcon: "/assets/icons/lock.png",
      rightIcon: hide ? <IoMdEyeOff /> : <IoMdEye />,
    },
    {
      type: hide ? "password" : "text",
      name: "confirmPassword",
      placeholder: "Re-type password",
      leftIcon: "/assets/icons/lock.png",
      rightIcon: hide ? <IoMdEyeOff /> : <IoMdEye />,
    },
  ];

  const { touched, error, values } = formik;

  return (
    <div className="h-[90%] w-[70%] flex flex-col justify-center">
      <h1 className="font-zen-dots text-[30px] leading-[48.76px] text-center mb-3 text-white">
        SIGN UP
      </h1>
      <FormikProvider className="" value={formik}>
        <Form className="flex flex-col justify-center items-center gap-[15px]" autoComplete="off">
          {formFields.map((ele, index) => (
            <div
              key={index}
              className="w-full h-[55px] flex justify-start gap-[10px] items-center input-shadow rounded-[10px] px-3"
            >
              <img
                src={ele.leftIcon}
                className="w-[20px] h-[20px] opacity-50"
                alt=""
              />
              <Field
                name={ele.name}
                type={ele.type}
                className="h-[30px] w-[85%] bg-black outline-none text-bold text-[16px] leading-[28.82px] text-white"
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
          <button
            type="submit"
            className="font-zen-dots w-full h-[55px] bg-themeGreen text-black form-btn-shadow rounded-[10px] font-bold text-[16px] leading-[24.38px]"
          >
            SIGN UP
          </button>
          <p className="text-white">
            Already have an account?{" "}
            <span
              className="text-themeGreen font-bold underline cursor-pointer font-zen-dots text-[15px]"
              onClick={() => navigate("/")}
            >
              Sign In Now
            </span>
          </p>
          <div className="flex justify-center w-full items-center gap-3">
            <hr className="w-[35%] border border-gray-300" />
            <span className="text-white">Or</span>
            <hr className="w-[35%] border border-gray-300" />
          </div>
          <div className="w-full h-[55px] rounded-[10px] input-shadow px-10 flex justify-center items-center gap-[30px] cursor-pointer">
            <img className="h-6" src="/assets/icons/Google-icon.png" alt="" />
            <p className="text-white font-medium text-[16px] leading-[32.02px]">
              Continue with Google
            </p>
          </div>
          <div className="w-full h-[55px]  rounded-[10px] input-shadow px-10 flex justify-center items-center gap-[25px] cursor-pointer">
            <img className="h-7" src="/assets/icons/facebook-icon.png" alt="" />
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

export default SignUp;
