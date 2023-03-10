import React from "react";
import Clipboard from "../../assets/images/partnerImages/ClipboardText.png";
import GivingHands from "../../assets/images/partnerImages/GivingHands.png";
import Award from "../../assets/images/partnerImages/Award.png"
import { Link } from "react-router-dom";
import "./style.scss";

export default function PartnerRegisteration() {
  return (
    <section className="partnerRegister">
      <div className="prContainer">
        <div className="prContainer_row">
          <small>How it works</small>
          <h2>
            Register as a {" "}
            <span className="primaryText">Partner</span> {" "}
            on Funconnect
          </h2>
          <p>We partner with hospitality and tourist industry</p>
          <Link to="/registration-form" className="btnPrimary">
            Get Started Today
          </Link>
        </div>
        <div className="prContainer_row">
          <div className="prRow_row">
            <div className="rowIcon">
            <img src={Clipboard} alt="Clipboard" />
              <div className="bar"></div>
            </div>
            <div className="rowTexts">
              <h6 className="head">Register</h6>
              <p className="texts">
                Boost your visibility as a content curator or as a business.
                Whether it is food, travel, lifestyle or entertainment, we got
                you.
              </p>
            </div>
          </div>
          <div className="prRow_row">
            <div className="rowIcon">
              <img src={GivingHands} alt="Clipboard" />
              <div className="bar"></div>
            </div>
            <div className="rowTexts">
              <h6 className="head">Onboard</h6>
              <p className="texts">
                Our team will reach to for confirmation and verification to
                setup your profile-- and curate some content.{" "}
              </p>
            </div>
          </div>
          <div className="prRow_row">
            <div className="rowIcon">
            <img src={Award} alt="Clipboard" />
            </div>
            <div className="rowTexts">
              <h6 className="head">Enjoy the Benefits</h6>
              <p className="texts">
                Enjoy the benefits of being a partner with our In-App and social
                media listing and advertisement, content curation, event
                collaboration and many more. We help you stay relevant.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
