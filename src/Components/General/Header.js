import React from "react";
import "./css/Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import Logo from "../Images/logo.png";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo_container">
        <Link to="/" className="logo__main__container">
          <img src={Logo} alt="" className="logo__main__img" />
        </Link>
      </div>
      <div className="search_container">
        <input type="text" placeholder="Search" />
        <IoSearchCircleSharp className="search__icon" />
      </div>
      <div className="navigation__container">
        <nav>
          <Link className="links" to="/">
            Home
          </Link>
          <Link to="/service" className="links">
            Services
          </Link>
          <Link to="/products" className="links">
            Products
          </Link>
          <Link to="/gallery" className="links">
            Gallery
          </Link>
          <Link to="/about" className="links">
            About
          </Link>
          <Link to="/contact" className="links">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
