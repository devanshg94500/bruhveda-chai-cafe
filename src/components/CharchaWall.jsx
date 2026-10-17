import React, { useState } from 'react';
import { MessageSquare, Star, Quote, Sparkles, Heart } from 'lucide-react';

export default function CharchaWall() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const CHAI_QUOTES = [
    "“Where there is chai, there is hope, deep conversations, and zero bad vibes.”",
    "“Chai is not just a drink, bruh. It’s an emotion served in an earthen kulhad.”",
    "“Code without chai is like a kulhad without mitti fragrance — empty.”",
    "“Life happens over slow embers and warm Kadak Adrak tea.”"
  ];

  const REVIEWS = [
    {
      name: 'Aditya Rao',
      role: 'Founding Engineer @ Tech Startup',
      review: 'Their Brahmi Zen Chai saved my product launch week. No jittery caffeine crash like espresso, just sharp uninterrupted focus. Plus the Truffle Bun Maska is god-tier.',
      ordered: 'Brahmi Zen Chai + Truffle Bun Maska',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Pooja Bhatt',
      role: 'Architect & Designer',
      review: 'The Indiranagar adda is our favorite midnight spot. The aroma of burning charcoal and Kashmiri saffron in genuine clay kulhads is unbeatable. 10/10 aesthetic!',
      ordered: 'Kesariya Dum Kulhad Chai',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Karan Mehra',
      role: 'Content Creator',
      review: 'Lotus Biscoff Chai Shake in an icy kulhad? Mind completely blown. bruhVeda has legitimately cracked the modern Indian cafe culture.',
      ordered: 'Lotus Biscoff Chai Shake + Loaded Samosa Slider',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % CHAI_QUOTES.length);
  };

  return (
    <section id="charcha" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>The Adda Community</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Chai Charcha & Community Buzz
          </h2>
          <p className="text-sm sm:text-base text-chai-300 mt-3 font-light">
            Real stories from 2,50,000+ kulhads clinked across Bengaluru, Gurugram, and Mumbai.
          </p>
        </div>

        {/* Interactive Quote of the Moment */}
        <div className="max-w-2xl mx-auto mb-14 bg-gradient-to-r from-terracotta/20 via-[#241610] to-saffron/20 border border-terracotta/40 rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden shadow-xl">
          <Quote className="w-10 h-10 text-saffron/30 mx-auto mb-2" />
          <p className="text-lg sm:text-xl font-serif italic text-chai-100 font-medium leading-relaxed">
            {CHAI_QUOTES[quoteIndex]}
          </p>
          <button
            onClick={nextQuote}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-saffron font-bold hover:underline"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next Chai Thought →</span>
          </button>
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#1A0E08] border border-[#3D1E0E] hover:border-terracotta/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-saffron">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-saffron" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Verified Sip
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-chai-300 leading-relaxed italic">
                  "{rev.review}"
                </p>

                <div className="text-[11px] text-saffron/90 font-medium bg-[#140B07] p-2 rounded-xl border border-[#3D1E0E]">
                  ☕ Ordered: <strong>{rev.ordered}</strong>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-[#3D1E0E]/80">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-saffron/40"
                />
                <div>
                  <div className="text-xs font-bold text-white">{rev.name}</div>
                  <div className="text-[10px] text-chai-400">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
