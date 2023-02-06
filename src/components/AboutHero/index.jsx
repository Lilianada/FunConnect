import React from 'react';
import People from '../../assets/images/aboutImages/HeroBg-mobile.png';
import './style.scss';

export default function AboutHero() {
  return (
    <section className="aboutHero_section">
        <div className="aboutHero_content">
        <div className="aboutHero_texts">
            <h2 className="aboutHero_title">
                <span className="primaryText">Escape </span>
                the ordinary, discover adventure!
            </h2>
        </div>
        <img src={People} alt="People" className="aboutHero_imageMobile" />
      </div>
    </section>
  )
}
