import React from "react";
import { Link } from "react-router-dom";
import {GrClose} from "react-icons/gr";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./Header.scss";

export default function Header() {
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


                <nav className="navbar">
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
                </nav>
            </div>
        </header>
    );
}
