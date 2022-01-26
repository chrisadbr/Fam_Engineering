import React from "react";
import "./css/ContactMidSection.css";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import schedule from "../Images/time_management.jpg";

const ContactMidSection = () => {
  return (
    <div className="contact__mid__section">
      <div className="contact__items__container">
        <div className="social__media__container">
          <FaFacebook className="social__contact facebook" />
          <AiFillTwitterCircle className="social__contact twitter" />
          <AiFillInstagram className="social__contact instagram" />
          <TiSocialYoutubeCircular className="social__contact youtube" />
          <FaLinkedinIn className="social__contact linkedIn" />
        </div>
        <div className="schedule__container">
          <div className="schedule__table">
            <div className="schedule__table__content">
              <div className="schedule__table__header">
                <h2>Hours of Operations</h2>
              </div>
              <div className="schedule__table__weekdays">
                <div>Monday - Saturday 8.00hrs - 16.00hrs</div>
              </div>
              <div className="schedule__table__weekend">
                <div>Sunday - Closed</div>
              </div>
              <div className="schedule__table__holidays">
                <div>Holidays - Closed</div>
              </div>
            </div>
          </div>
          <div className="schedule__img">
            <img src={schedule} alt="" />
          </div>
        </div>
        <div className="contact__bottom__container">
          <div className="contact__pl__container">
            <div className="contact__pl__inner">
              <div className="contact__phone">
                <span className="phone__icon">
                  <FaPhoneAlt className="phone__icon__fa" />
                </span>
                <span className="contact__phone__number">+255 787 022 047</span>
              </div>
              <div className="contact__location">
                <span className="location__icon">
                  <HiLocationMarker className="location__icon__hi" />
                </span>
                <span className="contact__location__area">
                  Mbezi Mwisho Msakuzi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMidSection;
