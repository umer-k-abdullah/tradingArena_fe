import { FormikProvider, useFormik, Form, Field } from "formik";
import React from "react";
import { string, object } from "yup";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const signupSchema = object({
  email: string().required(),
  password: string().required(),
  confirmPassword: string().required(),
});

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/signUp", values);
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
      rightIcon: "/assets/icons/info.png",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      leftIcon: "/assets/icons/lock.png",
      rightIcon: "/assets/icons/hide.png",
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Re-type password",
      leftIcon: "/assets/icons/lock.png",
      rightIcon: "/assets/icons/hide.png",
    },
  ];

  const { touched, error, values } = formik;

  return (
    <div className="">
      <h1 className="font-zen-dots text-[40px] leading-[48.76px] text-center mb-3 text-white">
        SIGN UP
      </h1>
      <FormikProvider className="" value={formik}>
        <Form className="flex flex-col justify-center items-center gap-[20px]">
          {formFields.map((ele, index) => (
            <div
              key={index}
              className="w-[500px] h-[77px] flex justify-normal gap-[10px] items-center input-shadow rounded-[10px] px-3"
            >
              <img
                src={ele.leftIcon}
                className="w-[30px] h-[30px] opacity-50"
                alt=""
              />
              <Field
                name={ele.name}
                type={ele.type}
                className="h-[30px] w-[80%] bg-transparent outline-none text-bold text-[18px] leading-[28.82px] text-white"
                placeholder={ele.placeholder}
              />
              <img src={ele.rightIcon} className="opacity-50 w-[22px]" alt="" />
            </div>
          ))}
          <button
            type="submit"
            className="font-zen-dots w-full h-[77px] bg-themeGreen text-black form-btn-shadow rounded-[10px] font-bold text-[20px] leading-[24.38px]"
          >
            SIGN UP
          </button>
          <p className="text-white">
            Already have an account?{" "}
            <span
              className="text-themeGreen font-bold underline cursor-pointer font-zen-dots"
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
          <div className="w-full h-[77px] rounded-[10px] input-shadow px-10 flex justify-normal items-center gap-[30px] cursor-pointer">
            <img className="h-7" src="/assets/icons/Google-icon.png" alt="" />
            <p className="text-white font-medium text-[20px] leading-[32.02px]">
              Continue with Google
            </p>
          </div>
          <div className="w-full h-[77px]  rounded-[10px] input-shadow px-10 flex justify-normal items-center gap-[25px] cursor-pointer">
            <img className="h-9" src="/assets/icons/facebook-icon.png" alt="" />
            <p className="text-white font-medium text-[20px] leading-[32.02px]">
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
