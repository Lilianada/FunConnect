import React, { useState } from "react";
import Blob from "../../assets/images/Blob.png";
import { Accordion } from "../Data";
import FAQAccordion from "./FaqAccordion";
import "./style.scss";

export default function FAQ() {
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
            <div className="faqContent_body" >
                {
                    // Map through the data and render the FAQ-Accordion component
                    //when one accordion opens, the other closes
                    Accordion.map((item) => {
                        return (
                            <FAQAccordion 
                                key={item.id}
                                title={item.title}
                                description={item.content}
                                onToggle={() => openAccordion(item.id)}
                                isActive={isActive === item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  );
}
