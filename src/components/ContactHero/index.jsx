import React from "react";
import People from "../../assets/images/contactImage/MobilePeople.png";
import "./style.scss";

export default function ContactHero() {
  return (
    <section className="contactHero_section">
      <div className="contactHero_content">
        <div className="contactHero_texts">
          <h2 className="contactHero_title">
            <span className="primaryText">Connect </span>
            with Us and Let's Talk
          </h2>
          <p className="contactHero_subtitle">
            Need assistance? Fill out the form and our friendly team will
            respond to you promptly within 24 hours.
          </p>
        </div>
        <img src={People} alt="People" className="contactHero_imageMobile" />
      </div>
    </section>
  );
}
