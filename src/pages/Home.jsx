import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Blog from "../components/Blog/Blog";
import Explore from "../components/Explore/Explore";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <main className="mainContainer">
        <Header/>
        <Hero/>
        <Benefits/>
        <Features/>
        <Explore/>
        <Blog/>
    </main>
  );
}
