import React from "react";
import ContactHero from "../components/ContactHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import BackToTop from "../components/BackToTop";

export default function Contact() {
  return (
    <main className="mainWrapper">
      <Header />
      <ContactHero/>
      <ContactForm/>
      <ContactInfo/>
      <Footer />
      <BackToTop/>
    </main>
  );
}
