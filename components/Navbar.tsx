import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { BUSINESS_NAME, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ask AI', href: '#ai-gen' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2 ${isScrolled ? 'md:bg-white md:shadow-md md:py-2' : 'md:bg-transparent md:shadow-none md:py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center"
          >
            <img
              src="./logo.png"
              alt={BUSINESS_NAME}
              className={`object-contain transition-all duration-300 h-20 ${isScrolled ? 'md:h-24' : 'md:h-40'
                }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-bold tracking-wide transition-all duration-300 ${link.name === 'Contact'
                  ? 'bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                  : 'text-stone-600 hover:text-primary'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-secondary transition-transform hover:scale-110 ml-2"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary mr-4"
            >
              <Instagram size={24} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium block ${link.name === 'Contact' ? 'text-primary font-bold' : 'text-stone-700 hover:text-primary'
                  }`}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-100 mt-2">
              <p className="text-sm text-stone-500 mb-2 uppercase tracking-wider font-bold">Order Now</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-secondary font-bold text-xl">
                <Phone size={20} className="mr-2 fill-current" /> {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;