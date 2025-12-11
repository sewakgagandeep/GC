import React from 'react';
import { TAGLINE_PUNJABI, TAGLINE_ENGLISH, SUB_TAGLINE } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-stone-50 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider mb-2">
            {SUB_TAGLINE.toUpperCase()}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif text-secondary font-bold leading-tight">
            Gurparsad <br />
            <span className="text-primary">Creations</span>
          </h1>

          <div className="space-y-2">
            <p className="text-3xl md:text-4xl text-stone-800 font-serif italic">
              {TAGLINE_PUNJABI}
            </p>
            <p className="text-lg md:text-xl text-stone-600 font-sans uppercase tracking-widest">
              {TAGLINE_ENGLISH}
            </p>
          </div>

          <p className="text-stone-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Homemade happiness from Brampton. 100% Vegetarian, 100% Fresh. 
            Experience the taste of purity with our custom cakes and muffins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, '#menu')}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-secondary transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              View Menu
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-3 border-2 border-secondary text-secondary rounded-full font-bold hover:bg-secondary hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2/3 h-2/3 bg-accent/10 rounded-full"></div>
            
            {/* Main Image - Using a placeholder that resembles muffins/cupcakes */}
            <img 
              src="https://picsum.photos/id/102/800/800" 
              alt="Assorted Muffins and Cupcakes" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400 hover:text-primary transition-colors cursor-pointer"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;