import React, { useState } from "react";
import sendEmail from "../../hooks/sendEmail";
import { SubmissionStatus } from "./SubmissionStatus";
import "./style.scss";

export default function ContactForm() {
  const [values, setValues] = useState({});
  const [active, setActive] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setActive(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = await sendEmail(values);
    setSubmitStatus(status);
    setValues({});
    setActive(false);
    event.target.reset(); // this line will reset the form after submission
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

        <form onSubmit={handleSubmit} className="contactForm_form">
          <input
            type="text"
            name="first-name"
            onChange={handleChange}
            className="formField"
            placeholder="Enter first name"
          />
          <input
            type="text"
            name="last-name"
            onChange={handleChange}
            className="formField"
            placeholder="Enter last name"
          />
          <input
            type="text"
            name="email-address"
            onChange={handleChange}
            className="formField"
            placeholder="Enter your email address"
          />
          <input
            type="text"
            name="phone-number"
            onChange={handleChange}
            className="formField"
            placeholder="Enter your phone number"
          />
          <textarea
            name="text-area"
            onChange={handleChange}
            className="formTextarea"
            placeholder="Add message"
            cols="30"
            rows="10"
          ></textarea>
          {/* onclick state for button */}
          <button
            type="submit"
            disabled={!active}
            className={active ? "activeButton" : "inactiveButton"}
          >
            Send Message
          </button>
        </form>
        <p className="formInform">
          Funconnect uses contact information you provide us to contact you
          about our relevant content, product and services. You may unsubscribe
          from our list at anytime. For further information, read our Privacy
          Policy
        </p>
      </div>
        {submitStatus && 
          <SubmissionStatus status={submitStatus} closeModal={() => setSubmitStatus("")} />
        }
    </section>
  );
}
