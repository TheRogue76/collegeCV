import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  return (
    <PortfolioProvider
      value={{
        projects: [...projectsData],
        hero: { ...heroData },
        contact: { ...contactData },
        about: { ...aboutData },
        footer: { ...footerData },
      }}
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
