import React from "react";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
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
            <p className="footerFlex_text">
              Funconnect is a modern way of exploring fun places, a social way
              to connect like-minds, and a space to share experiences.
            </p>
          </div>
        </div>
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Legal</h5>
          <div className="footerFlex_body">
            <ul className="footerFlex_listOne">
              <li className="footerFlex_link">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="footerFlex_link">
                <a href="/">Terms and condition</a>
              </li>
            </ul>
          </div>
          <h5 className="footerFlex_head">Be Social</h5>
          <div className="footerFlex_body">
            <div className="footerFlex_listTwo">
                <a href="/" className="footerFlex_icon">
                  <BsTelegram fill="#FFF1DD" size={24} />
                </a>
                <a href="/" className="footerFlex_icon">
                  <AiFillTwitterCircle fill="#FFF1DD" size={24}/>
                </a>
                <a href="/" className="footerFlex_icon">
                  <BsLinkedin fill="#FFF1DD"  />
                </a>
                <a href="/" className="footerFlex_icon">
                  <RiInstagramFill fill="#FFF1DD" size={24}/>
                </a>
            </div>
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
