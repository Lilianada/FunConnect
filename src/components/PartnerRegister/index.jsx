import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function PartnerRegisteration() {
  return (
    <section className="partnerRegister">
      <div className="prContainer">
        <div className="prContainer_row">
          <p>How it works</p>
          <h2>
            Register as a 
            <span className="primaryText">
              Partner 
            </span>
            on Funconnect
          </h2>
          <p>We partner with hospitality and tourist industry</p>
          <Link to='/registration-form' className="btnPrimary">Get Started Today</Link>
        </div>

      </div>
    </section>
  )
}
