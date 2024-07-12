import { FormikProvider, useFormik, Form, Field } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

const restPasswordSchema = object({
  passworrd: string().min(8).required(),
  confirmPassworrd: string().min(8).required(),
});

const ResetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      passworrd: "",
      confirmPassworrd: "",
    },
    validationSchema: restPasswordSchema,
    onSubmit: (values) => console.log(values),
  });

  const formFields = [
    {
      name: "password",
      placeholder: "password",
      leftIcon: "/assets/icons/icon_lock_2.png",
      rightIcon: "/assets/icons/hide_2.png",
      type: "password",
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm password",
      leftIcon: "/assets/icons/icon_lock_2.png",
      rightIcon: "/assets/icons/hide_2.png",
      type: "password",
    },
  ];

  return (
    <div>
      <div className="mx-auto font-poppins text-white h-[59.5%] w-[89%] flex flex-col justify-center items-center gap-[25px]">
        <img src="/assets/icons/key.png" alt="" />
        <h6 className="text-[30px] leading-[45px] text-center w-full">
          Set A New Password
        </h6>
        <p className="font-medium text-[18px] leading-[28.82px] text-center">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
        <FormikProvider value={formik}>
          <Form className="w-full flex flex-col justify-start items-start gap-[25px]">
            {formFields.map((ele, index) => (
              <div
                key={index}
                className="w-[100%] h-[77px] flex justify-normal gap-[10px] items-center input-shadow rounded-[10px] px-3"
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
                <img
                  src={ele.rightIcon}
                  className="opacity-50 w-[22px]"
                  alt=""
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-[100%] h-[77px] rounded-[10px] gap-3 bg-themeGreen flex justify-center items-center form-btn-shadow text-[20px] text-black leading-[30px] font-medium"
              onClick={() => navigate("/")}
            >
              Update Password
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default ResetPassword;
