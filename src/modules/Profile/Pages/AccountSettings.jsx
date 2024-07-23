import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Field, Form, Formik, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../../../utils/axios";
import axios from "axios";
import { toast } from "react-toastify";

const userSchema = object({
  profileImage: string(),
  bio: string(),
  firstName: string(),
  lastName: string(),
  username: string(),
  dateOfBirth: string(),
  gender: string(),
  phone: string(),
  email: string().email("Invalid email"),
  country: string(),
});

function AccountSettings() {
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const previousRoute = location.state?.from || "dashboard";
  const [userProfile, setUserProfile] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/getProfile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const fetchCountries = async () => {
    const response = await axios.get(
      "https://restfulcountries.com/api/v1/countries",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 1318|1DrmOUYos9sujlHAysZn64oe8jkGH0RbpZ76dWdI                                ",
        },
      }
    );
    setCountries(response?.data?.data);
    // setFlags(response.data.href.flag);
  };

  useEffect(() => {
    fetchUserData();
    fetchCountries();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
      formik.setFieldValue("profileImage", file); // Ensure this is updating correctly
    }
  };

  const handleSubmit = async (values) => {
    try {
      console.log("Form Submitted Values:", values);
      const formData = new FormData();

      // Append only the fields that have values
      if (values.firstName) formData.append("firstName", values.firstName);
      if (values.lastName) formData.append("lastName", values.lastName);
      if (values.bio) formData.append("bio", values.bio);
      if (values.username) formData.append("username", values.username);
      if (values.phone) formData.append("phone", values.phone);
      if (values.dateOfBirth)
        formData.append("dateOfBirth", values.dateOfBirth);
      if (values.gender) formData.append("gender", values.gender);
      if (values.country) formData.append("country", values.country);
      formData.append("profileImage", values.profileImage);

      const token = localStorage.getItem("token");
      const response = await axiosInstance.put("/updateProfile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200) {
        toast.success("User profile updated");
        fetchUserData();
      }
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Error updating profile");
    }
  };

  const formik = useFormik({
    initialValues: {
      profileImage: userProfile?.profileImage || null,
      bio: userProfile?.bio || "",
      firstName: userProfile?.firstName || "",
      lastName: userProfile?.lastName || "",
      username: userProfile?.username || "",
      dateOfBirth: userProfile?.dateOfBirth || "",
      gender: userProfile?.gender || "",
      phone: userProfile?.phone || "",
      email: userProfile?.email || "",
      country: userProfile?.country || "",
    },
    validationSchema: userSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  });

  const handleClosePopup = () => {
    navigate(previousRoute);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit: formikSubmit,
  } = formik;

  return (
    <div className="w-screen h-screen backdrop-blur-md flex justify-center items-center text-white">
      <div className="w-[73%] py-4 bg-[#0d0d0d] border border-themeGray rounded-lg auth-screen relative flex justify-center items-center">
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
          <div className="w-full h-[650px] overflow-y-auto custom-scrollbar pr-4">
            <FormikProvider value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                {/* Form content */}
                <div className="flex justify-start items-center gap-4">
                  <div className="col-span-3 relative w-44 h-44 rounded-[12px] bg-light_blue_400 overflow-hidden">
                    <input
                      type="file"
                      className="opacity-0 w-full h-full cursor-pointer absolute"
                      name="profileImage"
                      onChange={handleImageChange}
                    />
                    {img ? (
                      <img
                        src={img}
                        alt="Selected"
                        className="rounded-full border-[2px] border-black p-1 w-full h-full"
                      />
                    ) : (
                      <img
                        src={
                          userProfile?.profileImage ||
                          "/assets/images/avatar1.png"
                        }
                        alt="Placeholder"
                        className="rounded-full border-[2px] border-black p-1 w-full h-full"
                      />
                    )}
                    <div className="bg-[#D9D9D9] flex justify-center items-center absolute p-1 top-6 right-1 rounded-full w-9 h-9">
                      <img
                        src="/assets/icons/camera.png"
                        className="h-5 "
                        alt=""
                      />
                    </div>
                  </div>
                  <Field
                    name="bio"
                    as="textarea"
                    rows={6}
                    placeholder="Bio"
                    className="w-[81%] h-full p-2 border-[1px] border-gray-300 rounded-lg bg-transparent outline-none input-shadow text-[16px] leading-[24px] text-[#FFFFFF80]"
                  />
                </div>
                <h6 className="font-medium text-[20px] leading-[30px] text-[#EDF1FA] mt-5">
                  Personal Information
                </h6>
                <div className="flex justify-start items-start gap-5 mt-5 w-[100%]">
                  <div className="flex flex-col justify-start items-start gap-5 w-[50%]">
                    <div className="flex px-3 justify-normal items-center w-full input-shadow rounded-lg border-[1px]">
                      <img src="/assets/icons/id_card.png" alt="" />
                      <Field
                        name="firstName"
                        placeholder={userProfile?.firstName || "First Name"}
                        className="w-full bg-transparent py-4 px-4 outline-none"
                      />
                    </div>
                    <div className="flex px-3 justify-normal items-center w-full input-shadow rounded-lg border-[1px]">
                      <img src="/assets/icons/profile_gray.png" alt="" />
                      <Field
                        name="username"
                        placeholder={userProfile?.username || "Username"}
                        className="w-full bg-transparent py-4 px-4 outline-none"
                        disabled={userProfile?.username} // Disable if there's a value
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-5 w-[50%]">
                    <div className="flex px-3 justify-normal items-center w-full input-shadow rounded-lg border-[1px]">
                      <img src="/assets/icons/id_card.png" alt="" />
                      <Field
                        name="lastName"
                        placeholder={userProfile?.lastName || "Last Name"}
                        className="w-full bg-transparent py-4 px-4 outline-none"
                      />
                    </div>
                    <div className="flex px-3 justify-normal items-center w-full input-shadow rounded-lg border-[1px]">
                      <img src="/assets/icons/calender.png" alt="" />
                      <DatePicker
                        selected={
                          values.dateOfBirth
                            ? new Date(values.dateOfBirth)
                            : null
                        }
                        onChange={(date) =>
                          formik.setFieldValue("dateOfBirth", date)
                        }
                        className="w-full bg-transparent py-4 px-4 outline-none"
                        dateFormat="dd/MM/yyyy"
                        placeholderText={
                          userProfile?.dateOfBirth || "dd/MM/yyyy"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-normal items-center mt-7 gap-5">
                  <div className="w-[50%] input-shadow px-2 rounded-md border-[1px] flex justify-between items-center">
                    <div className="flex justify-normal items-center gap-2 px-2 py-4 custom-radio w-[30%]">
                      <Field
                        type="radio"
                        name="gender"
                        className="form-radio"
                        value="male"
                      />
                      <label htmlFor="male" className="text-white">
                        Male
                      </label>
                    </div>
                    <div className="flex justify-normal items-center gap-2 px-2 py-4 custom-radio w-[30%]">
                      <Field
                        type="radio"
                        name="gender"
                        className="form-radio"
                        value="female"
                      />
                      <label htmlFor="female" className="text-white">
                        Female
                      </label>
                    </div>
                    <div className="flex justify-normal items-center gap-2 px-2 py-4 custom-radio w-[30%]">
                      <Field
                        type="radio"
                        name="gender"
                        className="form-radio"
                        value="other"
                      />
                      <label htmlFor="other" className="text-white">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="w-[50%] input-shadow px-2 rounded-md border-[1px]">
                    <Field
                      as="select"
                      name="country"
                      className="w-full bg-transparent py-4 px-4 outline-none"
                    >
                      <option
                        value=""
                        label="Select an option"
                        className="w-full bg-transparent py-4 px-4 outline-none text-black custom-select"
                      />
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          value={country.name}
                          label={country.name}
                          className="w-full bg-transparent py-4 px-4 outline-none text-black custom-select"
                        />
                      ))}
                    </Field>
                  </div>
                </div>
                <h6 className="font-medium text-[20px] leading-[30px] text-[#EDF1FA] mt-5">
                  Contact Information
                </h6>
                <div className="flex justify-start items-start gap-5 mt-5 w-[100%]">
                  <div className="flex px-3 justify-normal items-center w-[50%] input-shadow rounded-lg border-[1px] opacity-50">
                    <img src="/assets/icons/mail.png" alt="" />
                    <Field
                      name="email"
                      placeholder="Email"
                      className="w-full bg-transparent py-4 px-4 outline-none"
                      disabled
                    />
                  </div>
                  <div className="flex px-3 justify-normal items-center w-[50%] input-shadow rounded-lg border-[1px]">
                    <img src="/assets/icons/mail.png" alt="" />
                    <Field
                      name="phone"
                      placeholder="Phone"
                      className="w-full bg-transparent py-4 px-4 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                  <button
                    type="submit"
                    className="bg-themeGreen h-9 w-24 form-btn-shadow font-bold rounded mx-auto mt-4"
                  >
                    Save
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
