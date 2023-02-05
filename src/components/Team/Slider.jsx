import React, { Component } from "react";
import Slider from "react-slick";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Img1 from "../../assets/images/teamImages/img1.jpg";
import "./style.scss";

export default class TeamSlider extends Component {
  render() {
    var settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings} >
        {/* <div className="teamSection_sliderImages"> */}
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        <div className="teamSection_profile">
          <div className="profileImage">
            <img src={Img1} alt="Profile" />
          </div>
          <div className="teamProfile_data">
            <div className="profileData">
              <p className="profileName">Amujo Oluwasomidotun</p>
              <p className="teamPosition">CEO</p>
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
        {/* </div> */}
      </Slider>
    );
  }
}
