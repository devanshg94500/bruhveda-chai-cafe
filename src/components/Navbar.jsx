import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Sparkles, Menu, X, Clock } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ cartCount, onOpenCart, onOpenLocations, onOpenQuiz }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#140B07]/95 backdrop-blur-md border-b border-[#3D1E0E]/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#120B07] via-[#120B07]/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Brand Identity / Logo from Image 2 */}
          <a
            href="#"
            className="shrink-0 flex items-center group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="bruhVeda Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links - Clean, Un-cramped, Single Line */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8 text-xs lg:text-sm font-semibold text-chai-200 shrink">
            <a
              href="#menu"
              className="whitespace-nowrap hover:text-saffron transition-colors py-1"
            >
              Menu & Brews
            </a>

            <button
              onClick={onOpenQuiz}
              className="whitespace-nowrap flex items-center gap-1.5 hover:text-saffron transition-colors py-1 text-left"
            >
              <Sparkles className="w-3.5 h-3.5 text-saffron shrink-0" />
              <span>Chai Mood Quiz</span>
            </button>

            <a
              href="#roots"
              className="whitespace-nowrap hover:text-saffron transition-colors py-1"
            >
              Vedic Alchemy
            </a>

            <button
              onClick={onOpenLocations}
              className="whitespace-nowrap flex items-center gap-1.5 hover:text-saffron transition-colors py-1 text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Locations & Adda</span>
            </button>

            <a
              href="#charcha"
              className="whitespace-nowrap hover:text-saffron transition-colors py-1"
            >
              Charcha Wall
            </a>
          </div>

          {/* Right Action Icons: Live Status & Cart */}
          <div className="shrink-0 flex items-center gap-2.5 sm:gap-3.5">
            
            {/* Live Status indicator - Full on XL */}
            <div className="hidden xl:flex items-center gap-2 bg-[#22130C] border border-terracotta/30 px-3 py-1.5 rounded-full text-xs text-chai-200 whitespace-nowrap shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-emerald-400">Open Now</span>
              <span className="text-chai-400">• Till 2 AM</span>
            </div>

            {/* Live Status indicator - Compact on LG */}
            <div className="hidden lg:flex xl:hidden items-center gap-1.5 bg-[#22130C] border border-terracotta/30 px-2.5 py-1.5 rounded-full text-[11px] text-emerald-400 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Till 2 AM</span>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="whitespace-nowrap relative flex items-center gap-2 bg-gradient-to-r from-terracotta via-terracotta-light to-saffron text-[#160D08] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-black text-xs sm:text-sm shadow-lg hover:shadow-terracotta/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4 shrink-0 stroke-[2.5]" />
              <span>Order Kulhad</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 bg-[#120B07] text-saffron rounded-full text-xs font-black flex items-center justify-center animate-bounce ml-0.5">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-chai-300 hover:text-white rounded-xl bg-[#241610] border border-[#3D1E0E]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#1A0E08] border border-terracotta/40 rounded-2xl space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center gap-2 pb-2.5 border-b border-[#3D1E0E] text-xs text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Addas are Steaming Hot & Open till 2:00 AM</span>
            </div>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-chai-100 font-semibold hover:text-saffron text-sm"
            >
              ☕ Menu & Artisanal Brews
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full text-left py-2 text-chai-100 font-semibold hover:text-saffron flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span>Chai Mood Matcher (Quiz)</span>
            </button>
            <a 
              href="#roots" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-chai-100 font-semibold hover:text-saffron text-sm"
            >
              🌿 11 Vedic Herbs & Alchemy
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenLocations(); }}
              className="w-full text-left py-2 text-chai-100 font-semibold hover:text-saffron flex items-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4 text-terracotta" />
              <span>Find Our Addas (Locations)</span>
            </button>
            <a 
              href="#charcha" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-chai-100 font-semibold hover:text-saffron text-sm"
            >
              💬 Chai Charcha & Reviews
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
