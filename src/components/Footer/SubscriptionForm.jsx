import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import "./style.scss";
import {
  AlreadySubscribed,
  ErrorCofirmation,
  SubscriptionLoader,
  SuccessCofirmation,
} from "./SubscriptionCofirmation";

const SubscribeForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const FORM_URL = `https://app.engage.so/embed/63f5ef37aac910d6cbb070ba`;

  const handleSubmit = (event) => {
    event.preventDefault();

     // Show spinner while form is being submitted
     setIsLoading(true);

    // Send form data to Engage.so
    fetch(FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setStatus(data);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ error: "An error occurred. Please try again later." });
      })
      .finally(() => setIsLoading(false)); // Hide spinner once request is complete

    // Clear form input
    setEmail("");
  };

  return (
    <div>
      {status && (
        <div>
          {status.status === "Your email is already subscribed." ? (
            <AlreadySubscribed email={email} onClose={() => setStatus(null)} />
          ) : status.status ===
            "Subscription successful 🎉🎉. We sent a confirmation email to you. Kindly click the link in the email to confirm your subscription. " ? (
            <SuccessCofirmation email={email} onClose={() => setStatus(null)} />
          ) : status.error ? (
            <ErrorCofirmation onClose={() => setStatus(null)} />
          ) : null}
        </div>
      )}

      {isLoading && <SubscriptionLoader/>}

      <form className="footeFlex_form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="footerFlex_input"
          aria-label="Enter email address"
          placeholder="Enter email address"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="footerFlex_btn">
          <input type="submit" className="submitBtn" />
          <HiArrowUpRight />
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
