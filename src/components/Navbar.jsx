import React from "react";
import "../styles/navbar.css";
import profilepic from "../assets/img/profilepic.png";
import { Navroutes } from "./Navroutes";
import { navRoutesData } from "../assets/data/navRoutesData";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <div id="navbar-image-container">
          <img src={profilepic} alt="profilepic" id="profilePic" />
          <div>
            9
          </div>
        </div>
        <h2 id="loginUsername">Hi, User</h2>
        <h6 id="userEmail">user@gmail.com</h6>
      </div>
      <div id="navRoutesContainer">
        {navRoutesData.map((data) => {
          return <Navroutes data={data} />;
        })}
      </div>
      <h3 id="navbar-login-btn">Login</h3>
    </div>
  );
};
