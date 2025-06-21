import React from 'react';
import Hero from "./section/Hero.jsx";
import Nav from './components/Nav.jsx';
import TeckStack from './section/TeckStack.jsx';
import Testimonials from './section/Testimonials.jsx';
import Contact from './section/Contact.jsx';
import Footer from './section/Footer.jsx';


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <TeckStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App