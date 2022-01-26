import React from "react";
import Header from "../General/Header";
import CovidAdd from "../General/CovidAdd";
import ContactBanner from "./ContactBanner";
import ContactMidSection from "./ContactMidSection";
import ContactUs from "./ContactUs";
import ContactTaper from "./ContactTaper";
import Footer from "../General/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <CovidAdd />
      <ContactBanner />
      <ContactMidSection />
      <ContactUs />
      <ContactTaper />
      <Footer />
    </div>
  );
};

export default Contact;
