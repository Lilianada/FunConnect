import React from "react";
import { Slide } from "react-slideshow-image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import "./style.scss";

export const Slider = [
  {
    name: "Amujo Oluwasomidotun",
    image:
      "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    position: "CEO"
  },
  {
    name: " Lorem Faith ",
    image:
      "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ",
    posiiton: " OBO "
  },
  {
    name: " Surprise Olori ",
    image:
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80 ",
    posiiton: " NFA "
  },
  {
    name: "Mayowa Somebody ",
    image:
      "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    posiiton: " CFO "
  },
  {
    name: "Grace Something ",
    image:
      "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    posiiton: "COO "
  },
  {
    name: " Figma React",
    image:
      "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    posiiton: " Cleaner"
  }
];

const indicators = () => <div className="indicator"></div>;

export default function Slideshow() {
  const properties = [
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

  ];
  return (
    <Slide
      slidesToScroll={1}
      slidesToShow={1}
      autoplay={false}
      responsive={properties}
      duration={5000}
      indicators={indicators}
      arrows={false}
    >
      {Slider.map((item, id) => {
        return (
          <div className="teamSection_profile" key={id}>
            <div className="profileImage">
              <img src={item.image} alt="Profile" />
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
