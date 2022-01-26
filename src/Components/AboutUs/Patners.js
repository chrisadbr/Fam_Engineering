import React from "react";
import "./css/Patners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "nuka-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { patnerLogos } from "../Data";

const Patners = () => {
  return (
    <div className="patners__container">
      <div className="header__container">
        <h1>Our patners</h1>
      </div>
      <div className="logos__container">
        <Carousel
          className="carousel__arrows__patners"
          slidesToShow={4}
          dragging={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <AiOutlineLeft
              className="pt__left__arrow"
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <AiOutlineRight className="pt__right__arrow" onClick={nextSlide} />
          )}
        >
          {patnerLogos.map(({ path }) => (
            <div className="logo__container">
              <img src={path} alt="" className="logo__img" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Patners;
