import React from 'react';
import { ABOUT_CONTENT, TAGLINE_PUNJABI } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-3 transition-transform hover:rotate-0 duration-500">
               <img 
                 src="https://picsum.photos/id/429/800/1000" 
                 alt="Fresh ingredients and baking tools" 
                 className="w-full h-auto object-cover"
               />
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-[-20px] left-[-20px] w-24 h-24 bg-primary/20 rounded-full z-0 blur-xl"></div>
             <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-accent/20 rounded-full z-0 blur-xl"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 bg-blue-100 text-primary rounded-full text-sm font-bold tracking-wider mb-2">
              SINCE 2020
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              {ABOUT_CONTENT.title}
            </h2>
            <h3 className="text-xl text-stone-500 font-serif italic">
              {ABOUT_CONTENT.subtitle}
            </h3>
            
            <div className="prose prose-lg text-stone-600">
              <p className="leading-relaxed">
                {ABOUT_CONTENT.description1}
              </p>
              <p className="leading-relaxed">
                {ABOUT_CONTENT.description2}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm mt-6">
              <Quote className="text-primary w-8 h-8 mb-2 opacity-50" />
              <p className="text-lg font-bold text-secondary font-serif">
                "{TAGLINE_PUNJABI}"
              </p>
              <p className="text-sm text-stone-500 mt-1">
                (As is the food, so is the mind)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;