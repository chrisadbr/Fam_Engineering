import React from "react";
import training from "../Images/training_service.jpg";
import "./css/ServiceSecond.css";

const ServiceSecond = () => {
  return (
    <div className="serviceSecond">
      <div className="serviceSecond__container">
        <div className="training__service__container">
          <img src={training} alt="" />
        </div>
        <div className="training__text__container">
          <div className="serviceSecond__header">
            <h1>Training services</h1>
          </div>
          <div className="serviceSecond__text">
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

export default ServiceSecond;
