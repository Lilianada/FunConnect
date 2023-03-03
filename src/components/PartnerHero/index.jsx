import React from 'react';
import Image from '../../assets/images/partnerImage/MobilePeople.png'
import './style.scss';

export default function PartnerHero() {
  return (
    <section className="partnerHero_section">
      <div className="partnerHero_content">
        <div className="partnerHero_texts">
          <h2 className="partnerHero_title">
            <span className="primaryText">Connect </span>
            with Us and Let's Talk
          </h2>
          <p className="partnerHero_subtitle">
            Need assistance? Fill out the form and our friendly team will
            respond to you promptly within 24 hours.
          </p>
        </div>
        <img src={Image} alt="People" className="partnerHero_imageMobile" />
      </div>
    </section>
  )
}
