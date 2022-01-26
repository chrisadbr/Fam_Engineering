import React from "react";
import CovidAdd from "../General/CovidAdd";
import Footer from "../General/Footer";
import Header from "../General/Header";
import AboutBanner from "./AboutBanner";
import FamHistory from "./FamHistory";
// import FrequentQuestions from "./FrequentQuestions";
import MeetStaff from "./MeetStaff";
import Patners from "./Patners";
import Questionaire from "./Questionaire";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <CovidAdd />
      <AboutBanner />
      <FamHistory />
      <Questionaire />
      <MeetStaff />
      <Patners />
      <Footer />
    </div>
  );
};

export default AboutUs;
