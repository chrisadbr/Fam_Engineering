import React from "react";
import "./css/famHistory.css";
import manager from "../Images/manager.jpg";

const FamHistory = () => {
  return (
    <div className="famHistory">
      <div className="firstSection__container">
        <div className="whoAreWe__Image__container">
          <img src={manager} alt="" className="whoAreWe__Img" />
        </div>
      </div>
      <div className="secondSection__container">
        <div className="header__one">
          <h1>About Us</h1>
        </div>
        <div className="para__container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            magni placeat iste, impedit nisi rem facere vitae ea repudiandae
            blanditiis sequi provident quod sit est omnis fuga voluptates iure
            quisquam eius, possimus maiores, accusantium debitis! Iure
            explicabo, distinctio consequatur delectus quia reiciendis rerum
            perspiciatis molestiae facere doloribus similique excepturi! Nam!
            Quaerat magni placeat iste, impedit nisi rem facere vitae ea
            repudiandae blanditiis sequi provident quod sit est omnis fuga
            voluptates iure quisquam eius, possimus maiores, accusantium
            debitis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamHistory;
