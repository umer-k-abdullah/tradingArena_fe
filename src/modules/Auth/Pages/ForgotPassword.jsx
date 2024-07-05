// import { FormikProvider, useFormik, Form, Field } from "formik";
// import React from "react";
// import { object, string } from "yup";

// const forgotPasswordSchema = object({
//   email: string().email().required(),
// });
// const ForgotPassword = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: forgotPasswordSchema,
//     onSubmit: (values) => console.log(values),
//   });

//   const { error, values, touched } = formik;

//   return (
//     <div className="w-full">
//       <div className=" mt-40 flex flex-col justify-center items-center gap-[30px]">
//         <img
//           src="/assets/icons/forgot-password.png"
//           className="mx-auto"
//           alt=""
//         />
//         <h1 className="font-bold text-[30px] text-white">
//           Forgot your password?
//         </h1>
//         <p className="w-full text-center text-white font-medium text-[18px] leading-[28.82px]">
//           Enter the email associated with your account so we can send you a link
//           to reset your password
//         </p>
//         <FormikProvider value={formik}>
//           <Form>
//             <div
//               //   key={index}
//               className="flex justify-normal gap-[10px] items-center border-2 border-themeGreen input-shadow rounded-[10px] px-3 py-3"
//             >
//               <img
//                 src="/assets/icons/profile.png"
//                 className="w-[30px] h-[30px] opacity-50"
//                 alt=""
//               />
//               <Field
//                 name="email"
//                 type="email"
//                 className="h-[30px] w-[80%] bg-transparent outline-none text-bold text-[18px] leading-[28.82px] text-white"
//                 placeholder="Email address"
//               />
//               <img
//                 src="/assets/icons/info.png"
//                 className="opacity-50 w-[22px]"
//                 alt=""
//               />
//             </div>
//           </Form>
//         </FormikProvider>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
import React from "react";

const ForgotPassword = () => {
  return <div>ForgotPassword</div>;
};

export default ForgotPassword;
