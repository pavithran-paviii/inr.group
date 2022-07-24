import React from "react";

export const Hiddennavbar = () => {
  function minMaxNavbar() {
    let navbar = document.getElementById("navbar");
    if (!navbar.classList.length) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }
  return (
    <div id="hidden-navbar" onClick={minMaxNavbar}>
      <div className="hidden-navbar-lines"></div>
      <div className="hidden-navbar-lines"></div>
      <div className="hidden-navbar-lines"></div>
    </div>
  );
};
