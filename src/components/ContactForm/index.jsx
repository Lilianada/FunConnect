import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import "./style.scss";

export default function ContactForm() {
  const [active, setActive] = useState(false);
  const [values, setValues] = useState("");

  const isActive = (e) => {
    setValues(e.target.value);
    if (setValues !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <section className="contactForm_wrap">
      <div className="contactForm">
        <div className="contactForm_header">
          <h4 className="formHead">Send us a Message</h4>
          <p className="formSubhead">
            Join thousands getting emails in their inbox.
          </p>
        </div>

        <form action="" method="post" className="contactForm_form">
          <input
            type="text"
            name="first-name"
            onChange={isActive}
            className="formField"
            placeholder="Enter first name"
          />
          <input
            type="text"
            name="last-name"
            onChange={isActive}
            className="formField"
            placeholder="Enter last name"
          />
          <input
            type="text"
            name="email-address"
            onChange={isActive}
            className="formField"
            placeholder="Enter your email address"
          />
          <input
            type="text"
            name="phone-number"
            onChange={isActive}
            className="formField"
            placeholder="Enter your phone number"
          />
          <textarea
            name="text-area"
            onChange={isActive}
            className="formTextarea"
            placeholder="Add message"
            cols="30"
            rows="10"
          ></textarea>
          {/* onclick state for button */}
          <button
            type="submit"
            disabled={!values}
            className={active ? "activeButton" : "inactiveButton"}
          >
            <a href="mailto:Info@funconnect.app">Send Message</a>
            <RxArrowTopRight className="formBtnIcon" />
          </button>
        </form>
        <p className="formInform">
          Funconnect uses contact information you provide us to contact you
          about our relevant content, product and services. You may unsubscribe
          from our list at anytime. For further information, read our Privacy
          Policy
        </p>
      </div>
    </section>
  );
}
