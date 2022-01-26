import React from "react";
import "./css/GalleryImages.css";
import midGallery from "./Images/mid_gallery_first.jpg";
import left_gallery_first from "./Images/left_gallery_first.jpg";
import left_gallery_lower from "./Images/left_gallery_lower.jpg";
import right_gallery_first from "./Images/right_gallery_first.jpg";
import right_gallery_lower from "./Images/right_gallery_lower.jpg";

const GalleryImages = () => {
  return (
    <div className="gallery__images">
      <div className="gallery__images__header">
        <h1>Our Gallery</h1>
      </div>
      <div className="gallery__images__container">
        <div className="gallery__images__">
          <div className="left__gallery__first__container">
            <img
              src={left_gallery_first}
              alt=""
              className="left__gallery__first"
            />
          </div>
          <div className="mid__gallery__container">
            <img src={midGallery} alt="midGallery" className="mid__gallery" />
          </div>
          <div className="right__gallery__first__container">
            <img
              src={right_gallery_first}
              alt=""
              className="right__gallery__first"
            />
          </div>
          <div className="left__gallery__lower__container">
            <img
              src={left_gallery_lower}
              alt=""
              className="left__gallery__lower"
            />
          </div>
          <div className="right__gallery__lower__container">
            <img
              src={right_gallery_lower}
              alt=""
              className="right__gallery__lower"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
