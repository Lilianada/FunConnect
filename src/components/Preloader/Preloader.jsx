import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./Preloader.scss";

export default function Preloader() {
  return (
    <div className="cirWrapper">
            <div className="cirOne"></div>
            <div className="cirTwo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="cirFour"></div>
        <p className="cirThree">Loading...</p>
        </div>
  );
}
