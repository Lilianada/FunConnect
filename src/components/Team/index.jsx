import React from "react";
import Img1 from "../../assets/images/teamImages/img1.jpg";
import './style.scss';

export default function Team () {
  return (
    <section className="teamSection">
      <div className="teamSection_content">
        <div className="teamSection_head">
          <h2 className="teamSection_title">
            <span className="primaryText">Meet our team </span>
            of world class problem solvers
          </h2>
            <p className="teamSection_subtitle">
              We've had an amazing journey coming to where we are today, and now feel confident that we can provide you with a professional and effective solution promptly.
            </p>
        </div>
        <div className="teamSection_sliderImages">
          <div className="teamSection_profile">
            <div className="profileImage">
              <img src={Img1} alt="Profile" />
            </div>
          </div>
          <div className="teamSection_profile">
            <div className="profileImage">
              <img src={Img1} alt="Profile" />
            </div>
          </div>
          <div className="teamSection_profile">
            <div className="profileImage">
              <img src={Img1} alt="Profile" />
            </div>
          </div>
          <div className="teamSection_profile">
            <div className="profileImage">
              <img src={Img1} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
