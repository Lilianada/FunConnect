import React from 'react';
import Backdrop from '../Backdrop';
import { IoClose } from 'react-icons/io5';
import SuccessVector from '../../assets/images/SuccessVector.png';
import './style.scss';

export default function SuccessModal() {
  return (
    <Backdrop>
      <section className="successModal">
        <div className="modalHead">
          <button type='button'>
            <IoClose />
          </button>
        </div>
        <div className="modalBody">
          <img src={SuccessVector} alt="Success Vector" />
          <h2 className="headText">Submitted Succesfully</h2>
          <p className="bodyText">Our team will reach out to you after 48 hours.</p>
        </div>
      </section>
    </Backdrop>
  )
}
