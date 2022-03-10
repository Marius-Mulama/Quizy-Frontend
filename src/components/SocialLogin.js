import React from "react";
import "../App.css";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import Outlook from "../images/Outlook.png";

function SocialLogin() {
  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const outlook = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const apple = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <>
      <div className="loginButton google" onClick={google}>
        <img src={Google} alt="" className="icon" />
        LogIn with Google
      </div>

      <div className="loginButton outlook" onClick={outlook}>
        <img src={Outlook} alt="" className="icon" />
        LogIn with Outlook
      </div>

      <div className="loginButton apple" onClick={apple}>
        <img src={Apple} alt="" className="icon" />
        LogIn with Apple
      </div>
    </>
  );
}

export default SocialLogin;
