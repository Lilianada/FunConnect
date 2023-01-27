import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import AppStore from "../../assets/images/AppleVector.svg";
import GooglePlay from "../../assets/images/GoogleVector.svg";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./style.scss";

export default function Header () {
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
        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/">
          <img src={Logo} alt="FunConnect Logo" />
        </NavLink>
        <nav className="navbar">
          <ul className="navList">
            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/about">
                About Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <a href="/" className="headerDownload_btn">
            Download Now
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="mobileHeader">
        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/">
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

          {/* Navigation List */}
          <ul className="navList">
            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/blog">
                Blog
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/about">
                About Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink className={({ isActive }) => (isActive ? "activeLink" : "navLink")} to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <ul className="navList">
            <li className="navItem">
              <h6 className="navTitle">Get in touch</h6>
            </li>
            <li className="navItem">
              <h6 className="navTitle">Connectwithfunconnect@gmail.com</h6>
            </li>
          </ul>

          {/* Download Buttons */}
          <div className="downloadApp_btns">
            <a href="/" className="appStore">
              <img src={AppStore} alt="Apple Logo" className="appleLogo" />
              <div className="textWrap">
                <p className="downloadText">Download on the</p>
                <h5 className="appText">App Store</h5>
              </div>
            </a>
            <a href="/" className="googlePlay">
              <img src={GooglePlay} alt="Google Logo" className="appleLogo" />
              <div className="textWrap">
                <p className="downloadText">Download on the</p>
                <h5 className="appText">Google Play</h5>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
