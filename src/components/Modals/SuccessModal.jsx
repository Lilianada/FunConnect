import React from 'react';
import Backdrop from '../Backdrop';
import { IoClose } from 'react-icons/io5';
import SuccessVector from '../../assets/images/SuccessVector.png';
import './style.scss';

export default function SuccessModal({closeModal, status}) {
  return (
    <Backdrop>
      <section className="modalWrap">
        <div className="modalHead">
          <button type='button' onClick={closeModal}>
            <IoClose />
          </button>
        </div>
        <div className="modalBody">
          <img src={SuccessVector} alt="Success Vector" />
          <h2 className="headText">{status}</h2>
          <p className="bodyText">Our team will reach out to you after 48 hours.</p>
        </div>
      </section>
    </Backdrop>
  )
}
