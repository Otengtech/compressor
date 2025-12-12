import React, { useContext} from 'react';
import HeroSection from "../components/homecomponents/HeroSection"
import AboutSection from '../components/homecomponents/WhyChooseUs';
import TestimonialsSection from '../components/homecomponents/TestimonialsSection';
import Newsletter from '../components/homecomponents/Newsletter';
import Footer from '../components/homecomponents/Footer';
import OurTeam from '../components/homecomponents/OurTeam';
import { ContentContext } from "../context/ContentContext";
import Loader from "../components/Loader";

const Home = () => {
  const { homeContent, loadingHome } = useContext(ContentContext);

  if (loadingHome) return <Loader />;
  if (!homeContent) return <p>Error loading home page.</p>;
  return (
    <div>
      <HeroSection content={homeContent.heroSection} />
      <AboutSection content={homeContent.whyChooseUs}/>
      <TestimonialsSection content={homeContent.testimonialSection}/>
      <OurTeam content={homeContent.ourteamSection}/>
      <Newsletter content={homeContent.newsletterSection}/>
      <Footer />
    </div>
  );
}

export default Home;
