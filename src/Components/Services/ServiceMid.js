import React from "react";
import "./css/ServiceMid.css";
import midServiceImage from "../Images/mid_service_wide.jpg";

const ServiceMid = () => {
  return (
    <div className="serviceMid">
      <div className="service__Mid__First">
        <div className="text__container">
          <p>Provides the best solutions in town</p>
          <div className="get__quote__container">GET QUOTE NOW</div>
        </div>
      </div>
      <div className="serviceInfo__container">
        <img src={midServiceImage} alt="" />
      </div>
    </div>
  );
};

export default ServiceMid;
