import React from "react";
import "../styles/login.css";
import loginlogo from "../assets/svg/loginlogo.svg";
import smoketext from "../assets/svg/smoketext.svg";

export const Login = () => {
  return (
    <div id="login-container" className="center-div">
      <div id="login-head">
        <img src={loginlogo} alt="" id="smoke-logo"/>
        <img
          src={smoketext}
          alt=""
          id="smoke-text"
          className="center-div"
        />
      </div>
      <form id="login-form">
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="login-input login-input-last">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <h5 style={{ color: "#464B4E" }}>Forgot Your Password?</h5>
        <button id="login-container-btn">Enter</button>
      </form>
    </div>
  );
};
