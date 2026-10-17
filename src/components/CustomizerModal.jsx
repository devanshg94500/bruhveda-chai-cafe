import React, { useState } from 'react';
import { X, Check, Plus, Minus, Coffee, Sparkles } from 'lucide-react';
import { SWEETNESS_OPTIONS, MILK_OPTIONS, KULHAD_OPTIONS, SHOTS_ADDONS } from '../data/menuData';

export default function CustomizerModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const [sweetness, setSweetness] = useState('gur');
  const [milk, setMilk] = useState('buffalo');
  const [cup, setCup] = useState('kulhad-mitti');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  // Calculate total price
  const sweetnessExtra = SWEETNESS_OPTIONS.find(s => s.id === sweetness)?.extra || 0;
  const milkExtra = MILK_OPTIONS.find(m => m.id === milk)?.extra || 0;
  const cupExtra = KULHAD_OPTIONS.find(c => c.id === cup)?.extra || 0;
  const addonsExtra = selectedAddons.reduce((acc, id) => {
    const item = SHOTS_ADDONS.find(a => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const unitPrice = product.price + sweetnessExtra + milkExtra + cupExtra + addonsExtra;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const customizedItem = {
      ...product,
      cartItemId: `${product.id}-${sweetness}-${milk}-${cup}-${selectedAddons.sort().join('-')}`,
      quantity,
      unitPrice,
      customizations: {
        sweetness: SWEETNESS_OPTIONS.find(s => s.id === sweetness)?.name,
        milk: MILK_OPTIONS.find(m => m.id === milk)?.name,
        cup: KULHAD_OPTIONS.find(c => c.id === cup)?.name,
        addons: selectedAddons.map(id => SHOTS_ADDONS.find(a => a.id === id)?.name).filter(Boolean)
      }
    };
    onAddToCart(customizedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#241610] via-[#1A0F0A] to-[#120B07] border border-terracotta/40 rounded-3xl p-6 sm:p-8 shadow-2xl glow-terracotta max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#3D1E0E]">
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-2xl object-cover border border-terracotta/30"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-saffron uppercase tracking-wider">Customizer</span>
                <span className="text-[10px] bg-terracotta/20 text-terracotta px-2 py-0.5 rounded">Ayurvedic Tuning</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">{product.name}</h3>
              <p className="text-xs text-chai-300">Base: ₹{product.price}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#120B07] text-chai-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Customization Options */}
        <div className="overflow-y-auto py-4 space-y-6 flex-1 pr-1">
          
          {/* 1. Sweetness Choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-chai-200 block mb-2">
              1. Choose Sweetener (Ayurvedic Sweetness)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SWEETNESS_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSweetness(opt.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    sweetness === opt.id
                      ? 'border-saffron bg-saffron/10 text-white'
                      : 'border-[#3D1E0E] bg-[#160D08] text-chai-300 hover:border-chai-400'
                  }`}
                >
                  <span className="text-xs font-medium">{opt.name}</span>
                  <span className="text-[11px] font-bold text-saffron">
                    {opt.extra > 0 ? `+₹${opt.extra}` : 'Free'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Milk Choice */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-chai-200 block mb-2">
              2. Milk Base (Dairy or Vegan)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MILK_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setMilk(opt.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    milk === opt.id
                      ? 'border-terracotta bg-terracotta/15 text-white'
                      : 'border-[#3D1E0E] bg-[#160D08] text-chai-300 hover:border-chai-400'
                  }`}
                >
                  <span className="text-xs font-medium">{opt.name}</span>
                  <span className="text-[11px] font-bold text-terracotta">
                    {opt.extra > 0 ? `+₹${opt.extra}` : 'Free'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Cup Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-chai-200 block mb-2">
              3. Vessel / Kulhad Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {KULHAD_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCup(opt.id)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    cup === opt.id
                      ? 'border-saffron bg-saffron/10 text-white'
                      : 'border-[#3D1E0E] bg-[#160D08] text-chai-300 hover:border-chai-400'
                  }`}
                >
                  <span className="text-xs font-medium">{opt.name}</span>
                  <span className="text-[11px] font-bold text-saffron mt-1">
                    {opt.extra > 0 ? `+₹${opt.extra}` : 'Included'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Ayurvedic Shots & Herbal Add-ons */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-chai-200 block mb-2">
              4. Power Boost Herbs (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SHOTS_ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-500/10 text-white'
                        : 'border-[#3D1E0E] bg-[#160D08] text-chai-300 hover:border-chai-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? 'bg-emerald-500 border-emerald-500 text-black' : 'border-[#3D1E0E]'}`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{addon.name}</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400">+₹{addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer: Quantity & Total Button */}
        <div className="pt-4 border-t border-[#3D1E0E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-chai-300 font-semibold">Quantity:</span>
            <div className="flex items-center bg-[#160D08] border border-[#3D1E0E] rounded-xl p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1.5 text-chai-300 hover:text-white rounded-lg hover:bg-[#241610]"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-3 text-sm font-bold text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1.5 text-chai-300 hover:text-white rounded-lg hover:bg-[#241610]"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Add to Kulhad Order • ₹{totalPrice}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
