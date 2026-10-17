import React, { useState } from 'react';
import { X, Sparkles, Flame, Moon, Zap, Smile, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/menuData';

export default function ChaiMoodQuiz({ isOpen, onClose, onSelectProduct }) {
  const [step, setStep] = useState(1);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTaste, setSelectedTaste] = useState(null);
  const [matchedProduct, setMatchedProduct] = useState(null);

  if (!isOpen) return null;

  const MOOD_OPTIONS = [
    {
      id: 'focus',
      icon: Zap,
      label: 'Deep Focus & Coding Hustle',
      desc: 'Need cognitive sharpness, zero crash, active alertness.',
      dosha: 'Vata Balancing'
    },
    {
      id: 'tired',
      icon: Flame,
      label: 'Sluggish & Low Energy',
      desc: 'Wake me up with a kick of fiery ginger & spices!',
      dosha: 'Kapha Clearing'
    },
    {
      id: 'relax',
      icon: Moon,
      label: 'De-stress & Evening Unwind',
      desc: 'Calm the mind, relax the nervous system, melt anxiety.',
      dosha: 'Pitta & Vata Soothing'
    },
    {
      id: 'fun',
      icon: Smile,
      label: 'Chilling with Squad / Sweet Vibe',
      desc: 'Give me something decadent, rich, and celebratory!',
      dosha: 'Tridoshic Bliss'
    }
  ];

  const TASTE_OPTIONS = [
    { id: 'kadak', label: 'Zesty & Fiery Kadak (Adrak + Clove)', icon: '🌶️' },
    { id: 'aromatic', label: 'Aromatic & Cardamom Infused (Elaichi)', icon: '✨' },
    { id: 'woody', label: 'Warm Cinnamon & Spices (Cinnamon Chai)', icon: '🪵' },
    { id: 'herbal', label: 'Botanical & Herbal (Tulsi / Turmeric)', icon: '🍃' }
  ];

  const handleCalculateMatch = (tasteId) => {
    setSelectedTaste(tasteId);

    // Matching logic for official BruhVedaa menu
    let matchedId = 'kulhad-chai-signature';
    if (selectedMood === 'focus') {
      matchedId = tasteId === 'herbal' ? 'ginger-turmeric-chai' : 'masala-chai';
    } else if (selectedMood === 'tired') {
      matchedId = 'adrak-chai';
    } else if (selectedMood === 'relax') {
      matchedId = tasteId === 'aromatic' ? 'elaichi-chai' : 'herbal-masala-chai';
    } else if (selectedMood === 'fun') {
      matchedId = tasteId === 'woody' ? 'cinnamon-chai' : 'kulhad-chai-signature';
    }

    const prod = PRODUCTS.find(p => p.id === matchedId) || PRODUCTS[0];
    setMatchedProduct(prod);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setSelectedMood(null);
    setSelectedTaste(null);
    setMatchedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#241610] via-[#1A0F0A] to-[#120B07] border border-terracotta/40 rounded-3xl p-6 sm:p-8 shadow-2xl glow-terracotta overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#120B07] text-chai-300 hover:text-white hover:bg-terracotta/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-saffron/15 text-saffron px-3 py-1 rounded-full text-xs font-bold border border-saffron/30 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vedic Chai Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Find Your Perfect Kulhad, Bruh
          </h2>
          <p className="text-xs sm:text-sm text-chai-300 mt-1">
            Ancient Ayurvedic dosha principles tuned for modern vibes.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-10 bg-saffron' : 'w-4 bg-[#3D1E0E]'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-10 bg-saffron' : 'w-4 bg-[#3D1E0E]'}`} />
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-10 bg-saffron' : 'w-4 bg-[#3D1E0E]'}`} />
        </div>

        {/* Step 1: Mood */}
        {step === 1 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-chai-100 uppercase tracking-wider mb-2">
              Question 1: What’s your current vibe right now?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOOD_OPTIONS.map((mood) => {
                const Icon = mood.icon;
                return (
                  <button
                    key={mood.id}
                    onClick={() => {
                      setSelectedMood(mood.id);
                      setStep(2);
                    }}
                    className="p-4 rounded-2xl bg-[#1A0E08] border border-[#3D1E0E] hover:border-terracotta hover:bg-[#25150C] text-left transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-terracotta/20 text-saffron flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-white text-sm group-hover:text-saffron transition-colors">
                        {mood.label}
                      </div>
                      <div className="text-[11px] text-chai-400 mt-1 leading-snug">
                        {mood.desc}
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold mt-3">
                      ⚡ {mood.dosha}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Taste */}
        {step === 2 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-chai-100 uppercase tracking-wider mb-2">
              Question 2: How do you like your sip?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TASTE_OPTIONS.map((taste) => (
                <button
                  key={taste.id}
                  onClick={() => handleCalculateMatch(taste.id)}
                  className="p-4 rounded-2xl bg-[#1A0E08] border border-[#3D1E0E] hover:border-saffron hover:bg-[#25150C] text-left transition-all duration-200 group"
                >
                  <span className="text-2xl mb-2 block">{taste.icon}</span>
                  <div className="font-bold text-white text-sm group-hover:text-saffron transition-colors">
                    {taste.label}
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-chai-400 hover:text-white pt-2 underline"
            >
              ← Back to previous question
            </button>
          </div>
        )}

        {/* Step 3: Match Result */}
        {step === 3 && matchedProduct && (
          <div className="text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Ayurvedic Vibe Match Found!</span>
            </div>

            <div className="bg-[#160D08] border border-terracotta/40 rounded-2xl p-4 text-left flex gap-4 items-center">
              <img
                src={matchedProduct.image}
                alt={matchedProduct.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-saffron uppercase tracking-wider">
                  {matchedProduct.dosha}
                </span>
                <h4 className="text-lg font-bold text-white font-display leading-tight">
                  {matchedProduct.name}
                </h4>
                <p className="text-xs text-chai-300 line-clamp-2">
                  {matchedProduct.description}
                </p>
                <div className="text-sm font-black text-saffron pt-1">
                  ₹{matchedProduct.price} <span className="text-[10px] text-chai-400 font-normal">/ Kulhad</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onSelectProduct(matchedProduct);
                  onClose();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Add This Match to My Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-[#1A0E08] text-chai-300 hover:text-white border border-[#3D1E0E] text-xs font-semibold transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
