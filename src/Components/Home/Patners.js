import React from "react";
import "./css/Patners.css";
import { IoArrowForwardCircle } from "react-icons/io5";

function Patners() {
  return (
    <div className="patners">
      <div className="joinUs__container">
        <p>Join our Mailing List</p>
      </div>
      <div className="signBox__container">
        <input
          type="email"
          className="maillist__box"
          placeholder="Enter your email"
        />
        <IoArrowForwardCircle className="maillist__arrow" />
      </div>
    </div>
  );
}

export default Patners;
