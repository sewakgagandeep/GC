import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const CATEGORIES = ['All', 'Cakes', 'Cupcakes', 'Muffins', 'Other'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Offerings</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">Fresh from the Oven</h2>
          <div className="max-w-2xl mx-auto h-px bg-stone-200"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col group">
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                   <a 
                     href="#contact" 
                     onClick={scrollToContact}
                     className="block w-full bg-white text-secondary text-center py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
                   >
                     Order This
                   </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-secondary mb-2 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-primary bg-blue-50 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            No items found in this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default Menu;