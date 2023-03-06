import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./style.scss";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const isActive = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

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
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
          to="/"
        >
          <img src={Logo} alt="FunConnect Logo" />
        </NavLink>

        <button type="button" className="menuButton">
          <FiMenu size={32} stroke="white" fill="white" onClick={isActive} />
        </button>

        <nav className={`navbar ${showMenu ? "show-navbar" : "navbar"}`}>
          <button type="button" className="closeMenu" onClick={closeMenu}>
            <GrClose />
          </button>
          <ul className="navList">
            <li className="navItem">
              <h6 className="navTitle">Menu</h6>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
