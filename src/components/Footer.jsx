import React, { useState } from 'react';
import { Heart, Globe, Share2, Mail, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenLocations }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0E0704] border-t border-[#2D160B] pt-16 pb-12 text-chai-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter CTA Box */}
        <div className="bg-gradient-to-r from-terracotta/20 via-[#22130C] to-saffron/20 border border-terracotta/30 rounded-3xl p-8 sm:p-10 mb-16 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-saffron bg-saffron/10 px-3.5 py-1 rounded-full border border-saffron/30">
            Welcome to the Tribe
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-3">
            Get A Free First Cutting Kulhad At Any Adda!
          </h3>
          <p className="text-xs sm:text-sm text-chai-300 mt-2 max-w-lg mx-auto">
            Drop your email to claim your digital voucher and get secret midnight drops & poetry night invites.
          </p>

          {subscribed ? (
            <div className="mt-6 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 py-3 px-6 rounded-2xl max-w-md mx-auto">
              ✨ Voucher sent! Check your inbox & show it at our counter.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email, bruh..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#120B07] border border-[#3D1E0E] rounded-full px-5 py-3 text-xs text-white placeholder-chai-400 outline-none focus:border-saffron"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Claim Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#2D160B]">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-chai-400 leading-relaxed">
              Traditional Indian tea, Ayurvedic inspiration, and exclusively sweetened with unrefined jaggery (Gud). Served steaming in raw clay kulhads.
            </p>
            <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Daily: 8:00 AM – 11:00 PM
            </div>
            <div className="text-xs text-chai-300 font-semibold pt-1">
              📞 Contact: <a href="tel:+919235623965" className="text-saffron hover:underline">+91 92356 23965</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Our Brews</div>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-saffron transition-colors">Kulhad Chai (Signature)</a></li>
              <li><a href="#menu" className="hover:text-saffron transition-colors">Masala & Elaichi Chai</a></li>
              <li><a href="#menu" className="hover:text-saffron transition-colors">Adrak & Cinnamon Chai</a></li>
              <li><a href="#menu" className="hover:text-saffron transition-colors">Tulsi & Turmeric Herbal</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Our Addas</div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenLocations} className="hover:text-saffron transition-colors text-left font-bold text-white">
                  📍 Jhansi (Near GIC Ground) • Flagship
                </button>
              </li>
              <li>
                <button onClick={onOpenLocations} className="hover:text-saffron transition-colors text-left">
                  Mumbai (Bandra West)
                </button>
              </li>
              <li>
                <button onClick={onOpenLocations} className="hover:text-saffron transition-colors text-left">
                  New Delhi Hub
                </button>
              </li>
              <li className="text-chai-400 text-[11px] pt-1">
                Near GIC Ground, Jhansi, Uttar Pradesh
              </li>
            </ul>
          </div>

          {/* Ethos & Philosophy */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">The Promise</div>
            <p className="text-xs text-chai-400 leading-relaxed">
              100% natural milk & pure vegan options. Biodegradable, earth-friendly kiln-fired Mitti Kulhads that dissolve back into mother nature.
            </p>
            <div className="flex items-center gap-3 pt-2 text-chai-300">
              <a href="#" className="p-2 rounded-lg bg-[#180E09] hover:text-saffron hover:bg-[#241610] transition-colors" title="Official Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#180E09] hover:text-saffron hover:bg-[#241610] transition-colors" title="Community Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#180E09] hover:text-saffron hover:bg-[#241610] transition-colors" title="Email Us">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-chai-400 gap-4">
          <div>
            © {new Date().getFullYear()} bruhVeda Chai Co. All rights reserved. Made with ❤️ and lots of Kadak Adrak Chai.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-chai-200">Ayurvedic Ethics</a>
            <a href="#" className="hover:text-chai-200">Terms of Sip</a>
            <a href="#" className="hover:text-chai-200">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
