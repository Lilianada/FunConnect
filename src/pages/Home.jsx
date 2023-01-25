import React from "react";
import BackToTop from "../components/BackToTop/BackToTop";
import Benefits from "../components/Benefits/Benefits";
import Blog from "../components/Blog/Blog";
import Discover from "../components/Discover/Discover";
import Explore from "../components/Explore/Explore";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FrequentlyAskedQstn/FAQ";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <main className="mainContainer">
      <Header />
        <Hero />
        <Benefits />
        <Features />
        <Explore />
        <Blog />
        <FAQ/>
        <Discover/>
      <Footer />
      <BackToTop/>
      </main>
    </>
  );
}
