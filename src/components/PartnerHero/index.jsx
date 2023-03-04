import React from 'react';
import Image from '../../assets/images/partnerImages/Frame 1542.png'
import './style.scss';

export default function PartnerHero() {
  return (
    <section className="partnerHero_section">
      <div className="partnerHero_content"> 
        <div className="partnerHero_texts">
          <h2 className="partnerHero_title">
            <span className="primaryText">Partner </span>
            with us
          </h2>
          <p className="partnerHero_subtitle">
          Expose your brand to a community of local and international tourists and increase your brands visibility through our channels.
          </p>
        </div>
        <img src={Image} alt="People" className="partnerHero_imageMobile" />
      </div>
    </section>
  )
}
