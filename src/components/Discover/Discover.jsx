import React from "react";
import Phone from "../../assets/images/PhoneGroup.png";
import "./Discover.scss";

export default function Discover() {
  return (
    <section className="discoverSection">
      <div className="discoverContent">
        <div className="discoverImage">
            <img src={Phone} alt="discover" />
        </div>
        <div className="discoverText">
        <h2 className="discoverTitle">
          Discover events
          <br />
          <span className="whiteText">for you and create for others</span>
        </h2>
        <p className="discoverDescription">
        Funconnect is a modern way of exploring fun places, a social way to connect like-minds, and a space to share experiences.
            </p>
            </div>
      </div>
    </section>
  );
}
