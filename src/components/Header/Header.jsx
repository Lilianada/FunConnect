import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./Header.scss";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const isActive = () => {
    setShowMenu(!showMenu);
    console.log("clicked");
  };

  const closeMenu = () => {
    setShowMenu(false);
    };

  return (
    <header>
        {/* Desktop Menu */}
      <div className="desktopHeader">
        <Link to="/">
          <img src={Logo} alt="FunConnect Logo" />
        </Link>
        <nav className="navbar">
          <ul className="navList">
            <li className="navItem">
              <Link to="/blog" className="navLink">
                Blog
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <a href="/" className="downloadApp">
            Download Now
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="mobileHeader">
        <Link to="/">
          <img src={Logo} alt="FunConnect Logo" />
        </Link>
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
              <Link to="/blog" className="navLink">
                Blog
              </Link>
            </li>

            <li className="navItem">
              <Link to="/about" className="navLink">
                About Us
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact Us
              </Link>
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
          
        </nav>
      </div>
    </header>
  );
}
