import React, { useState } from 'react';
import { Sparkles, Leaf, Shield, Flame, Check } from 'lucide-react';

export default function VedicHeritage() {
  const [activeHerbIndex, setActiveHerbIndex] = useState(0);

  const HERBS = [
    {
      name: 'Kashmiri Mongra Kesar',
      hindi: 'कश्मीरी केसर',
      botanical: 'Crocus Sativus',
      benefit: 'Mood Elevator & Cellular Radiance',
      description: 'Grade-A handpicked Mongra saffron from the fields of Pampore, Kashmir. Rich in crocin and safranal to promote calm serenity and glowing vitality.',
      inBrews: ['Kesariya Dum Kulhad Chai', 'Royal Kashmiri Kahwa', 'Kesar Pista Mawa Cake'],
      icon: '🌸',
      accent: 'border-saffron'
    },
    {
      name: 'Krishna Tulsi (Holy Basil)',
      hindi: 'कृष्ण तुलसी',
      botanical: 'Ocimum Tenuiflorum',
      benefit: 'Immunity Shield & Prana Flow',
      description: 'Revered as the Queen of Herbs in Charaka Samhita. Strengthens lungs, soothes throat congestion, and regulates internal stress hormones.',
      inBrews: ['Kadak Tulsi Adrak Immunity Chai'],
      icon: '🌿',
      accent: 'border-emerald-500'
    },
    {
      name: 'Organic Brahmi',
      hindi: 'ब्राह्मी',
      botanical: 'Bacopa Monnieri',
      benefit: 'Cognitive Sharpness & Memory Focus',
      description: 'Ancient medhya rasayana herb cherished by yogis and modern coders alike. Enhances synaptic transmission and mental stamina without caffeine jitters.',
      inBrews: ['Brahmi Zen Brain Booster Chai'],
      icon: '🧠',
      accent: 'border-cyan-500'
    },
    {
      name: 'KSM-66 Ashwagandha',
      hindi: 'अश्वगंधा',
      botanical: 'Withania Somnifera',
      benefit: 'Cortisol Reduction & Evening Rest',
      description: 'Full-spectrum organic root extract scientifically studied for lowering stress, stabilizing nervous energy, and nurturing rejuvenating sleep.',
      inBrews: ['Ashwagandha Moon Velvet Chai', 'Power Boost Herb Shots'],
      icon: '🌙',
      accent: 'border-purple-500'
    },
    {
      name: 'Pahadi Sunth & Adrak',
      hindi: 'अदरक और सोंठ',
      botanical: 'Zingiber Officinale',
      benefit: 'Kindles Digestive Fire (Agni)',
      description: 'Hand-pounded fresh hill ginger with sun-dried sonth powder. Wakes up the gut, relieves fatigue, and gives that quintessential Indian kadak kick.',
      inBrews: ['Tulsi Adrak Chai', 'Bruh’s Dirty Iced Chai'],
      icon: '⚡',
      accent: 'border-terracotta'
    }
  ];

  const currentHerb = HERBS[activeHerbIndex];

  return (
    <section id="roots" className="py-20 relative bg-[#140B07] border-y border-[#3D1E0E]/60 overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-terracotta/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>The Science of the Sip</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            11 Sacred Herbs. Zero Synthetics.
          </h2>
          <p className="text-sm sm:text-base text-chai-300 mt-3 font-light">
            We don’t use artificial syrups or powdered chai premixes. Every morning, our herbs are freshly stone-crushed and slowly steeped to extract raw bio-active potency.
          </p>
        </div>

        {/* Interactive Herb Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Herb Selector Pills */}
          <div className="lg:col-span-5 space-y-2.5">
            {HERBS.map((herb, idx) => (
              <button
                key={idx}
                onClick={() => setActiveHerbIndex(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group ${
                  activeHerbIndex === idx
                    ? 'bg-[#22130C] border-saffron shadow-lg shadow-saffron/10 translate-x-2'
                    : 'bg-[#180E09] border-[#3D1E0E] hover:border-terracotta/40 hover:bg-[#1D110B]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-xl bg-[#120B07] group-hover:scale-110 transition-transform">
                    {herb.icon}
                  </span>
                  <div>
                    <div className="font-bold text-sm text-white group-hover:text-saffron transition-colors">
                      {herb.name}
                    </div>
                    <div className="text-[11px] text-chai-400 font-serif italic">
                      {herb.hindi} • {herb.botanical}
                    </div>
                  </div>
                </div>

                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                  activeHerbIndex === idx ? 'bg-saffron text-black font-bold' : 'text-chai-400'
                }`}>
                  {herb.benefit.split('&')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Herb Spotlight Detail Card */}
          <div className="lg:col-span-7">
            <div className={`bg-gradient-to-b from-[#241610] to-[#180E09] border ${currentHerb.accent} rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-all duration-300`}>
              
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{currentHerb.icon}</span>
                <span className="bg-saffron/15 text-saffron text-xs font-bold px-3 py-1 rounded-full border border-saffron/30 uppercase tracking-widest">
                  Vedic Adaptogen
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  {currentHerb.name}
                </h3>
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                  PRIMARY BENEFIT: {currentHerb.benefit.toUpperCase()}
                </div>
                <p className="text-xs sm:text-sm text-chai-300 leading-relaxed font-light">
                  {currentHerb.description}
                </p>
              </div>

              {/* Brews where it's featured */}
              <div className="pt-4 border-t border-[#3D1E0E]">
                <div className="text-[11px] font-bold text-chai-400 uppercase tracking-wider mb-2">
                  Featured In Our Signature Brews:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentHerb.inBrews.map((brew, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs bg-[#140B07] text-saffron border border-saffron/30 px-3 py-1.5 rounded-xl font-medium"
                    >
                      ☕ {brew}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
