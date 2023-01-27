import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.scss';

export default function ErrorPage() {
  return (
    <section className='errorPage'>
      <div className="errorContent">
        <img src={Logo} alt="Logo"/>
          <h3 className='errorPage__subtitle'>404</h3>
          <h1 className='errorPage__title'>You’re officially in no man’s land.</h1>
          <p className='errorPage__text'>Ooops! Check the URL and try again.</p>
          <button className="errorPage__button">
            Go back home
          </button>
      </div>
    </section>
  )
}
