import React from "react";
import { Slide } from "react-slideshow-image";
import { SlideItems } from "../Data";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";


export default function Slideshow() {

  const responsiveSettings  = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ];
  return (
    <Slide
      autoplay={false}
      responsive={responsiveSettings }
      duration={5000}
      indicators={false}
      pagination={true}
      nextArrow={<div className="nextArrow"></div>}
      prevArrow={<div className="prevArrow"></div>}
      // arrows={false}
      infinite={false}
    >
      {SlideItems.map((item) => {
        return (
          <div className="teamSection_profile" key={item.id}>
            <div className="profileImage">
              <img src={require("../../assets/images/teamImages/" + item.image + ".jpg") } alt="Team Profile Pic" />
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
    </Slide>
  );
}
