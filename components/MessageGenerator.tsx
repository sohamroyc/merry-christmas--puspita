
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';

const MessageGenerator: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateNewMessage = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Write a unique, 2-3 sentence extremely romantic and poetic Christmas note for Puspita. Focus on themes like warmth, winter light, and being her favorite tradition. Use elegant language.",
        config: {
          temperature: 0.9,
          topP: 0.95,
        }
      });
      
      if (response.text) {
        setMessage(response.text.trim());
      }
    } catch (error) {
      console.error("Failed to generate message", error);
      setMessage("Puspita, every snowflake reminds me of the unique beauty you bring to my life. You are the warmth in my winter and the star atop my tree.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 border border-stone-200 rounded-lg bg-white/50 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-red-900/5 group">
      {!message && !loading && (
        <button 
          onClick={generateNewMessage}
          className="flex flex-col items-center gap-4 mx-auto group transition-all"
        >
          <div className="p-4 rounded-full bg-red-50 text-red-800 group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-stone-400 text-sm tracking-widest uppercase font-light">
            Generate a fresh wish for you
          </span>
        </button>
      )}

      {loading && (
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <Loader2 className="w-6 h-6 text-red-800 animate-spin" />
          <span className="text-stone-400 text-sm italic">Writing a poem in the snow...</span>
        </div>
      )}

      {message && !loading && (
        <div className="text-center animate-[fadeIn_1s_ease-out]">
          <p className="text-xl serif italic text-stone-800 leading-relaxed mb-6">
            “{message}”
          </p>
          <button 
            onClick={generateNewMessage}
            className="text-xs text-stone-400 hover:text-red-800 flex items-center gap-2 mx-auto transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            Another wish?
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageGenerator;
