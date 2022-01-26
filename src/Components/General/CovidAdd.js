import React, { useState } from "react";
import "./css/CovidAdd.css";
// import WarningIcon from "@material-ui/icons/Warning";
import { AiOutlineWarning } from "react-icons/ai";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import { Router, Link } from "react-router-dom";

function CovidAdd() {
  let date = new Date();
  date.toString();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [today, day_idx, month_idx, year] = [
    date.getDate(),
    date.getDay(),
    date.getMonth(),
    date.getFullYear(),
  ];
  let current_month = months[month_idx];
  let today_day = days[day_idx];
  //
  const [arrow, displayArrow] = useState(false);
  return (
    <div className="covid">
      <div className="alert__text">
        <p>
          <span className="alert__icon">
            {<AiOutlineWarning className="warning__icon" />}
          </span>
          <span className="news__covid">
            Update news Information about Covid-19
          </span>

          <span
            className="covid__link"
            onMouseOver={() => displayArrow(true)}
            onMouseOut={() => displayArrow(false)}
          >
            Learn more
          </span>
          {arrow ? (
            <ArrowForwardIcon className="arrow__forward" />
          ) : (
            <ArrowForwardIosIcon className="arrow__forward" />
          )}
        </p>
      </div>
      <div className="date__container">
        <p>
          <span className="date__prop">
            {today} {current_month} {year}
          </span>
          <span className="date__day">{today_day}</span>
        </p>
      </div>
    </div>
  );
}

export default CovidAdd;
