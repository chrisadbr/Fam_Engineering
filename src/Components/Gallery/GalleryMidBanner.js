import React from "react";
import { Link } from "react-router-dom";
import "./css/GalleryMidBanner.css";

const GalleryMidBanner = () => {
  return (
    <div className="gallery__mid__banner">
      <div className="gallery__mid__content">
        <h1>Make the right decision now</h1>
        <div className="btn__link__mid__gallery">
          <Link to="/contact" className="link__to__service">
            Get Quote now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryMidBanner;
