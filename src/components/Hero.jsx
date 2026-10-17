import React, { useState } from 'react';
import { Sparkles, ArrowRight, MapPin, Flame, Award, Heart, ShieldCheck, Coffee } from 'lucide-react';

export default function Hero({ onOpenQuiz, onOpenLocations, onQuickOrderFeatured }) {
  const [steamIntense, setSteamIntense] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-saffron/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-cardamom-700/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Concept & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-terracotta/20 via-saffron/15 to-transparent border border-terracotta/40 px-4 py-1.5 rounded-full text-xs font-semibold text-saffron tracking-wide">
              <Flame className="w-3.5 h-3.5 text-terracotta animate-bounce" />
              <span>THE NEW AGE CHAI REVOLUTION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-saffron"></span>
              <span className="text-chai-200">NO ARTIFICIAL PREMIXES EVER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display leading-[1.08]">
              Where Ancient Vedic Alchemy Meets{' '}
              <span className="relative inline-block text-gradient-gold">
                Modern Street Soul.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-terracotta/80" viewBox="0 0 300 20" fill="none">
                  <path d="M5 15Q150 0 295 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-chai-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into <strong className="text-white font-semibold">Bruh<span className="text-[#D46938] font-['Yatra_One'] ml-0.5">वेद:</span></strong>. Slow-simmered over live charcoal embers in earthen clay pots, infused with 11 adaptogenic Himalayan herbs, and poured steaming hot into genuine Mitti Kulhads.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-terracotta via-terracotta-light to-saffron text-[#160D08] font-extrabold text-base shadow-xl hover:shadow-terracotta/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Menu & Order Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#241610] hover:bg-[#2F1C14] text-saffron font-bold text-sm border border-saffron/30 hover:border-saffron transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-saffron" />
                <span>Find Your Chai Match (Dosha Quiz)</span>
              </button>

              <button
                onClick={onOpenLocations}
                className="w-full sm:w-auto p-4 rounded-full bg-[#1A0E08] hover:bg-[#25150C] text-chai-200 hover:text-white border border-[#3D1E0E] transition-colors flex items-center justify-center gap-2"
                title="View Cafe Locations"
              >
                <MapPin className="w-4 h-4 text-terracotta" />
                <span className="text-sm font-semibold sm:hidden">Locate Adda</span>
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-6 border-t border-[#3D1E0E]/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-black text-white font-display">2,50,000+</div>
                <div className="text-xs text-chai-400 font-medium">Kulhads Smashed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-saffron font-display">4.9 ★★★★★</div>
                <div className="text-xs text-chai-400 font-medium">15k+ Real Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400 font-display">11 Herbs</div>
                <div className="text-xs text-chai-400 font-medium">Ayurvedic Sourced</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Kulhad with Steam Animation */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* The Floating Hero Card */}
            <div 
              onMouseEnter={() => setSteamIntense(true)}
              onMouseLeave={() => setSteamIntense(false)}
              className="relative w-full max-w-md bg-gradient-to-b from-[#241610] to-[#160D08] rounded-3xl p-6 sm:p-8 border border-terracotta/30 shadow-2xl glow-terracotta transition-transform duration-500 hover:-translate-y-2 group cursor-pointer"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 bg-saffron/15 text-saffron border border-saffron/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Crowd Signature
                </span>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Slow Stewing on Embers
                </span>
              </div>

              {/* Central Image Container with Animated Steam */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-t from-[#120B07] to-transparent mb-5 flex items-end justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80" 
                  alt="Kesariya Dum Kulhad Chai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />

                {/* Steam simulation waves */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none transition-all duration-300 ${steamIntense ? 'scale-125 opacity-90' : 'opacity-60'}`}>
                  <span className="text-3xl text-saffron/80 animate-steam-1 filter blur-[1px]">♨️</span>
                  <span className="text-2xl text-chai-200/80 animate-steam-2 filter blur-[1px]">♨️</span>
                  <span className="text-3xl text-saffron/80 animate-steam-3 filter blur-[1px]">♨️</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#160D08] via-transparent to-transparent" />
                
                {/* Floating Price Pill */}
                <div className="absolute bottom-3 left-3 bg-[#120B07]/90 backdrop-blur-md border border-terracotta/40 px-3 py-1.5 rounded-xl text-left">
                  <div className="text-[10px] text-chai-300 uppercase tracking-widest font-bold">Only</div>
                  <div className="text-lg font-black text-saffron leading-none">₹89 <span className="text-xs text-chai-400 font-normal">/ Kulhad</span></div>
                </div>

                <div className="absolute bottom-3 right-3 bg-terracotta/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>340+ Loved</span>
                </div>
              </div>

              {/* Card Meta & Quick Order Button */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-display text-white group-hover:text-saffron transition-colors">
                  Kesariya Dum Kulhad Chai
                </h3>
                <p className="text-xs text-chai-300 line-clamp-2">
                  Slow-brewed over charcoal embers with Kashmiri Mongra Kesar, green cardamom, and fresh buffalo milk. Served in Mitti Kulhad.
                </p>

                <div className="pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-chai-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Pure Vedic Ingredients</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickOrderFeatured();
                    }}
                    className="px-4 py-2 bg-saffron hover:bg-saffron-light text-[#120B07] text-xs font-extrabold rounded-xl transition-transform active:scale-95 shadow-md flex items-center gap-1.5"
                  >
                    <span>Instant Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
