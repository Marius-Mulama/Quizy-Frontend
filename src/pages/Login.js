import React from "react";
import "../App.css";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";

function Login() {
  return (
    <>
      <div className="login">
        <div className="wrapper">

          <div className="left">
          <LoginForm/>
          </div>

          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>

          <div className="right">
            <SocialLogin/>
          </div>
        </div>
      </div>
      </>

  );
}

export default Login;
