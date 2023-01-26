import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './ErrorPage.scss';

export default function ErrorPage() {
  return (
    <section className='errorPage'>
      <img src={Logo} alt="Logo"/>
        <h1>404</h1>
        <h4>You’re officially in no man’s land.</h4>
        <p>Ooops! Check the URL and try again</p>
    </section>
  )
}
