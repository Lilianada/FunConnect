import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay } from "react-icons/fa";import "./Hero.scss";
import DownloadButtons from "../DownloadButtons/DownloadButtons";

export default function Hero() {
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
            </span>
            amazing <br /> places near you
          </h1>
          <p className="heroSubtitle_desktop">
            Whether you're a thrill-seeker or a free spirit, our app has
            something for everyone. Discover new activities and places to visit.
            Unlock a world of possibilities with our app.
          </p>
          <div className="heroSubtitle_mobile">
          We are focused on making the fun ecosystem easy to navigate while bringing our audience the much-needed interactive space for networking. 
          </div>
          {/* Download Buttons */}
          <DownloadButtons/>
          {/* Learn more */}
          <a href="/" className="learnMore">
            <div className="learnMoreIcon">
                <div className="learnMoreIcon_black">
                  <FaPlay fill="#FF9100" size={20} />
                </div>
              <div className="learnMoreIcon_grey"></div>
            </div>
            <div className="learnMoreText">Learn more about us</div>
          </a>
        </div>
        
        {/* Animated Image */}
        <div className="animatedImage">

        </div>
      </div>
    </section>
  );
}
