import React from "react";
import "./css/CustomerTestimonials.css";
import { FaQuoteLeft } from "react-icons/fa";
import Carousel from "nuka-carousel";
// import Carousel from "react-elastic-carousel";
// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { customerReviews } from "../Data";

const CustomerTestimonials = () => {
  return (
    <div className="customerTestimonial">
      <div className="testimonial__header">
        <h1>Customer reviews</h1>
      </div>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <AiOutlineLeft className="ai__left__arrow" onClick={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <AiOutlineRight className="ai__right__arrow" onClick={nextSlide} />
        )}
      >
        {customerReviews.map(({ path, customer_name, comment }) => (
          <div className="customer__reviews__container">
            <div className="customer__review__svg">
              <div className="customer__photo__container">
                <img src={path} alt={customer_name} className="customerImg" />
              </div>
            </div>
            <div className="customer__review__container">
              <FaQuoteLeft className="customer__quote__left" />
              <p>{comment}</p>
              <div className="customer__name__container">
                <p>{customer_name}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerTestimonials;
