import React, { useEffect, useState } from "react";
// import ReactWeather from "react-open-weather";
import { WiCelsius, WiDayStormShowers } from "weather-icons-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./css/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const [arrowStatus, showArrow] = useState(false);
  useEffect(() => {
    // let api = "http://api.openweathermap.org/data/2.5/weather";
    // const apiKey = "ecaeee4219df83c5ff520e3d1acef785";
    const location = document.querySelector(".weather__city");
    // const weather__amt = document.querySelector(".weather__amt");
    location.innerHTML = "Dodoma";
    //
    // navigator.geolocation.getCurrentPosition(getLocation, showError);
    // function getLocation(position) {
    //   let longitude = position.coords.longitude;
    //   let latitude = position.coords.latitude;
    //   let url =
    //     api +
    //     "?lat=" +
    //     latitude +
    //     "&lon=" +
    //     longitude +
    //     "&appid=" +
    //     apiKey +
    //     "&units=metric";
    //   //
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       let temp = data.main.temp;
    //       let place = data.name;
    //       temp = Math.trunc(temp);
    //       weather__amt.innerHTML = temp;
    //       location.innerHTML = place;
    //     });
    // }
    // function showError() {
    //   location.innerHTML = "Dodoma";
    // }
  }, []);
  return (
    <div className="banner__container">
      <div className="weather__container">
        <div className="weather__header">
          <div className="weather__city">Dodoma</div>
          <div className="weather__amt">
            24 {<WiCelsius className="celsius__icon" />}
            <div className="weather__icon">{<WiDayStormShowers />}</div>
          </div>
        </div>
      </div>
      <div className="moto__container">
        <div className="stm__container">
          We are <span className="fam__container__initials">FAM</span> <br />
          Medical Engineering and Family
          <p className="para__details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            reiciendis assumenda inventore pariatur iste eveniet magnam aliquam
            nostrum repellendus deserunt!
          </p>
        </div>
        <div className="btn__container">
          <Link
            className="link__banner__btn"
            to="/about"
            onMouseOver={() => showArrow(true)}
            onMouseOut={() => showArrow(false)}
          >
            Learn More
            {arrowStatus && (
              <HiOutlineArrowRight className="outlineArrowRight" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
