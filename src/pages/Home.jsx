import React, { useEffect, useState } from "react";
import { useRef } from "react";
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
import useLocoScroll from "../hooks/useLocoScroll";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(5);
  const id = useRef(null);
  
  useLocoScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);   

  return (
    <>
      {preloader ? (
        <Preloader/>
      ) : (
        <main className="mainContainer" id="mainContainer" data-scroll-container>
          <Header />
          <Hero />
          <Benefits />
          <Features />
          <Explore />
          <Blog />
          <FAQ />
          <Discover />
          <Footer />
          <BackToTop />
        </main>
      )}
    </>
  );
}
