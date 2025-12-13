import React, { useState } from 'react';
import { Sparkles, Loader2, Cake } from 'lucide-react';
import { generateCakeIdea } from '../services/geminiService';

const AiIdeaGenerator: React.FC = () => {
  const [occasion, setOccasion] = useState('');
  const [flavor, setFlavor] = useState('');
  const [notes, setNotes] = useState('');
  const [idea, setIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!occasion || !flavor) return;

    setLoading(true);
    setIdea(null);
    const result = await generateCakeIdea(occasion, flavor, notes);
    setIdea(result);
    setLoading(false);
  };

  return (
    <section id="ai-gen" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Sparkles className="text-primary w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">
            Can't Decide? Ask AI!
          </h2>
          <p className="text-stone-600">
            Describe your event, and our AI will suggest a perfect custom cake design using our style (No fondant, 100% Veg).
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8">
          {/* Form */}
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Occasion</label>
              <input
                type="text"
                placeholder="e.g., Mom's 50th Birthday, Baby Shower"
                className="w-full p-3 bg-stone-50 text-stone-800 placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Preferred Flavor</label>
              <select
                className="w-full p-3 bg-stone-50 text-stone-800 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
              >
                <option value="" className="text-stone-400">Select a flavor...</option>
                <option value="Vanilla">Vanilla</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Fruit Cake">Fresh Fruit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Any Preferences? (Optional)</label>
              <input
                type="text"
                placeholder="e.g., loves blue color, floral theme"
                className="w-full p-3 bg-stone-50 text-stone-800 placeholder-stone-400 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={loading || !occasion || !flavor}
              className="w-full py-3 bg-secondary text-white font-bold rounded-lg hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
              Generate Idea
            </button>
          </div>

          {/* Result Area */}
          <div className="w-full md:w-1/2 bg-stone-50 rounded-xl border border-stone-100 p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
            {loading ? (
              <div className="space-y-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
                <p className="text-stone-500 animate-pulse">Dreaming up a delicious design...</p>
              </div>
            ) : idea ? (
              <div className="animate-fade-in text-left w-full">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-200">
                  <Cake className="text-primary" />
                  <h3 className="font-bold text-secondary text-lg">Suggestion:</h3>
                </div>
                <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                  {idea}
                </p>
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <p className="text-xs text-stone-400 text-center">
                    Like this idea? Take a screenshot and send it to us on Instagram!
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-stone-400">
                <Cake className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Fill out the form to get a custom cake design suggestion tailored to Gurparsad Creations' style.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiIdeaGenerator;