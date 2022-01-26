import React from "react";
import GalleryBanner from "./GalleryBanner";
import CovidAdd from "../General/CovidAdd";
import Header from "../General/Header";
import GalleryImages from "./GalleryImages";
import GalleryMidBanner from "./GalleryMidBanner";
import GalleryLower from "./GalleryLower";
import Footer from "../General/Footer";

const Gallery = () => {
  return (
    <div>
      <Header />
      <CovidAdd />
      <GalleryBanner />
      <GalleryImages />
      <GalleryMidBanner />
      <GalleryLower />
      <Footer />
    </div>
  );
};

export default Gallery;
