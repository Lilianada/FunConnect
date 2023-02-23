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
          Subscription successful 🎉.
          <br />
          We've sent you a confirmation email, kindly check your email.
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
          Email invalid. Please confirm your email and try again.
        </p>
      </div>
    </Backdrop>
  );
}

export function AlreadySubscribed({ onClose }) {
  return (
    <Backdrop>
      <div className="subscribeWrap">
        <AiOutlineClose className="closeIcon" onClick={onClose} />
        <p className="subscribeText">
          You've already subscribed.
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
