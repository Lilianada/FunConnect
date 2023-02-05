import React from "react";
import ContactHero from "../components/ContactHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <main className="mainWrapper">
      <Header />
      <ContactHero/>
      <ContactInfo/>
      <Footer />
    </main>
  );
}
