import React from "react";
import Img from "../../assets/images/teamImages/img1.jpg";
import { Slide } from "react-slideshow-image";
import { Slider } from "../Data";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";

export default function Slideshow() {
  const properties = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];
  return (
    <Slide
      slidesToScroll={1}
      slidesToShow={1}
      indicators={false}
      autoplay={false}
      responsive={properties}
      duration={5000}
      // className="teamSection_sliderImages"
    >
      {Slider.map((item, id) => {
        return (
          <div className="teamSection_profile" key={id}>
            <div className="profileImage">
              <img src={Img} alt="Profile" />
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
        );
      })}
    </Slide>
  );
}
