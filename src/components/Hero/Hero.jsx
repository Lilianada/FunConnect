import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay } from "react-icons/fa";
import AppStore from "../../assets/images/AppleVector-colored.svg";
import GooglePlay from "../../assets/images/GoogleVector-colored.svg";
import "./Hero.scss";

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
          <p className="heroSubtitle">
            Whether you're a thrill-seeker or a free spirit, our app has
            something for everyone. Discover new activities and places to visit.
            Unlock a world of possibilities with our app.
          </p>
          {/* Download Buttons */}
          <div className="downloadApp">
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
                <p className="downloadText">Det it on</p>
                <h5 className="appText">Google Play</h5>
              </div>
            </a>
          </div>
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
      </div>
    </section>
  );
}
