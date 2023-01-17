import React, { useState } from "react";
import { Link } from "react-router-dom";
import {GrClose} from "react-icons/gr";
import {FiMenu} from "react-icons/fi";
import AppStore from "../../assets/images/AppleVector.svg";
import GooglePlay from "../../assets/images/GoogleVector.svg";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./Header.scss";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const isActive = () => {
        setShowMenu(!showMenu);
        console.log("clicked");
    }

    return (
        <header>

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
            </div>

            <div className="mobileHeader">
                <Link to="/">
                    <img src={Logo} alt="FunConnect Logo" />
                </Link>
                <div className="menuButton">
                    <FiMenu size={32} stroke="white" fill="white"  onClick={isActive}/>
                </div>

                <nav className={`navbar ${showMenu ? "show-navbar" : "navbar"}`}>
                    <div className="closeMenu">
                        <GrClose />
                    </div>
                    <ul className="navList">
                        <li className="navItem">
                            <h6 className="navTitle">
                                Menu
                            </h6>
                        </li>
                    </ul>
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
                            <h6 className="navTitle">
                                Get in touch
                            </h6>
                        </li>
                        <li className="navItem">
                            <h6 className="navTitle">
                            Connectwithfunconnect@gmail.com
                            </h6>
                        </li>
                    </ul>
                    <div className="downloadApp">
                        <a href="/" className="appStore">
                            <img src={AppStore} alt="Apple Logo" className="appleLogo" />
                            <p className="downloadText">Download on the</p>
                            <p className="appText">App Store</p>
                        </a>
                        <a href="/" className="googlePlay">
                            <img src={GooglePlay} alt="Google Logo" className="appleLogo" />
                            <p className="downloadText">Download on the</p>
                            <p className="appText">App Store</p>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
