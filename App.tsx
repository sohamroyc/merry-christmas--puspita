
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Snowflake, Star, Gift, Music2, Music, Pause, Play } from 'lucide-react';
import Snowfall from './components/Snowfall';
import FairyLights from './components/FairyLights';
import Section from './components/Section';
import MessageGenerator from './components/MessageGenerator';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSpecialNote, setShowSpecialNote] = useState(false);

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-red-100">
      <Snowfall />
      <FairyLights />

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute top-10 flex space-x-4 opacity-50">
          <Star className="w-4 h-4 text-amber-400 animate-pulse" />
          <Star className="w-6 h-6 text-amber-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          <Star className="w-4 h-4 text-amber-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="z-10 animate-[fadeIn_2s_ease-out]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl pine-green mb-6 font-medium">
            Merry Christmas, <br />
            <span className="italic deep-red">Puspita</span> 🎄
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            “Some gifts aren’t wrapped. <br className="hidden md:block" />
            Some miracles wear your smile.”
          </p>
          
          <button 
            onClick={() => scrollTo('message')}
            className="mt-12 px-8 py-3 border border-stone-300 text-stone-600 hover:border-red-800 hover:text-red-800 transition-all duration-500 rounded-full text-sm tracking-widest uppercase flex items-center gap-2 mx-auto"
          >
            Open Your Letter
            <Heart className="w-3 h-3 text-red-700 animate-pulse" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-stone-400"></div>
        </div>
      </header>

      {/* Message Section */}
      <Section id="message" className="bg-[#FAF7F2] py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-12 flex justify-center">
            <Gift className="w-8 h-8 text-red-800 opacity-60" />
          </div>
          <h2 className="text-3xl md:text-4xl pine-green mb-10 italic">A Winter's Whisper</h2>
          <div className="space-y-6 text-lg text-stone-700 leading-relaxed font-light">
            <p>
              Puspita, as the cold wind brushes against the windows and the world glows with the soft light of Christmas, my heart feels only warmth because of you.
            </p>
            <p>
              This season is more than just ornaments and trees; it's a celebration of the love we share. Every moment spent with you feels like a quiet, beautiful miracle—the kind that makes the simplest day feel like a grand holiday.
            </p>
            <p>
              Thank you for being my constant, my peace, and my greatest tradition. Your laughter is my favorite Christmas carol, and your presence is the only gift I ever truly need.
            </p>
            <p className="pt-8 serif italic text-2xl deep-red">
              Forever yours, <br />
              In every snowflake and every star.
            </p>
          </div>
          
          <div className="mt-20">
             <MessageGenerator />
          </div>
        </div>
      </Section>

      {/* Memories Section */}
      <Section id="memories" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemoryCard 
              image="photo1.jpg"
              caption="The warmth of your hand in mine."
            />
            <MemoryCard 
              image="photo2.jpg"
              caption="Every season feels warmer with you."
            />
            <MemoryCard 
              image="photo3.jpg"
              caption="A quiet night, a million thoughts of us."
            />
          </div>
        </div>
      </Section>

      {/* Special Quote Section */}
      <Section className="bg-[#1A3C34] text-[#FDFBF7] py-32 md:py-48 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 opacity-40">
            <Snowflake className="w-12 h-12 mx-auto animate-[spin_10s_linear_infinite]" />
          </div>
          <blockquote className="text-3xl md:text-5xl lg:text-6xl serif italic leading-tight">
            “If Christmas is about love, then you’re my favorite tradition.”
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4 text-amber-400">
            <div className="h-px w-12 bg-amber-400 opacity-30"></div>
            <Heart className="w-5 h-5 fill-amber-400" />
            <div className="h-px w-12 bg-amber-400 opacity-30"></div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-20 text-center bg-[#FDFBF7] border-t border-stone-100">
        <div className="mb-8 flex justify-center space-x-6 opacity-30">
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
        </div>
        <p className="text-stone-500 font-light tracking-widest uppercase text-xs mb-4">
          Merry Christmas 2025
        </p>
        <p className="serif italic text-xl pine-green mb-8">
          Forever yours, this Christmas and all the ones to come.
        </p>
        <div className="flex items-center justify-center space-x-1 text-red-800 opacity-60">
          <span>Made for</span>
          <Heart className="w-3 h-3 fill-current" />
          <span>Puspita</span>
        </div>
      </footer>
    </div>
  );
};

const MemoryCard: React.FC<{ image: string; caption: string }> = ({ image, caption }) => {
  const placeholder = `https://picsum.photos/seed/${encodeURIComponent(image)}/800/1000`;
  const [src, setSrc] = React.useState<string>(`/photos/${encodeURIComponent(image)}`);

  React.useEffect(() => {
    setSrc(`/photos/${encodeURIComponent(image)}`);
  }, [image]);

  return (
    <div className="group overflow-hidden rounded-sm">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img 
          src={src} 
          alt="Memory" 
          onError={() => setSrc(placeholder)}
          className="object-cover w-full h-full grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
      <p className="mt-6 text-stone-600 font-light italic text-center tracking-wide">{caption}</p>
    </div>
  );
};

export default App;
