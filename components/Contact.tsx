import React from 'react';
import { Phone, MapPin, Instagram, Clock, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">Order Now</h2>
              <p className="text-stone-300 text-lg">Ready to nourish your soul with veg delights?</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Call or Text</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-serif text-accent hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-stone-400 mt-1">For orders and queries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Instagram</h3>
                  <a 
                    href={CONTACT_INFO.instagramUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-lg hover:underline text-stone-300"
                  >
                    {CONTACT_INFO.instagramHandle}
                  </a>
                  <p className="text-sm text-stone-400 mt-1">Kindly DM for availability</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">Location</h3>
                  <p className="text-lg text-stone-300">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 flex gap-4 items-start">
              <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-accent text-lg mb-1">Ordering Policy</h4>
                <p className="text-stone-300">{CONTACT_INFO.notice}</p>
              </div>
            </div>
          </div>

          {/* Visual element / Map placeholder */}
          <div className="relative h-full min-h-[400px] bg-stone-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            {/* Using a static map image placeholder for Brampton */}
            <img 
              src="https://picsum.photos/id/106/800/800" 
              alt="Baking atmosphere" 
              className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black/40">
              <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/30">
                 <h3 className="text-3xl font-serif font-bold text-white mb-2">Gurparsad Creations</h3>
                 <p className="text-cream italic">Brampton, Ontario</p>
                 <div className="mt-6">
                    <a 
                      href={CONTACT_INFO.instagramUrl}
                      target="_blank"
                      rel="noreferrer" 
                      className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-white hover:text-primary transition-colors"
                    >
                      Follow on Instagram
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;