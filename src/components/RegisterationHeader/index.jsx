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
          to="/"
        >
          <img src={Logo} alt="FunConnect Logo" />
        </NavLink>

        <div className="navItems">
          <p className="loginLink">Already have an account?</p>
          <a href="/" className="loginBtn">
            Log in
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobileHead">
        <Header/>
      </div>
    </header>
  );
}
