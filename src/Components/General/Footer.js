import React from "react";
import "./css/Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer__logo__container">
        <div className="logo">LOGO</div>
        <div className="copyright__container">
          &copy; {year} All rights reserved
        </div>
      </div>
      <div className="footer__container">
        <div className="address__container">
          <h3>Head Office</h3>
          <p className="company__name">FAM Medical Engineering and Family</p>
          <p>Mbezi Mwisho Msakuzi</p>
          <p>P.O.Box 00000</p>
          <p>Dar Es Salaam, Tanzania</p>
          <p className="tele__para">Tel: +255 787 022 047</p>
        </div>
        <div className="visitorCounter__container">
          <h3>Visitor Counter</h3>
          <table>
            <tr>
              <td>
                <p>Today: </p>
              </td>
              <td>
                <span className="count">0</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>This Week: </p>
              </td>
              <td>
                <span className="count">0</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>This Month: </p>
              </td>
              <td>
                <span className="count">0</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Total: </p>
              </td>
              <td>
                <span className="count">0</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="workingDays__container">
          <h3>Working Days</h3>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
        <div className="workingHours__container">
          <h3>Working Hours</h3>
          <p>8.00 - 16.00 hrs</p>
          <p>8.00 - 16.00 hrs</p>
          <p>8.00 - 16.00 hrs</p>
          <p>8.00 - 16.00 hrs</p>
          <p>8.00 - 16.00 hrs</p>
          <p>8.00 - 16.00 hrs</p>
        </div>
      </div>
      <div className="footer__socialMedia__container">
        <div></div>
      </div>
      <div className="email__socialMedia">
        <div className="email__container">
          <p className="email">
            <AiOutlineMail className="email__icon" />
            info@famengineering.com
          </p>
        </div>
        <div className="socialMedia__container">
          <span>
            <AiFillYoutube className="social__m youtube" />
          </span>
          <span>
            <AiFillFacebook className="social__m facebook" />
          </span>
          <span>
            <AiFillInstagram className="social__m instagram" />
          </span>
          <span>
            <FaLinkedinIn className="social__m linkedIn" />
          </span>
          <span className="at__linksm">@famengineering</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
