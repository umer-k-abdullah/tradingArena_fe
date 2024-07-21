import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikProvider,
  useFormik,
} from "formik";
import { object, string } from "yup";
import { useLocation, useNavigate } from "react-router-dom";


function AccountSettings() {
  const [closePopup, setIsClosePopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract previous route from state
  const previousRoute = location.state?.from || "dashboard";

  const userSchema = object({
    bio: string(),
    firstName: string(),
    lastName: string(),
    username: string(),
    age: string(),
    gender: string(),
    country: string(),
    language: string(),
    email: string(),
    phone: string(),
    profileImage: string(),
  });

  const formik = useFormik({
    initialValues: {
      bio: "",
      firstName: "",
      lastName: "",
      username: "",
      dob: "",
      male: "",
      female: "",
      other: "",
      country: "",
      language: "",
      email: "",
      phone: "",
      profileImage: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (data) => {};

  const handleClosePopup = () => {
    navigate(previousRoute);
  };
  return (
    <div className="w-screen h-screen backdrop-blur-md flex justify-center items-center">
      <div className="w-[73%] h-[85%] bg-[#0d0d0d] border border-themeGray rounded-lg auth-screen relative flex justify-center items-center">
        <i
          className="text-5xl absolute text-[#FFFFFFCC] top-2 left-2 cursor-pointer"
          onClick={handleClosePopup}
        >
          <IoClose />
        </i>

        <div className="flex flex-col w-[80%] items-center p-5">
          <div>
            <h2 className="text-white font-zen-dots text-3xl mb-5">
              ACCOUNT SETTINGS
            </h2>
          </div>
          <div className="w-full ">
            <FormikProvider value={formik}>
              <Form
                onSubmit={(event) => formik.handleSubmit(event)}
                className="gap-3 flex flex-col"
              >
                {/* <div className="w-full flex gap-7 h-32 items-center">
                  <img
                    src="assets/images/avatar1.png"
                    alt=""
                    className="rounded-full h-28"
                  />
                  <Field
                    type="text"
                    placeholder="Bio"
                    name="bio"
                    className="border border-themeGray input-shadow rounded-lg bg-themeBlack text-white w-full"
                  />
                </div> */}
                <div className="w-full flex gap-7 h-32 items-center">
                  <img
                    src="assets/images/avatar1.png"
                    alt=""
                    className="rounded-full h-32"
                  />
                  <Field
                    as="textarea"
                    placeholder="Bio"
                    name="bio"
                    className="border border-themeGray input-shadow rounded-lg bg-themeBlack text-white w-full h-full resize-none py-2 px-3 placeholder-top"
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <p className="text-white text-lg">Personal Information</p>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                    <Field
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                    <Field
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                    <Field
                      type="text"
                      placeholder="Username"
                      name="username"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                    <Field
                      type="date"
                      placeholder=""
                      name="dob"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                  </div>
                </div>
                {/* <div className="text-white flex justify-between">
                  <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 ">
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      className=""
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 ">
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      className=""
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 ">
                    <Field
                      type="radio"
                      placeholder="First Name"
                      name="gender"
                      value="other"
                      className=""
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div> */}
                <div className="text-white flex justify-between">
                  <div className="relative border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 flex items-center justify-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      id="male"
                      className="hidden"
                    />
                    <label htmlFor="male" className="custom-radio-label">
                      Male
                    </label>
                  </div>

                  <div className="relative border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 flex items-center justify-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                      className="hidden"
                    />
                    <label htmlFor="female" className="custom-radio-label">
                      Female
                    </label>
                  </div>

                  <div className="relative border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 w-[22%] p-2 flex items-center justify-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="other"
                      id="other"
                      className="hidden"
                    />
                    <label htmlFor="other" className="custom-radio-label">
                      Other
                    </label>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <p className="text-white text-lg">Social Accounts</p>
                  <div className="grid grid-cols-2 gap-x-5">
                    <Field
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                    <Field
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-10 p-2"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <p className="text-white text-lg">Verification Methods</p>
                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-12 cursor-pointer p-2 flex justify-center items-center gap-4">
                      <img
                        src="assets/icons/Google-icon.png"
                        alt="Google"
                        className="h-8"
                      />
                      <span>Connect with Google</span>
                    </div>
                    <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-12 cursor-pointer p-2 flex justify-center items-center gap-4">
                      <img
                        src="assets/icons/facebook-icon.png"
                        alt="Facebook"
                        className="h-8"
                      />
                      <span>Connect with Facebook</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-themeGreen h-9 w-24 form-btn-shadow font-bold rounded mx-auto mt-4"
                >
                  Save
                </button>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
