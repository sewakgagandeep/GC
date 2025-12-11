import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import AiIdeaGenerator from './components/AiIdeaGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Menu />
        <AiIdeaGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;