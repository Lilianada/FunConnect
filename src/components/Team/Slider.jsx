import React from "react";
import { Slide } from "react-slideshow-image";
import { SlideItems } from "../Data";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";


export default function Slideshow() {
  const indicators = () => <div className="indicator"></div>;

  const responsiveSettings  = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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
      // slidesToScroll={1}
      // slidesToShow={1}
      autoplay={false}
      responsive={responsiveSettings }
      duration={5000}
      indicators={indicators}
      arrows={false}
      infinite={false}
    >
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
    </Slide>
  );
}
