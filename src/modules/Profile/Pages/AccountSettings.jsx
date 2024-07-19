import React from "react";
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

function AccountSettings() {
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

  return (
    <div className="w-screen h-screen backdrop-blur-md flex justify-center items-center">
      <div className="w-[73%] h-[85%] bg-[#0d0d0d] border border-themeGray rounded-lg auth-screen relative flex justify-center items-center">
        <i className="text-5xl absolute text-[#FFFFFFCC] top-2 left-2 cursor-pointer">
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
                <div className="w-full flex gap-7">
                  <img
                    src="assets/images/avatar1.png"
                    alt=""
                    className="rounded-full h-32"
                  />
                  <Field
                    type="text"
                    placeholder="Bio"
                    name="bio"
                    className="border border-themeGray input-shadow rounded-lg bg-themeBlack text-white w-full"
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
                <div className="text-white flex justify-between">
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
                        <img src="assets/icons/Google-icon.png" alt="Google" className="h-8"/>
                        <span>Connect with Google</span>
                    </div>
                    <div className="border border-themeGray input-shadow rounded-md bg-themeBlack text-white h-12 cursor-pointer p-2 flex justify-center items-center gap-4">
                        <img src="assets/icons/facebook-icon.png" alt="Facebook" className="h-8"/>
                        <span>Connect with Facebook</span>
                    </div>
                    
                  </div>
                </div>
                <button type="submit" className="bg-themeGreen h-9 w-24 form-btn-shadow font-bold rounded mx-auto mt-4">Save</button>
              </Form>
            </FormikProvider>
          </div>
        </div>

        {/* <div className="bg-gray-900 text-white rounded-lg p-8">
          <Formik
            initialValues={formik.initialValues}
            validationSchema={formik.validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Handle form submission
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex items-center mb-4">
                  <img
                    // src="/profile-pic.jpg"
                    alt="Profile Picture"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <Field
                      type="text"
                      name="bio"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Bio"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Personal Information
                  </h2>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <Field
                      type="text"
                      name="firstName"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <Field
                      type="text"
                      name="lastName"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-4a1 1 0 11-2 0 1 1 0 012 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <Field
                      type="text"
                      name="username"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Username"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V4c0-1.1-.9-2-2-2H6zm2 14a2 2 0 012-2H8a2 2 0 012 2zm6-2a2 2 0 01-2 2H8a2 2 0 012-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <Field
                      type="date"
                      name="dob"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Date of Birth"
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <Field
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />
                    <label htmlFor="male" className="mr-4">
                      Male
                    </label>
                    <Field
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-2"
                    />
                    <label htmlFor="female" className="mr-4">
                      Female
                    </label>
                    <Field
                      type="radio"
                      name="gender"
                      value="other"
                      className="mr-2"
                    />
                    <label htmlFor="other" className="mr-4">
                      Other
                    </label>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Social Accounts</h2>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 18.215l7.997-12.331A2 2 0 0012.596 3H7.404a2 2 0 00-1.997 2.884L2.003 5.884z" />
                      </svg>
                    </span>
                    <Field
                      type="email"
                      name="email"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 19 2 14.18 2 3z" />
                      </svg>
                    </span>
                    <Field
                      type="text"
                      name="phone"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Phone"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Verification Methods
                  </h2>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 003.17 15H7.5V17a1 1 0 001 1h5a1 1 0 001-1v-2.5H16.83a1 1 0 00.998-.894l.707-.707V6a6 6 0 00-6-6zm4.5 9a.5.5 0 10-1 0 .5.5 0 001 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    >
                      Connected with Google
                    </button>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    >
                      Connect with Facebook
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div> */}
      </div>
    </div>
  );
}

export default AccountSettings;
