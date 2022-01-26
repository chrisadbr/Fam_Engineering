import React, { useState } from "react";
import "./css/Midsection.css";
import nurseMidSec from "../Images/nurse_midsec.jpg";
import { HiChevronRight, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function MidSection() {
  const [arrowFwdMid, showArrow] = useState(false);
  return (
    <div className="midsection">
      <div className="midsection__info__container">
        <div className="info__midSec">
          <h1>Best service</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            corporis aut eius eveniet maiores dolorem, ab odio ea expedita vel
            voluptas minus hic magni magnam.orem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
          <div className="mid__link__container">
            <Link
              to="/service"
              className="service__link__mid"
              onMouseOver={() => showArrow(true)}
              onMouseOut={() => showArrow(false)}
            >
              Learn More
              {arrowFwdMid ? (
                <HiArrowRight className="midSec__arrowFwd" />
              ) : (
                <HiChevronRight className="midSec__arrowFwd" />
              )}
            </Link>
          </div>
        </div>
        <div className="midSection__photo">
          <img src={nurseMidSec} alt="" className="nurse__ImgMid" />
        </div>
      </div>
    </div>
  );
}

export default MidSection;
