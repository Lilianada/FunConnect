import React from "react";
// import { Slider } from "../Data";
// import { Slide } from "react-slideshow-image";
// import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";
import Slideshow from "./Slider";

export default function Team() {
  // const properties = [
  //   {
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 800,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3
  //     }
  //   },
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 320,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }

  // ];
  // const indicators = () => <div className="indicator"></div>;

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
