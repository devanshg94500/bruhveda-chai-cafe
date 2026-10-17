import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/menuData';
import ProductCard from './ProductCard';
import { Search, Sparkles, Filter, Flame } from 'lucide-react';

export default function MenuSection({ onQuickAdd, onCustomize }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVibe, setFilterVibe] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.herbs && product.herbs.some(h => h.toLowerCase().includes(query)));

      // Vibe match
      let matchesVibe = true;
      if (filterVibe === 'bestseller') matchesVibe = !!product.badge;
      if (filterVibe === 'spicy') matchesVibe = product.spiceLevel >= 2;
      if (filterVibe === 'cooling') matchesVibe = product.category === 'modern-cool';

      return matchesCategory && matchesSearch && matchesVibe;
    });
  }, [selectedCategory, searchQuery, filterVibe]);

  return (
    <section id="menu" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/15 text-terracotta-light border border-terracotta/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-terracotta" />
            <span>Artisanal Alchemy On Tap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            The bruhVeda Brews & Bites
          </h2>
          <p className="text-sm sm:text-base text-chai-300 mt-3 font-light">
            Every cup is brewed fresh from organic handpicked tea leaves and real herbs. Zero syrups, zero artificial flavor drops.
          </p>
        </div>

        {/* Filter Controls: Search & Vibe Badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-chai-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by chai, herb (e.g. Saffron, Ginger, Bun Maska)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A0E08] border border-[#3D1E0E] focus:border-saffron rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-chai-400 outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-chai-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Vibe Toggles */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs text-chai-400 font-semibold flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'bestseller', label: '🔥 Bestsellers' },
              { id: 'spicy', label: '🌶️ Kadak / Spicy' },
              { id: 'cooling', label: '🧊 Chilled Chais' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterVibe(f.id)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium shrink-0 transition-colors ${
                  filterVibe === f.id
                    ? 'bg-saffron text-[#120B07] font-bold'
                    : 'bg-[#1E110A] text-chai-300 hover:text-white border border-[#3D1E0E]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#3D1E0E]/60 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-terracotta to-saffron text-[#120B07] shadow-lg shadow-terracotta/20 scale-105'
                  : 'bg-[#180E09] text-chai-300 hover:text-white border border-[#3D1E0E] hover:border-terracotta/40'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickAdd={onQuickAdd}
                onCustomize={onCustomize}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#160D08] rounded-3xl border border-[#3D1E0E] p-8 max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-saffron mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white font-display">No Chai or Bite matched your search</h3>
            <p className="text-xs text-chai-400 mt-1">Try searching for "Saffron", "Kulhad", "Bun Maska" or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setFilterVibe('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-terracotta text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
