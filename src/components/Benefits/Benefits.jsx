import React from "react";
import { BsStars } from "react-icons/bs";
import "./Benefits.scss";

export default function Benefits() {
  return (
    <section className="benefitSection">
      <div className="benefitSection__container">
        <h5 className="benefitTitle">
          <span className="primaryText">Funconnect </span> allows you to do what
          you want.
        </h5>
        <div className="benefitFlex_container">
          <div className="benefitFlex_item">
            <BsStars fill="#000" stroke="#000" className="benefitFlex_item__icon"/>
            <h6 className="benefitFlex_item__title">Easy Bookings</h6>
            <p className="benefitFlex_item__description">
            Share your experiences, organize fun events and connect with like-minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
