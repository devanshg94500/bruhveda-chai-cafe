import React from 'react';
import { Plus, Sliders, Star, Flame, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onQuickAdd, onCustomize }) {
  return (
    <div className="group relative bg-[#1B100B] hover:bg-[#22140E] border border-[#3D1E0E] hover:border-terracotta/60 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-terracotta/20">
      
      {/* Top Media & Badges */}
      <div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#120B07]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160D08]/90 via-transparent to-black/20" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.badge && (
              <span className="bg-gradient-to-r from-terracotta to-saffron text-[#120B07] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                {product.badge}
              </span>
            )}
            <span className="bg-[#120B07]/80 backdrop-blur-md text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30">
              🌱 Pure Veg
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-[#120B07]/80 backdrop-blur-md text-saffron text-xs font-bold px-2 py-1 rounded-xl flex items-center gap-1 border border-[#3D1E0E]">
            <Star className="w-3.5 h-3.5 fill-saffron" />
            <span>{product.rating}</span>
          </div>

          {/* Dosha & Herb Tag Bar */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px]">
            <span className="bg-[#241610]/90 backdrop-blur-md text-saffron border border-saffron/20 px-2.5 py-0.5 rounded-lg font-medium">
              ⚡ {product.dosha}
            </span>
            {product.spiceLevel > 0 && (
              <span className="bg-[#241610]/90 backdrop-blur-md text-chai-200 border border-terracotta/20 px-2 py-0.5 rounded-lg flex items-center gap-0.5">
                {'🌶️'.repeat(product.spiceLevel)}
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5 mb-3">
          <h3 className="text-lg font-bold font-display text-white group-hover:text-saffron transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-saffron/90 font-medium tracking-wide">
            {product.tagline}
          </p>
          <p className="text-xs text-chai-300/80 leading-relaxed line-clamp-2 pt-0.5">
            {product.description}
          </p>
        </div>

        {/* Herbal Ingredients Badges */}
        {product.herbs && product.herbs.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.herbs.map((herb, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-[#241610] text-chai-300 border border-[#3D1E0E] px-2 py-0.5 rounded-md"
              >
                {herb}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Price & Actions */}
      <div className="pt-3 border-t border-[#3D1E0E]/80 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-chai-400 block font-semibold uppercase tracking-wider">Price</span>
          <div className="text-xl font-extrabold text-white font-display">
            ₹{product.price}
            <span className="text-xs text-chai-400 font-normal ml-1">/ serve</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {product.customizable && (
            <button
              onClick={() => onCustomize(product)}
              className="p-2.5 rounded-xl bg-[#241610] hover:bg-[#2D1B13] text-chai-200 hover:text-saffron border border-[#3D1E0E] transition-colors"
              title="Customize Sweetness & Milk"
            >
              <Sliders className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => onQuickAdd(product)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-terracotta to-saffron text-[#120B07] hover:scale-105 active:scale-95 px-3.5 py-2 rounded-xl font-bold text-xs shadow-md transition-all duration-200"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}
