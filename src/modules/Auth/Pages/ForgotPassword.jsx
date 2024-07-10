import { Field, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

const forgotPasswordSchema = object({
  email: string().email().required(),
});

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const { values, error, touched } = formik;

  return (
    <div className="font-poppins flex flex-col justify-center items-center p-10 gap-[25px] h-[58%] w-[89%] text-white">
      <img src="/assets/icons/forgot-password.png" alt="" />
      <h6 className="text-[30px] leading-[45px]">Forgot Your Password?</h6>
      <p className="text-[18px] leading-[27px] text-center">
        Enter the email associated with your account so we can send you a link
        to reset your password
      </p>
      <FormikProvider value={formik}>
        <Form className="w-full flex flex-col justify-start items-start gap-[25px]">
          <div className="w-[100%] h-[77px] border-[2px] px-4 border-[#EDF1FA80] rounded-[10px] gap-3 flex justify-normal items-center">
            <img src="/assets/icons/email_2.png" alt="" />
            <Field
              name="email"
              className="outline-none bg-transparent"
              placeholder="Email address"
            />
          </div>
          <button
            type="submit"
            className="w-[100%] h-[77px] rounded-[10px] gap-3 bg-themeGreen flex justify-center items-center form-btn-shadow text-[20px] text-black leading-[30px] font-medium"
            onClick={() => navigate("/auth/reset_password")}
          >
            Get Email
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ForgotPassword;
