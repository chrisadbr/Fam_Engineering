import React, { useState } from "react";
import "./css/SecondMidSec.css";
import engineerMidSec from "../Images/engineer_installation.jpg";
import { HiChevronRight, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const SecondMidSec = () => {
  const [arrowFwdMid, showArrow] = useState(false);
  return (
    <div className="secondMidSec">
      <div className="secondMidSec__info__container">
        <div className="secondMidSec__photo">
          <img src={engineerMidSec} alt="" className="engineerMidSec" />
        </div>
        <div className="second__info__midSec">
          <h1>Integrity</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            corporis aut eius eveniet maiores dolorem, ab odio ea expedita vel
            voluptas minus hic magni magnam.orem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
          <div className="second__link__container">
            <Link
              to="/service"
              className="second__service__link__mid"
              onMouseOver={() => showArrow(true)}
              onMouseOut={() => showArrow(false)}
            >
              Learn More
              {arrowFwdMid ? (
                <HiArrowRight className="secondMidSec__arrowFwd" />
              ) : (
                <HiChevronRight className="secondMidSec__arrowFwd" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondMidSec;
