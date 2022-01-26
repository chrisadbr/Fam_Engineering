import React from "react";
import ServiceBanner from "./ServiceBanner";
import Header from "../General/Header";
import Footer from "../General/Footer";
import CovidAdd from "../General/CovidAdd";
import ServiceFirst from "./ServiceFirst";
import OurServices from "./OurServices";
import CustomerTestimonials from "./CustomerTestimonials";
import ServiceSecond from "./ServiceSecond";
import ServiceMid from "./ServiceMid";

const Service = () => {
  return (
    <div>
      <Header />
      <CovidAdd />
      <ServiceBanner />
      <ServiceFirst />
      <ServiceSecond />
      <ServiceMid />
      <OurServices />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
};

export default Service;
