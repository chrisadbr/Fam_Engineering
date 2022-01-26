import React from "react";
import "./css/MeetStaff.css";
import { FaQuoteLeft } from "react-icons/fa";
import gm from "../Images/manager.jpg";
import { staffDetails } from "../Data";

const MeetStaff = () => {
  return (
    <div className="meet__staff">
      <div className="staff__container">
        <div className="staff__header">
          <p>Meet our team</p>
        </div>
        <div className="manager__container">
          <div className="image__container">
            <img src={gm} alt="" className="manager__image" />
          </div>
          <div className="message__container">
            <FaQuoteLeft className="manager__quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              deserunt perferendis incidunt provident molestias laudantium?
              Molestias quae error doloribus voluptate.
            </p>
            <div className="tittle__container">Managing Director</div>
          </div>
        </div>
        <div className="team__container">
          {staffDetails.map(({ path, name, title }) => (
            <div className="staff__ImageContainer">
              <img src={path} alt="" className="staff__image" />
              <div className="staff__name__container">{name}</div>
              <div className="staff__tittleContainer">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetStaff;
