import React from 'react';
import CEO from '../../assets/images/Ceo.png';
import './style.scss';

export default function OurCulture() {
  return (
    <section className="ourCulture_section">
      <div className="ourCulture_content">
        <div className="ourCulture_bodyText">
          <h2 className="ourCulture_title">
            <span className="primaryText">Our </span>
            Culture
          </h2>
          <p className="ourCulture_text">
             Embark on a journey of daring and excitement with us! Our company embraces boldness, embraces fun and embraces the audacious in all we do. From heart-pumping adventures to one-of-a-kind experiences, we're dedicated to delivering the ultimate thrills and memories you'll treasure forever.
          </p>
        </div>
        <div className="ourCulture_bodyImage">
            <img src={CEO} alt="CEO Profile" />
        </div>
      </div>
    </section>
  )
}
