import React from 'react'
import "../App.css";
import Apple from "../images/Apple.png";
import Google from "../images/Google.png";
import Outlook from "../images/Outlook.png";

function SocialLogin() {
  return (
    <>
    <div className="loginButton google">
              <img src={Google} alt="" className="icon" />
              LogIn with Google
            </div>

            <div className="loginButton facebook">
              <img src={Outlook} alt="" className="icon" />
              LogIn with Outlook
            </div>

            <div className="loginButton github">
              <img src={Apple} alt="" className="icon" />
              LogIn with Apple
            </div>
    </>
  )
}

export default SocialLogin