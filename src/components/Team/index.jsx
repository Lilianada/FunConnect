import React from "react";
import "./style.scss";
import Slideshow from "./Slider";
import SimpleSlider from "./SimpleSlider";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SlideItems } from "../Data";
import Slider from "react-slick";

export default function Team() {
  return (
    <section className="teamSection">
      <div className="teamSection_content">
        <div className="teamSection_head">
          <h2 className="teamSection_title">
            <span className="primaryText">Meet our team </span>
            of world class problem solvers
          </h2>
          <p className="teamSection_subtitle">
            We've had an amazing journey coming to where we are today, and now
            feel confident that we can provide you with a professional and
            effective solution promptly.
          </p>
        </div>
        <Slideshow/>
        {/* <SimpleSlider/> */}
        {/* <Slider className="teamSection_slider">
          {SlideItems.map((item, id) => {
            return (
              <div className="teamSection_profile" key={id}>
                <div className="profileImage">
                  <img src={item.image} alt="Profile" />
                </div>
                <div className="teamProfile_data">
                  <div className="profileData">
                    <p className="profileName"> {item.name} </p>
                    <p className="teamPosition"> {item.position} </p>
                  </div>
                  <div className="profileLinks">
                    <a href="/" className="footerFlex_icon">
                      <FaTwitter fill="#000" size={14} />
                    </a>
                    <a href="/" className="footerFlex_icon linkedinIcon">
                      <FaLinkedinIn size={14} fill="#000" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider> */}
      </div>
    </section>
  );
}
