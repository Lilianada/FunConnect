import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicies from '../components/PrivacyPolicies';

export default function Policies() {
  return (
    <main className="mainContainer" id="mainContainer">
      <Header />
      <PrivacyPolicies />
      <Footer/>
    </main>
  )
}
