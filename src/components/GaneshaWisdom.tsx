import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GaneshaWisdom() {
  const [wisdom, setWisdom] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateWisdom = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Give me a beautiful, short, and high-quality spiritual blessing or a small quote about Lord Ganesha for the 'Sri Siddi Vinayaka Navaratri 2026' festival. Make it feel authentic, peaceful, and auspicious.",
        config: {
          systemInstruction: "You are a wise and devotional spiritual guide specializing in Ganesha Bhakti. Your messages are always positive, elegant, and spiritually uplifting.",
        },
      });
      setWisdom(response.text || "May Lord Ganesha bless you with prosperity and wisdom.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setWisdom("Om Gan Ganapataye Namaha. May your path be cleared of all obstacles.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 glass-devotional rounded-sm text-center shadow-divine border-[#D4AF37]/20 relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 px-4 bg-gold/10 rounded-full"></div>
      <h3 className="font-serif text-2xl text-temple-red mb-4 font-bold">Auspicious Blessing</h3>
      
      <AnimatePresence mode="wait">
        {wisdom ? (
          <motion.div
            key="wisdom"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 italic text-[#5D1212]/80 font-serif text-lg leading-relaxed px-4"
          >
            "{wisdom}"
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-gray-400 font-serif italic"
          >
            Receive a daily blessing from Lord Siddi Vinayaka
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={generateWisdom}
        disabled={loading}
        className="inline-flex items-center gap-3 px-10 py-3 gold-gradient text-white rounded-sm font-bold uppercase tracking-widest text-[11px] hover:brightness-110 transition-all shadow-lg active:scale-95 disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
        <span>Seek Blessing</span>
      </button>
    </div>
  );
}
