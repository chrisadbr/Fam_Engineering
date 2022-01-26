import React from "react";
import "./css/OurServices.css";
import { servicesOffered } from "../Data";

const OurServices = () => {
  return (
    <div className="our__services">
      <div className="our__services__header">
        <h1>Our Services</h1>
      </div>
      <div className="services__offered__container">
        {servicesOffered.map(({ path, title, desc }) => (
          <div className="service__card">
            <div className="service__logo__container">
              <img src={path} alt={title} />
            </div>
            <div className="service__tittle__container">
              <p>{title}</p>
            </div>
            <div className="service__back__container">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
