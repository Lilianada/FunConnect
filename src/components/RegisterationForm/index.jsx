import { sendForm } from "emailjs-com";
import React, { useState } from "react";
import "./style.scss";

export default function RegisterationForm() {
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
    const status = await sendForm(values);
    setSubmitStatus(status);
    setValues({});
    setActive(false);
    event.target.reset(); // this line will reset the form after submission
  };

  return (
    <section className="registerForm">
      <div className="registerForm_container">
        <div className="registerForm_header">
          <h4 className="formHead">Lets get started</h4>
          <p className="formSubhead">Get started in 2 minutes</p>
        </div>
        <form onSubmit={handleSubmit} className="registerForm_form">
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
          When creating a new account, you agree to the terms & conditions and
          privacy policy.
        </p>
      </div>
    </section>
  );
}
