import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Header from "../General/Header";
import CovidAdd from "../General/CovidAdd";
import MidSection from "./MidSection";
import WhatWeDo from "./WhatWeDo";
import Footer from "../General/Footer";
import Patners from "./Patners";
import SecondMidSec from "./SecondMidSec";
import MidNavigationBar from "../General/MidNavigationBar";

function Home() {
  //
  const [showNav, showPage] = useState(false);
  const setMyState = () => {
    const pageHeight = window.pageYOffset;
    console.log(pageHeight);
    if (pageHeight > 773 && pageHeight <= 2451) {
      showPage(true);
    } else {
      showPage(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setMyState);
  }, []);
  return (
    <div>
      <Header />
      <CovidAdd />
      <Banner />
      {/* {showNav && <MidNavigationBar />} */}
      <MidSection />
      <SecondMidSec />
      <WhatWeDo />
      <Patners />
      <Footer />
    </div>
  );
}

export default Home;
