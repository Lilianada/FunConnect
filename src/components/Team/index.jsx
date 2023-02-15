import React from "react";
import "./style.scss";
import Slideshow from "./Slider";

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
        {/* <Slideshow/> */}
      </div>
    </section>
  );
}
