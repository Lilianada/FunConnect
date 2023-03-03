import React from "react";
import Header from "../components/Header";
import PartnerHero from "../components/PartnerHero";
import WhyPartner from "../components/WhyPartner";
import RegisterPartner from "../components/RegisterPartner";
import PartnerFaq from "../components/PartnerFaq";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";


export default function Partner() {
  return (
  <main className="mainContainer">
    <Header/>
    <PartnerHero />
    <WhyPartner />
    <RegisterPartner />
    <PartnerFaq />
    <Footer/>
    <BackToTop/>
  </main>
    );
}
