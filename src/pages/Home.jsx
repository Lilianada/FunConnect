import React from "react";
import { gsap, Power3 } from "gsap";
import BackToTop from "../components/BackToTop";
import Benefits from "../components/Benefits";
import Blog from "../components/Blog";
import Discover from "../components/Discover";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  
  return (
    <main className="mainContainer" id="mainContainer">
      <Header />
      <Hero timeline={tl} ease={ease} />
      <Benefits />
      <Features />
      <Explore />
      <Blog />
      <FAQ />
      <Discover />
      <Footer />
      <BackToTop />
    </main>
  );
}
