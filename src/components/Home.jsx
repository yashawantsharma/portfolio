import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const Home = ({ onOpenTerminal, onOpenPalette }) => {
  return (
    <main className="portfolio-main">
      <Hero onOpenTerminal={onOpenTerminal} onOpenPalette={onOpenPalette} />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default Home;
