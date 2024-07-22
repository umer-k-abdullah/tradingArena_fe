import React from "react";
import { FormikProvider, useFormik, Form, Field } from "formik";
import { object, string } from "yup";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../../../utils/axios";

const searchSchema = object({
  identifier: string().required(),
});
const SendFriendRequest = () => {
  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.post("/sendFriendRequest", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      identifier: "",
    },
    validationSchema: searchSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <div className="w-full h-full font-poppins">
      <FormikProvider value={formik}>
        <Form className="w-full h-full mx-auto">
          <div className="flex justify-center items-center gap-[10px] p-2 mx-auto">
            <div className="relative w-[50%] p-2 border-[2px] border-[#EDF1FA] rounded-[10px]">
              <Field
                name="identifier"
                className="w-full bg-transparent pl-10 py-1 outline-none text-[18px] leading-[27px] text-[#EDF1FA80]"
                placeholder="Email | Username | Phone"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              type="submit"
              className="px-4 py-3 bg-themeGreen rounded-[10px] flex justify-center items-center text-[20px] leading-[30px] font-medium text-black"
            >
              Add Friend
            </button>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default SendFriendRequest;
