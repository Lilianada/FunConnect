import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SlideItems } from '../Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style.scss';


export default function SimpleSlider() {
        var settings = {
          dots: true,
          autoplay: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
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
          breakpoint: 500,
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
    
      ]
        };
      return (
        <Slider
            {...settings}
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
        </Slider>
        );
}
