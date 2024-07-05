import React from "react";
import SignUp from "./SignUp";
import Signin from "./Signin";
import { useSelector } from "react-redux";

const AuthForm = () => {
  const mode = useSelector((state) => state.authSlider.mode);
  console.log(mode);
  return <div>{mode === "signup" ? <SignUp /> : <Signin />}</div>;
};

export default AuthForm;
