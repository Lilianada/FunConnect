import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header>
        <Link to="/" >
            <img src={Logo} alt="FunConnect Logo" />
        </Link>
    </header>
  );
}
