import React from 'react';

import './App.css';

import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    );
  };
}

export default App;
