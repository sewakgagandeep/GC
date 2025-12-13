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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./hero_background.png"
          alt="Gurparsad Creations - Eggless Bakery and Homemade Cakes in Brampton"
          className="w-full h-full object-cover"
        />
        {/* Overlay for text readability - lighter for light theme */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-1000">
          <span className="inline-block px-4 py-1 rounded-full bg-white/80 text-primary font-bold text-sm tracking-wider mb-2 shadow-sm backdrop-blur-sm border border-white">
            {SUB_TAGLINE.toUpperCase()}
          </span>

          <h1 className="text-4xl md:text-8xl font-serif text-secondary font-bold leading-tight drop-shadow-sm">
            Gurparsad <br />
            <span className="text-primary">Creations</span>
          </h1>

          <div className="space-y-4">
            <p className="text-3xl md:text-5xl text-stone-800 font-serif italic drop-shadow-sm">
              {TAGLINE_PUNJABI}
            </p>
            <p className="text-lg md:text-2xl text-stone-700 font-sans uppercase tracking-widest font-semibold">
              {TAGLINE_ENGLISH}
            </p>
          </div>

          <p className="text-stone-800 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium bg-white/40 p-4 rounded-xl backdrop-blur-sm">
            Homemade happiness from Brampton. 100% Vegetarian, 100% Fresh.
            Experience the taste of purity with our custom cakes and muffins.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="#menu"
              onClick={(e) => scrollToSection(e, '#menu')}
              className="px-10 py-4 bg-primary text-white text-lg rounded-full font-bold shadow-xl hover:bg-secondary hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              View Menu
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-10 py-4 bg-white/90 text-secondary text-lg border-2 border-secondary rounded-full font-bold hover:bg-secondary hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => scrollToSection(e, '#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-700 hover:text-primary transition-colors cursor-pointer z-20 hidden md:block"
      >
        <ArrowDown size={40} />
      </a>
    </section>
  );
};

export default Hero;