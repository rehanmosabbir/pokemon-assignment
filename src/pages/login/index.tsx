import HeaderComponent from "@/components/HeaderComponent";
import LoginComponent from "@/components/LoginComponent";
import React from "react";

const Login = () => {
  return (
    <>
      <HeaderComponent />
      <div className="w-full flex justify-center align-center pt-24">
        <LoginComponent />
      </div>
    </>
  );
};

export default Login;
