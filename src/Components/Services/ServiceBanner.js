import React, { useState, useRef } from "react";
import "./css/ServiceBanner.css";
// import backgroundVideo from "../Images/service_banner_bcg.mp4";
import backgroundBcg from "../Images/service_bcg_banner.mp4";
import { RiPauseCircleLine } from "react-icons/ri";
import { RiPlayCircleLine } from "react-icons/ri";

const ServiceBanner = () => {
  const [play, playVideo] = useState(true);
  const video = document.querySelector(".serviceBannerMp4");
  const videoRef = useRef(null);
  const pauseVideo = () => {
    if (play) {
      videoRef.current.pause();
      playVideo(false);
    }
    // } else {
    //   videoRef.current.play();
    // }
  };
  const playAgain = () => {
    videoRef.current.play();
    playVideo(true);
  };
  return (
    <div className="serviceBanner">
      <video autoPlay loop muted className="serviceBannerMp4" ref={videoRef}>
        <source src={backgroundBcg} type="video/mp4" />
      </video>
      <div className="video__control__container">
        {play ? (
          <RiPauseCircleLine className="video__controls" onClick={pauseVideo} />
        ) : (
          <RiPlayCircleLine className="video__controls" onClick={playAgain} />
        )}
      </div>
      <div className="info__container">
        <span className="info__header">EXPLORE OUR SERVICES</span>
      </div>
    </div>
  );
};

export default ServiceBanner;
