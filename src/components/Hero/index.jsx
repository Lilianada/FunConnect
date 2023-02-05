/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";import { Typewriter } from "react-simple-typewriter";
import DownloadButtons from "../DownloadButtons";
import "./style.scss";
import AnimatedImages from "./AnimatedImages";

export default function Hero({ timeline, ease}) {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <div className="heroTexts">
          <h1 className="heroTitle">
            {/* Typewriter Effect */}
            <span className="primaryText">
              <Typewriter
                words={["Explore", "Discover", "Sightsee"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={180}
                delaySpeed={1000}
              />
            </span>amazing <br /> places near you
          </h1>
          <p className="heroSubtitle_desktop">
            Whether you're a thrill-seeker or a free spirit, our app has
            something for everyone. Discover new activities and places to visit.
            Unlock a world of possibilities with our app.
          </p>
          <div className="heroSubtitle_mobile">
            We are focused on making the fun ecosystem easy to navigate while
            bringing our audience the much-needed interactive space for
            networking.
          </div>
          {/* Download Buttons */}
          <DownloadButtons />
          {/* Learn more */}
          <div className="learnMore">
            <Link to="/about" className="learnMoreIcon">
              <div className="learnMoreIcon_black">
                <FaPlay fill="#FF9100" size={16} />
              </div>
              <div className="learnMoreIcon_grey"></div>
            </Link>
            <div className="learnMoreText">Learn more about us</div>
          </div>
        </div>

        {/* Animated Image */}
        <AnimatedImages timeline={timeline} ease={ease} />
      </div>
    </section>
  );
}
