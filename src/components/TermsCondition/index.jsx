import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/images/Funconnect-Logo-lg.jpeg";
import './style.scss';

export default function TermsCondition() {
  return (
    <section className='termsSection'>
        <div className="termsSection_header">
            <NavLink to="/" className="logo" >
                <img src={Logo} alt="FunConnect Logo" />
            </NavLink>
            <h3>Terms and Condition</h3>
        </div>
    </section>
  )
}
