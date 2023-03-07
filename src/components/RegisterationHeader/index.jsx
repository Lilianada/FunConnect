import React from "react";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./style.scss";

export default function RegisterationHeader() {

  return (
    <header>
      {/* Desktop Menu */}
      <div className="desktopHeader">
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
          to="/"
        >
          <img src={Logo} alt="FunConnect Logo" />
        </NavLink>

        <nav className="navbar">
          <p>Already have an account?</p>
          <a href="/" className="headerDownload_btn">
            Log in
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="mobileHeader">
        <Header/>
      </div>
    </header>
  );
}
