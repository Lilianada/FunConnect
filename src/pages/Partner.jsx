import React from "react";
import Header from "../components/Header";
import PartnerHero from "../components/PartnerHero";
import WhyPartner from "../components/WhyPartner";
import PartnerFaq from "../components/PartnerFaq";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PartnerRegisteration from "../components/PartnerRegister";


export default function Partner() {
  return (
  <main className="mainContainer">
    <Header/>
    <PartnerHero />
    <WhyPartner />
    <PartnerRegisteration />
    <PartnerFaq />
    <Footer/>
    <BackToTop/>
  </main>
    );
}
