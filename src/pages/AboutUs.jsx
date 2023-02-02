import React from 'react';
import AboutHero from '../components/AboutHero';
import Header from '../components/Header';
import OurStory from '../components/OurStory';

export default function AboutUs() {
  return (
    <main className="mainWrapper">
    <Header />
    <AboutHero/>
    <OurStory/>
  </main>
  )
}
