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
          <p className="loginText">Already have an account?</p>
          <NavLink to="/" className="loginLink">
            Log in
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
        <Header className="mobileHead"/>
    </header>
  );
}
