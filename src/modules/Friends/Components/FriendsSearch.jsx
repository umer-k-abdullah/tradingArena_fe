import React from "react";
import { FormikProvider, useFormik, Form, Field } from "formik";
import { object, string } from "yup";
import { FaSearch } from "react-icons/fa"; // Example icon from react-icons

const searchSchema = object({
  identifier: string().required(),
});

const FriendsSearch = ({ setSearchTerm }) => {
  const formik = useFormik({
    initialValues: {
      identifier: "",
    },
    validationSchema: searchSchema,
    onSubmit: () => {},
  });

  return (
    <div className="w-full h-full font-poppins">
      <FormikProvider value={formik}>
        <Form className="w-full h-full mx-auto">
          <div className="flex justify-center items-center gap-[10px] p-2 mx-auto">
            <div className="relative w-[70%] p-2 border-[2px] border-[#EDF1FA] rounded-[10px]">
              <Field
                name="identifier"
                className="w-full bg-transparent pl-10 outline-none text-[18px] leading-[27px] py-1 text-[#EDF1FA80]"
                placeholder="Search"
                onChange={(e) => {
                  formik.handleChange(e);
                  setSearchTerm(e.target.value);
                }}
                value={formik.values.identifier}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default FriendsSearch;
