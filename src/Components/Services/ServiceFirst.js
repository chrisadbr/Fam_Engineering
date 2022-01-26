import React from "react";
import "./css/ServiceFirst.css";
import maintanance from "../Images/maintainance_service.jpg";

const ServiceFirst = () => {
  return (
    <div className="serviceFirst">
      <div className="serviceFirst__container">
        <div className="maintanance__service__container">
          <img src={maintanance} alt="" />
        </div>
        <div className="maintanance__text__container">
          <div className="serviceFirst__header">
            <h1>Excellent maintanance</h1>
          </div>
          <div className="serviceFirst__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              perferendis, dolores pariatur facilis cum exercitationem dolor non
              error dolorem vero expedita architecto? Ipsam mollitia sequi
              corrupti id accusamus veritatis reprehenderit alias quas officia
              aliquam totam consectetur, nulla at placeat consequatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFirst;
