import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import Blob from "../../assets/images/Blob.png";
import "./FAQ.scss";

export default function FAQ() {
  return (
    <section className="faqSection">
        <div className="faqContent">
            <div className="faqContent_head">
                <h2 className="faqTitle">
                   <span className="primaryText">Frequently </span> Asked Questions
                </h2>
                <img src={Blob} alt="Blob" className="blob" />
            </div>
            <div className="faqContent_body">
                <div className="faqContent_item">
                    <p className="faqContent_text">What is Funconnect?</p>
                    <BsPlusLg size={24} fill="#202020"/>
                </div>
                <div className="faqContent_item">
                    <p className="faqContent_text">How can I download the Funconnect app?</p>
                    <BsPlusLg size={24} fill="#202020"/>
                </div>
                <div className="faqContent_item">
                    <p className="faqContent_text">Will I pay to use the Funconnect app?</p>
                    <BsPlusLg size={24} fill="#202020"/>
                </div>
                <div className="faqContent_item">
                    <p className="faqContent_text">What type of events will be featured on Funconnect?</p>
                    <BsPlusLg size={24} fill="#202020"/>
                </div>
                <div className="faqContent_item">
                    <p className="faqContent_text">Can I book an event?</p>
                    <BsPlusLg size={24} fill="#202020"/>
                </div>
            </div>
        </div>
    </section>
  );
}

