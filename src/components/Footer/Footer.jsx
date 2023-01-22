import React from "react";
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter } from "react-icons/bs";
import Logo from "../../assets/images/Funconnect-logo.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerFlex_item">
          <div className="footerFlex_head">
            <img src={Logo} alt="FunConnect Logo" />
          </div>
          <div className="footerFlex_body">
            <p>
              Funconnect is a modern way of exploring fun places, a social way
              to connect like-minds, and a space to share experiences.
            </p>
          </div>
        </div>
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Legal</h5>
          <div className="footerFlex_body">
            <ul className="footerFlex_list">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms and condition</a>
              </li>
            </ul>
          </div>
          <h5 className="footerFlex_head">Be Social</h5>
          <div className="footerFlex_body">
            <ul className="footerFlex_list">
              <li>
                <a href="/">
                  {" "}
                  <BsTelegram />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <BsTwitter />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <BsLinkedin />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <BsInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Subscribe to Newletter</h5>
          <div className="footerFlex_body">
            <input type="email" name="" className="footerFlex_input" />
          </div>
        </div>
      </div>
    </footer>
  );
}
