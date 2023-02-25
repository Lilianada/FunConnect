import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsCondition from '../components/TermsCondition';

export default function Terms() {
  return (
    <main className="mainContainer" id="mainContainer">
        <Header/>
        <TermsCondition/>
        <Footer/>
    </main>
  )
}
