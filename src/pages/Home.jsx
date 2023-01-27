import React, { useEffect, useState } from "react";
import { useRef } from "react";
import BackToTop from "../components/BackToTop";
import Benefits from "../components/Benefits/Benefits";
import Blog from "../components/Blog/Blog";
import Discover from "../components/Discover/Discover";
import Explore from "../components/Explore/Explore";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Preloader from "../components/Preloader";

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
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
        <main className="mainContainer" data-scroll-container>
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
