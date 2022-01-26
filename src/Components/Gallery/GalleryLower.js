import React from "react";
import "./css/GalleryLower.css";
import { lowerGalleryData } from "../Data";

function GalleryLower() {
  return (
    <div className="gallery__lower">
      <div className="gallery__lower__container">
        <div className="lower__gallery__divider"></div>
        <div className="gallery__lower__images">
          {lowerGalleryData.map(({ id, path }) => (
            <div className={`image__container__${id}`}>
              <img src={path} alt={`image__${id}`} className={`image__${id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryLower;
