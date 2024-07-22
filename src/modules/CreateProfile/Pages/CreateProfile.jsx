import { Field, Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import { number, string, object } from "yup";

const userProfileSchema = object({
  image: string(),
  firstName: string().required(),
  lastName: string().required(),
  phone: string().required(),
  username: string().required(),
  gender: string().required(),
  age: number().required(),
  country: string().required(),
  description: string().required(),
  language: string().required(),
});
const CreateProfile = () => {
  const [img, setImg] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
      formik.setFieldValue("image", file);
    }
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      image: null,
      firstName: "",
      lastName: "",
      phone: "",
      username: "",
      gender: "",
      age: 0,
      coutry: "",
      language: "",
      description: "",
    },
    validationSchema: userProfileSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center bg-black font-poppins text-white">
      <div className="flex justify-start items-start flex-col gap-[20px] h-full w-full p-10 ">
        <h1 className="mx-auto font-zen-dots text-[30px] leading-[36px]">
          ACCOUNT SETTINGS
        </h1>
        <div className="w-full h-full p-5 pl-24 mt-4">
          <FormikProvider value={formik} className="">
            <Form>
              <div className="flex justify-start items-center gap-2">
                <div className="col-span-3 relative w-44 h-44 rounded-[12px] bg-light_blue_400 overflow-hidden">
                  <input
                    type="file"
                    className="opacity-0 w-full h-full cursor-pointer absolute"
                    name="image"
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
                      src={"/assets/images/avatar1.png"}
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
                  name="description"
                  as="textarea"
                  rows={6}
                  placeholder="Bio"
                  className="w-[90%] h-full p-2 border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light_blue_400 focus:border-transparent bg-transparent outline-none input-shadow text-[16px] leading-[24px] text-[#FFFFFF80]"
                />
              </div>
              <div className="flex justify-start items-center gap-2">
                <div className="flex flex-col justify-start items-start gap-2">
                  <div></div>
                </div>
                <div></div>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
