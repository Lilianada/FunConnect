import React from "react";
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
                
            </div>
        </div>
    </section>
  );
}
