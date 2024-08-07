import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (data) => {
    try {
      console.log("Submitting data:", data); // Log submission data
      await axiosInstance.post(
        `/api/password/resetPassword/${id}/${token}`,
        data
      );
      toast.success("Password changed successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={resetPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col justify-start items-start gap-[25px]">
              <div className="w-[100%] h-[77px] flex justify-normal gap-[10px] items-center input-shadow rounded-[10px] px-3">
                <img
                  src="/assets/icons/icon_lock_2.png"
                  className="w-[30px] h-[30px] opacity-50"
                  alt=""
                />
                <Field
                  name="password"
                  type="password"
                  className="h-[30px] w-[80%] bg-transparent outline-none text-bold text-[18px] leading-[28.82px] text-white"
                  placeholder="Password"
                />
                <img
                  src="/assets/icons/hide_2.png"
                  className="opacity-50 w-[22px]"
                  alt=""
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="w-[100%] h-[77px] flex justify-normal gap-[10px] items-center input-shadow rounded-[10px] px-3">
                <img
                  src="/assets/icons/icon_lock_2.png"
                  className="w-[30px] h-[30px] opacity-50"
                  alt=""
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  className="h-[30px] w-[80%] bg-transparent outline-none text-bold text-[18px] leading-[28.82px] text-white"
                  placeholder="Confirm Password"
                />
                <img
                  src="/assets/icons/hide_2.png"
                  className="opacity-50 w-[22px]"
                  alt=""
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[100%] h-[77px] rounded-[10px] gap-3 bg-themeGreen flex justify-center items-center form-btn-shadow text-[20px] text-black leading-[30px] font-medium"
              >
                Update Password
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
