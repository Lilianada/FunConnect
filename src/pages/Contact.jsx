import React from "react";
import ContactHero from "../components/ContactHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="mainWrapper">
      <Header />
      <ContactHero/>
      <ContactForm/>
      <Footer />
    </main>
  );
}
