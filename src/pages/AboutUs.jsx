import React from 'react';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OurCulture from '../components/OurCulture';
import OurStory from '../components/OurStory';
import Team from '../components/Team';

export default function AboutUs() {
  return (
    <main className="mainWrapper">
    <Header />
    <AboutHero/>
    <OurStory/>
    <OurCulture/>
    <Team/>
    <Footer />
  </main>
  )
}
