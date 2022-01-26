import React, { useState, useRef } from "react";
import "./css/FrequentQuestions.css";
import Chevron from "./Chevron";
// import { IoIosArrowUp } from "react-icons/io";
// import { questionaire } from "../Data";

const FrequentQuestions = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  //
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }
  const content = useRef(null);
  return (
    <div className="frequentQuestion">
      {/* <div className="header__question">
        <h1>Any Question?</h1>
      </div> */}
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={13} fill={"#777"} />
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
