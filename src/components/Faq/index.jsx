import React, { useState } from "react";
import Blob from "../../assets/images/Blob.png";
import { Accordion } from "../Data";
import FAQAccordion from "./FaqAccordion";
import "./style.scss";

export default function FAQ() {
    const [selectItem, setSelectItem] = useState(1);

    const selected = (index) => {
        setSelectItem(index);
    }


  return (
    <section className="faqSection" data-scroll-section>
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
                    Accordion.map((item) => {
                        return (
                            <FAQAccordion 
                                key={item.id}
                                title={item.title}
                                description={item.content}
                                open={selectItem === item.id}
                                onClick={selected}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  );
}
