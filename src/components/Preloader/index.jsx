import React from "react";
import curve from "../../assets/images/PreloadImage.png";
import { Typewriter } from "react-simple-typewriter";
import "./style.scss";

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={curve} alt="Ellipse" className="ellipseOne" />
      <span className="preloadText">
        <Typewriter
          words={["FunConnect...", "FunConnect..."]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={200}
          deleteSpeed={180}
          delaySpeed={500}
          infinite={false}
        />
      </span>
      <div className="preloadCircle"></div>
      <img src={curve} alt="Ellipse" className="ellipseTwo" />
    </div>
  );
}
