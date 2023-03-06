import React, { useState } from "react";
import PartnerAccordion from "./PartnerAccordion";
import { PartnerFaqAccordion } from "../Data";
import Blob from "../../assets/images/Blob.png";
import "./style.scss";

export default function PartnerFaq() {
  const [isActive, setIsActive] = useState("0");

  const openAccordion = (id) => {
    if (isActive === id) {
      return setIsActive("0");
    } else {
      setIsActive(id);
    }
  };

  return (
    <section className="faqSection">
      {/* Close the previous dropdown onclick of the next */}
      <div className="faqContent">
        <div className="faqContent_head">
          <h2 className="faqTitle">
            <span className="primaryText">Frequently </span> Asked Questions
          </h2>
          <img src={Blob} alt="Blob" className="blob" />
        </div>
        <div className="faqContent_body">
          {
            // Map through the data and render the FAQ-Accordion component
            //when one accordion opens, the other closes
            PartnerFaqAccordion.map((item) => {
              return (
                <PartnerAccordion
                  key={item.id}
                  title={item.title}
                  description={item.content}
                  onToggle={() => openAccordion(item.id)}
                  isActive={isActive === item.id}
                />
              );
            })
          }
        </div>
      <div className="faqContent_wrap">
        <div className="faqContent_head">
          <h2 className="faqTitle">Still have questions?</h2>
        </div>

        <div className="faqContent_body">
          <p className="faqContent_description">
            Support details to capture customers that might be on the fence.
          </p>
          <button className="btnPrimary">Chat with us</button>
        </div>
      </div>
      </div>

    </section>
  );
}
