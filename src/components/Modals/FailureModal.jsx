import React from "react";
import { IoClose } from "react-icons/io5";
import FailureVector from "../../assets/images/FailureVector.png";
import Backdrop from "../Backdrop";
import './style.scss';

export default function FailureModal({closeModal, status}) {
  return (
    <Backdrop>
    <section className="modalWrap">
      <div className="modalHead">
        <button type='button' onClick={closeModal}>
          <IoClose />
        </button>
      </div>
      <div className="modalBody">
        <img src={FailureVector} alt="Failure Vector" />
        <h2 className="headText">{status}</h2>
        <p className="bodyText">An error occurred while submiting your form. Please try again.</p>
      </div>
    </section>
  </Backdrop>
  );
}
