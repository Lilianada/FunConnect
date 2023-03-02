import React from 'react';
import BackToTop from '../components/BackToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicies from '../components/PrivacyPolicies';

export default function Policies() {
  return (
    <main className="mainContainer">
      <Header />
      <PrivacyPolicies />
      <Footer/>
      <BackToTop />
    </main>
  )
}
