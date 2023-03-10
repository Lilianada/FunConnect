import React from "react";
import { IoClose } from "react-icons/io5";
import FailureVector from "../../assets/images/FailureVector.png";
import Backdrop from "../Backdrop";
import './style.scss';

export default function FailureModal({closeModal}) {
  return (
    <Backdrop>
    <section className="failureModal">
      <div className="modalHead">
        <button type='button' onClick={closeModal}>
          <IoClose />
        </button>
      </div>
      <div className="modalBody">
        <img src={FailureVector} alt="Failure Vector" />
        <h2 className="headText">Submitted Succesfully</h2>
        <p className="bodyText">Our team will reach out to you after 48 hours.</p>
      </div>
    </section>
  </Backdrop>
  );
}
