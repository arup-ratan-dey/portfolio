import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CPStats from './components/CPStats';
import Contests from './components/Contests';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Navbar />
      <Hero />
      <CPStats />
      <Contests />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}

export default App;



