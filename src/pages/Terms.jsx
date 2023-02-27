import React from 'react';
import BackToTop from '../components/BackToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermsCondition from '../components/TermsCondition';

export default function Terms() {
  return (
    <main className="mainContainer" id="mainContainer">
        <Header/>
        <TermsCondition/>
        <Footer/>
        <BackToTop />
    </main>
  )
}
