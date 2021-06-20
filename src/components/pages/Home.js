import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CovidInfo from '../CovidInfo';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUs from '../AboutUs';
import Portfolio from '../Portfolio';
import ContactUs from '../ContactUs';
import Testimoni from '../Testimoni';
import Features from '../Features';

function Home() {
  return (
    <>
      <HeroSection />
      <CovidInfo />
      <AboutUs />
      <Portfolio />
      <Features />
      <ContactUs />
      <Testimoni />
      <Footer />
    </>
  );
}

export default Home;