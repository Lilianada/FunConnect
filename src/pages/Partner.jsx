import React from "react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PartnerHero from "../components/PartnerHero";
import WhyPartner from "../components/WhyPartner";
import RegisterPartner from "../components/RegisterPartner";


export default function Partner() {
  return (
  <main className="mainContainer">
    <Header/>
    <PartnerHero />
    <WhyPartner />
    <RegisterPartner />
    <Footer/>
    <BackToTop/>
  </main>
    );
}
