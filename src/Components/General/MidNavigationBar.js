import React from "react";
import "./css/MidNavigationBar.css";
import Logo from "../Images/logo.png";

function MidNavigationBar() {
  return (
    <div classname="midNavigationBar">
      <div className="nav_mid__container">
        <div className="logo__mid__bar">
          <img src={Logo} alt="" />
        </div>
        <div className="links__mid__container">
          <nav>
            <span>Home</span>
            <span>Services</span>
            <span>Product</span>
            <span>Gallery</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MidNavigationBar;
