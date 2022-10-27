import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';

function Main() {
  return (
    <main>
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Main;
