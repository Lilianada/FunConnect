import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import Logo from "../../assets/images/Funconnect-logo.svg";
import SubscribeForm from "./SubscriptionForm.jsx";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      {/* Mobile */}
      <div className="footerContent_mobile">
        {/* Desc */}
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
        {/* Subscribe */}
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Subscribe to Newletter</h5>
          <div className="footerFlex_body">
            <SubscribeForm />
          </div>
        </div>
        {/* Legal */}
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Legal</h5>
          <div className="footerFlex_body">
            <ul className="footerFlex_listOne">
              <li className="footerFlex_link">
                <a href="/privacy-policies">Privacy Policy</a>
              </li>
              <li className="footerFlex_link">
                <a href="/terms-and-conditions">Terms and condition</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social */}
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Be Social</h5>
          <div className="footerFlex_body">
            <div className="footerFlex_listTwo">
              <a
                href="https://twitter.com/Funconnect_app"
                target="_blank"
                rel="noreferrer"
                className="footerFlex_icon"
              >
                <AiFillTwitterCircle fill="#FFF1DD" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/funconnect/"
                target="_blank"
                rel="noreferrer"
                className="footerFlex_icon linkedinIcon"
              >
                <RiLinkedinFill size={16} fill="#000" />
              </a>
              <a
                href="https://www.instagram.com/funconnect_app/"
                target="_blank"
                rel="noreferrer"
                className="footerFlex_icon"
              >
                <RiInstagramFill fill="#FFF1DD" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="footerContent_tablet">
        {/* Desc */}
        <div className="footerFlex_item">
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
          {/* Subscribe */}
          <div className="footerFlex_item">
            <h5 className="footerFlex_head">Subscribe to Newletter</h5>
            <div className="footerFlex_body">
              <SubscribeForm />
            </div>
          </div>
        </div>
        {/* Legal */}
        <div className="footerFlex_item">
          <div className="footerFlex_item">
            <h5 className="footerFlex_head">Legal</h5>
            <div className="footerFlex_body">
              <ul className="footerFlex_listOne">
                <li className="footerFlex_link">
                  <a href="/privacy-policies">Privacy Policy</a>
                </li>
                <li className="footerFlex_link">
                  <a href="/terms-and-conditions">Terms and condition</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social */}
          <div className="footerFlex_item">
            <h5 className="footerFlex_head">Be Social</h5>
            <div className="footerFlex_body">
              <div className="footerFlex_listTwo">
                <a href="/" className="footerFlex_icon">
                  <BsTelegram fill="#FFF1DD" size={24} />
                </a>
                <a href="/" className="footerFlex_icon">
                  <AiFillTwitterCircle fill="#FFF1DD" size={24} />
                </a>
                <a href="/" className="footerFlex_icon linkedinIcon">
                  <RiLinkedinFill size={16} fill="#000" />
                </a>
                <a href="/" className="footerFlex_icon">
                  <RiInstagramFill fill="#FFF1DD" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="footerContent_desktop">
        {/* Desc */}
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
        {/* Legal */}
        <div className="footerFlex_item">
          <div className="footerFlex_item">
            <h5 className="footerFlex_head">Legal</h5>
            <div className="footerFlex_body">
              <ul className="footerFlex_listOne">
                <li className="footerFlex_link">
                  <a href="/privacy-policies">Privacy Policy</a>
                </li>
                <li className="footerFlex_link">
                  <a href="/terms-and-conditions">Terms and condition</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social */}
          <div className="footerFlex_item">
            <h5 className="footerFlex_head">Be Social</h5>
            <div className="footerFlex_body">
              <div className="footerFlex_listTwo">
                <div className="footerFlex_listTwo">
                  <a
                    href="https://twitter.com/Funconnect_app"
                    target="_blank"
                    rel="noreferrer"
                    className="footerFlex_icon"
                  >
                    <AiFillTwitterCircle fill="#FFF1DD" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/funconnect/"
                    target="_blank"
                    rel="noreferrer"
                    className="footerFlex_icon linkedinIcon"
                  >
                    <RiLinkedinFill size={16} fill="#000" />
                  </a>
                  <a
                    href="https://www.instagram.com/funconnect_app/"
                    target="_blank"
                    rel="noreferrer"
                    className="footerFlex_icon"
                  >
                    <RiInstagramFill fill="#FFF1DD" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subscribe */}
        <div className="footerFlex_item">
          <h5 className="footerFlex_head">Subscribe to Newletter</h5>
          <div className="footerFlex_body">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
