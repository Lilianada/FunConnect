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
            <h3 className='termsSection_headerText'>Terms and Condition</h3>
        </div>
        <div className="termsSection_content">
            <p className='termsSection_contentText'>
                FUN CONNECT which would be regarded as “we” “us” “our” in this Terms of Service is a Nigerian establishment and therefore subject to Nigerian legislation, we are also conversant with other laws of various jurisdictions where our customers reside and we ensure full compliance with all those regulations, also, we take into cognizance, relevant international conventions having binding effects on our services as well. This Terms of Use is written in English language and every translated version of this Terms of Use of Service for Fun Connect would carry the same meaning and message as it is in the English interpretation. In an instance where the translation creates a conflict with the English interpretation, the English interpretation would supersede and the other translation to the extent of its inconsistency be made void.

                <br/><br/>

                We welcome you to Fun Connect Terms of Service, we advise you to peruse this document carefully and exercise great diligence while using our online platform or our digital products. In order words, this would carry the legal force equivalent to that of a contract. However, we must poignantly state that some of this document does is a little deviation from the contract and only meant to provide you with requisite information on how our platform works and also the rules of engagement. We would try as much as possible make this as direct and straightforward as possible. You can also contact us if you have any clarification to make.
            </p>    
        </div>
    </section>
  )
}
