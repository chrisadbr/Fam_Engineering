import React from "react";
import "./css/WhatWeDo.css";
import { whatWeDoData } from "../Data";
import { Link } from "react-router-dom";

function WhatWeDo() {
  return (
    <div className="what__we__do">
      <div className="WhatWeDo__header">
        <h1>What we do?</h1>
      </div>
      <div className="whatWeDo__activity">
        {whatWeDoData.map(({ id, path, title, link, text }) => (
          <div className={`${"class" + id}`}>
            <div className="whatwedo__image__container">
              <img src={path} alt={title} className="whatwedo__image" />
              {console.log(path)}
            </div>
            <div className="whatwedo__title">
              <p>{title}</p>
            </div>
            <div className="whatwedo__text">{text}</div>
            <div className="whatwedo__link">
              <Link to="/service" className="link__pTag">
                {link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
