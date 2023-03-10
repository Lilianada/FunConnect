import React, { useState } from "react";
import { Link } from "react-router-dom";
import PartnersImage from "../../assets/images/partnerImages/Partners.png";
import { PhoneInput } from "react-international-phone";
import { EstablishmentOptions, AdvertOptions } from "../Data";
import Select from "react-select";
import "react-international-phone/style.css";
import "./style.scss";
import sendEmail from "../../hooks/sendEmail";
import SuccessModal from "../Modals/SuccessModal";
import { SubmissionStatus } from "../ContactForm/SubmissionStatus";

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
    const status = await sendEmail(values);
    setSubmitStatus(status);
    setValues({});
    setActive(false);
    event.target.reset(); // this line will reset the form after submission
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
              initialCountry="ng"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              className="formField"
              forceDialCode={true}
              placeholder="Mobile Number"
              required
            />
            <Select
              // isMulti
              name="establishment-select"
              options={EstablishmentOptions}
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
              disabled={!active}
              className={active ? "activeButton" : "inactiveButton"}
            >
              Register
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
            Already have an account? <Link to='/login' className="formInform_link">Log in</Link>
          </p>
        </div>
        <div className="registerForm_image">
          <img src={PartnersImage} alt="partners" />
        </div>
      </div>
      {submitStatus && 
          <SuccessModal />
          // <SubmissionStatus status={submitStatus} onClose={() => setSubmitStatus("")} />
        }
    </section>
  );
}
