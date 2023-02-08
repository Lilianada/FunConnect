import React, { useEffect, useState } from "react";
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
import Preloader from "../components/Preloader";

export default function Home() {
  // const [preloader, setPreloader] = useState(true);
  // const [timer, setTimer] = useState(4);

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((timer) => timer - 1);
  //   }, 1000);
  //   if (timer === 0) {
  //     clearInterval(interval);
  //     setPreloader(false);
  //   }
  //   return () => clearInterval(interval);
  // }, [timer]);

  return (
    <>
      {/* {preloader ? (
        <Preloader/>
      ) : ( */}
        <main className="mainContainer" id="mainContainer" data-scroll-container>
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
      {/* )} */}
    </>
  );
}
