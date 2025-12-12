import React from 'react';
import { BUSINESS_NAME, TAGLINE_PUNJABI } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="./Sticker-Final.png"
            alt={BUSINESS_NAME}
            className="h-20 sm:h-32 md:h-40 object-contain"
          />
        </div>
        <p className="font-serif italic mb-8 text-stone-500">{TAGLINE_PUNJABI}</p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium tracking-wide">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-primary transition-colors cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-primary transition-colors cursor-pointer">About Us</a>
          <a href="#menu" onClick={(e) => scrollToSection(e, '#menu')} className="hover:text-primary transition-colors cursor-pointer">Menu</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm opacity-60">
          <span>Made with</span>
          <Heart size={14} className="text-red-500 fill-current" />
          <span>in Brampton</span>
        </div>

        <p className="text-xs mt-6 text-stone-600">
          &copy; {new Date().getFullYear()} Gurparsad Creations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;