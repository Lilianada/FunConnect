import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Slider } from "../Data";
import "./style.scss";

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
        <div className="teamSection_sliderImages">
          {
            Slider.map((item, id) => {
              return (
                <div className="teamSection_profile">
                <div className="profileImage">
                  <img src={item.image} alt="Profile" />
                </div>
                <div className="teamProfile_data">
                  <div className="profileData">
                    <p className="profileName"> {item.name} </p>
                    <p className="teamPosition"> {item.posiiton} </p>
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
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
