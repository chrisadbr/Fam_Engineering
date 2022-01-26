import React, { useRef, useEffect, useState } from "react";
import "./css/ContactUs.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNhZGJyIiwiYSI6ImNrd3QweHM4ZzBkc2YydG95aDZkb3N5djEifQ.7TrHf2HZcWAhfbP_GipNtQ";
const ContactUs = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(39.2879);
  const [lat, setLat] = useState(-6.8186);
  const [zoom, setZoom] = useState(15);
  //
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  //
  return (
    <div className="contact__us">
      <div className="contact__form__container">
        <div className="contact__form">
          <div className="contact__form__name__container">
            <div className="contact__first__name">
              <input type="text" placeholder="Enter your firstname" />
            </div>
            <div className="contact__last__name">
              <input type="text" placeholder="Enter your lastname" />
            </div>
          </div>
          <div className="contact__form__email__container">
            <div className="contact__form__email">
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="contact__form__comment__container">
            <div className="contact__form__comment">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Comment"
              ></textarea>
            </div>
          </div>
          <div className="contact__form__submit__container">
            <button className="contact__form__submit">Send Message</button>
          </div>
        </div>
      </div>
      <div className="contact__map__container">
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
};

export default ContactUs;
