import React from 'react';
import HeroSection from "../components/homecomponents/HeroSection"
import AboutSection from '../components/homecomponents/WhyChooseUs';
import TestimonialsSection from '../components/homecomponents/TestimonialsSection';
import Newsletter from '../components/homecomponents/Newsletter';
import Footer from '../components/homecomponents/Footer';
import OurTeam from '../components/homecomponents/OurTeam';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <OurTeam />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
