import React from 'react';
import HeroSection from "../components/homecomponents/HeroSection"
import AboutSection from '../components/homecomponents/WhyChooseUs';
import TestimonialsSection from '../components/homecomponents/TestimonialsSection';
import ProductsSection from '../components/homecomponents/ProductsSection';
import Newsletter from '../components/homecomponents/Newsletter';
import Footer from '../components/homecomponents/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
