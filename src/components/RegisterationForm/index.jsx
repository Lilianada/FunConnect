import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HiArrowUpRight} from 'react-icons/hi2'
import { PhoneInput } from "react-international-phone";
import { EstablishmentOptions, AdvertOptions } from "../Data";
import PartnersImage from "../../assets/images/partnerImages/Partners.png";
import registerUser from "../../hooks/registerUser";
import SuccessModal from "../Modals/SuccessModal";
import FailureModal from "../Modals/FailureModal";
import "react-international-phone/style.css";
import Select from "react-select";
import "./style.scss";

export default function RegisterationForm() {
  const [values, setValues] = useState({});
  const [active, setActive] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    if (!event || !event.target) {
      return;
    }
    const { name, type, value, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setValues((values) => ({
      ...values,
      [name]: newValue,
    }));
  
    setActive(true);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); 
    const status = await registerUser(values);
    setSubmitStatus(status);
    console.log(status);
    setIsSubmitting(false); 
    setValues({});
    setPhone("")
    setActive(false);
    event.target.reset(); 
  };

  const [phone, setPhone] = useState("");

  return (
    <section className="registerForm">
      <div className="registerForm_container">
        <div className="registerForm_wrap">
          <div className="registerForm_header">
            <h4 className="formHead">Lets get started</h4>
            <p className="formSubhead">Get started in 2 minutes</p>
          </div>
          <form onSubmit={handleSubmit} className="registerForm_form">
            <input
              type="text"
              name="full-name"
              onChange={handleChange}
              className="formField"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              name="business-name"
              onChange={handleChange}
              className="formField"
              placeholder="Business Name"
              required
            />
            <input
              type="text"
              name="business-address"
              onChange={handleChange}
              className="formField"
              placeholder="Business Address"
              required
            />
            <PhoneInput
              name="phone-number"
              initialCountry="ng"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              className="formField"
              forceDialCode={true}
              placeholder="Mobile Number"
              required
            />
            <Select
              name="establishment-select"
              options={EstablishmentOptions}
              onChange={handleChange}
              className="formField multi-select"
              placeholder="Type of Establishment"
              required
            />
            <input
              type="text"
              name="email-address"
              onChange={handleChange}
              className="formField"
              placeholder="Email Address"
              required
            />
            <Select
              isMulti
              name="advert-selection"
              options={AdvertOptions}
              onChange={handleChange}
              className="formField multi-select"
              placeholder="Interest in Advertising (Select multiple)"
              required
            />
            <textarea
              name="text-area"
              onChange={handleChange}
              className="formTextarea"
              placeholder="Add message"
              cols="30"
              rows="10"
            ></textarea>
            <button
            type="submit"
            disabled={!active || isSubmitting}
            className={active ? "activeButton" : "inactiveButton"}
          >
            {isSubmitting ? "Submitting..." : "Register"}
            {isSubmitting ? '' : <HiArrowUpRight className="formBtnIcon" />}
          </button>
          </form>
          <p className="formInform">
            When creating a new account, you agree to the{" "}
            <Link to="/terms-and-conditions" className="formInform_link">
              terms & conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policies" className="formInform_link">
              privacy policy
            </Link>
            .
          </p>
          <p className="formInform">
            Already have an account?{" "}
            <Link to="/login" className="formInform_link">
              Log in
            </Link>
          </p>
        </div>
        <div className="registerForm_image">
          <img src={PartnersImage} alt="partners" />
        </div>
      </div>
      {submitStatus === 'Submission Complete!' ? (
  <SuccessModal closeModal={() => setSubmitStatus("")} status={submitStatus} />
) : submitStatus === 'Submission Failed.' ? (
  <FailureModal closeModal={() => setSubmitStatus("")} status={submitStatus} />
) : null}

    </section>
  );
}
