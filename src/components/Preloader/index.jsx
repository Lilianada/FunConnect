import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./style.scss";

export default function Preloader() {
  return (
    <div className="preloader">
            <span className="preloadText">
            <Typewriter
                words={["FunConnect...", "FunConnect..."]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={180}
                delaySpeed={500}
              />
            </span>
            <div className="preloadCircle"></div>
        </div>
  );
}
