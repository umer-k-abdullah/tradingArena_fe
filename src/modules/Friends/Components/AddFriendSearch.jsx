import { useFormik, FormikProvider, Field, Form } from "formik";
import React from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { object, string } from "yup";
import CustomDropdown from "../../../components/CustomDropdown";

const searchSchema = object({
  identifier: string().required(),
  type: string().required(),
});

const AddFriendSearch = () => {
  const formik = useFormik({
    initialValues: {
      identifier: "",
      type: "username",
    },
    validationSchema: searchSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const searchDropdown = [
    {
      icon: <FaUser className="opacity-50 text-[#7F8080]" />,
      type: "text",
      name: "username",
    },
    {
      icon: <FaPhone />,
      type: "text",
      name: "phoneNumber",
    },
    {
      icon: <MdMail />,
      type: "email",
      name: "email",
    },
  ];

  return (
    <div className="w-[100%]">
      <FormikProvider value={formik} className="">
        <Form
          onSubmit={formik.handleSubmit}
          className="flex justify-normal items-center"
        >
          <div className="flex justify-normal items-center w-[52%]">
            <Field type="text" name="identifier" placeholder="Identifier" />
            {formik.errors.identifier && formik.touched.identifier ? (
              <div>{formik.errors.identifier}</div>
            ) : null}
            <Field
              name="type"
              component={CustomDropdown}
              options={searchDropdown}
            />
            {formik.errors.type && formik.touched.type ? (
              <div>{formik.errors.type}</div>
            ) : null}
          </div>
          <button type="submit">Search</button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default AddFriendSearch;
