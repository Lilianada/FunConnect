import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "../Backdrop";
import { Typewriter } from "react-simple-typewriter";

export function SuccessCofirmation({ email, onClose }) {
  return (
    <Backdrop>
      <div className="subscribeWrap">
        <AiOutlineClose className="closeIcon" onClick={onClose} />
        <p className="subscribeText">
          Subscription successful 🎉🎉.
          <br />
          We sent a confirmation email to you. Kindly click the link in the
          email to confirm your subscription.
        </p>
      </div>
    </Backdrop>
  );
}

export function ErrorCofirmation({ onClose }) {
  return (
    <Backdrop>
      <div className="subscribeWrap">
        <AiOutlineClose className="closeIcon" onClick={onClose} />
        <p className="subscribeText">
          Email invalid. Please confirm and try again.
        </p>

        <button
          className="btnPrimary"
          style={{ marginTop: "10px" }}
          onClick={() => onClose()}
        >
          Try again.
        </button>
      </div>
    </Backdrop>
  );
}

export function AlreadySubscribed({ email, onClose }) {
  return (
    <Backdrop>
      <div className="subscribeWrap">
        <AiOutlineClose className="closeIcon" onClick={onClose} />
        <p className="subscribeText">
          You are already subscribed.{email ? `, ${email}` : ""}
        </p>
      </div>
    </Backdrop>
  );
}

export function SubscriptionLoader() {
  return (
    <Backdrop>
        <span className="preloadText">
          <Typewriter
            words={["Loading...", "Loading..."]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={180}
            delaySpeed={500}
            infinite={false}
          />
        </span>
    </Backdrop>
  );
}
