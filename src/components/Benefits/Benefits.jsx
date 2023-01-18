import React from "react";
import { BsStars } from "react-icons/bs";
import "./Benefits.scss";

export default function Benefits() {
  return (
    <section className="benefitSection">
      <div className="benefitSection__container">
        <h5 className="benefitTitle">
          <span className="primaryText">Funconnect </span> allows you to do what
          you want.
        </h5>
        <div className="benefitFlex_container">
          <div className="benefitFlex_item">
            <div className="benefitFlex_icon" style={{ background: "#F0EEF7" }}>
              <BsStars size={32} fill="#6750A3" />
            </div>
            <h6 className="benefitFlex_title">Easy Bookings</h6>
            <p className="benefitFlex_text">
              Share your experiences, organize fun events and connect with
              like-minds.
            </p>
          </div>
          <div className="benefitFlex_item">
            <div className="benefitFlex_icon" style={{ background: "#E5FFED" }}>
              <BsStars size={32} fill="#00B432" />
            </div>
            <h6 className="benefitFlex_title">Connect like-Minds</h6>
            <p className="benefitFlex_text">
              Share your experiences, organize fun events and connect with
              like-minds.
            </p>
          </div>
          <div className="benefitFlex_item">
            <div className="benefitFlex_icon">
              <BsStars size={32} fill="#000" />
            </div>
            <h6 className="benefitFlex_title">Organized Trip Planner</h6>
            <p className="benefitFlex_text">
              Share your experiences, organize fun events and connect with
              like-minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
