import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Personal from './components/Personal/Personal';
import Consultation from './components/Consultation/Consultation';
import Section from './components/Section/Section';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Intro />
      <Personal/>
      <Consultation/>
      <Section/>
      <Testimonial />
      <Contact />
      <div className="PageEnd">
      <NewsLetter />
      <Footer />
      </div>
    </div>
  );
}

export default App;
