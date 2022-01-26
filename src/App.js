import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Service from "./Components/Services/Service";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Gallery from "./Components/Gallery/Gallery";
import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
