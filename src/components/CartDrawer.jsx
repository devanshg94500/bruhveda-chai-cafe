import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, Coffee } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) {
  const [orderType, setOrderType] = useState('takeaway'); // 'dinein', 'takeaway', 'delivery'
  const [tableNumber, setTableNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.unitPrice || item.price;
    return acc + price * item.quantity;
  }, 0);

  const gst = Math.round(subtotal * 0.05);
  const total = Math.max(0, subtotal + gst - appliedDiscount);

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'BRUH10') {
      const discount = Math.round(subtotal * 0.10);
      setAppliedDiscount(discount);
      setCouponMsg('🔥 10% Desi Bruh discount applied!');
    } else if (code === 'KULHADFREE') {
      setAppliedDiscount(20);
      setCouponMsg('✨ ₹20 Kulhad perk applied!');
    } else {
      setCouponMsg('❌ Invalid code. Try "BRUH10"');
    }
  };

  const handleProceed = () => {
    onCheckout({
      items: cartItems,
      subtotal,
      gst,
      appliedDiscount,
      total,
      orderType,
      tableNumber,
      deliveryAddress
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#180E09] border-l border-terracotta/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#3D1E0E] flex items-center justify-between bg-[#1D110B]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-terracotta/20 flex items-center justify-center text-saffron">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">Your Chai Basket</h3>
                <p className="text-xs text-chai-300">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready to brew
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#120B07] text-chai-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            
            {/* Order Mode Selector */}
            <div className="bg-[#130A06] p-1.5 rounded-2xl border border-[#3D1E0E] grid grid-cols-3 gap-1">
              {[
                { id: 'takeaway', label: '⚡ Pickup', sub: 'In 8 mins' },
                { id: 'dinein', label: '🛋️ Dine-In', sub: 'At Adda' },
                { id: 'delivery', label: '🛵 Deliver', sub: 'To Doorstep' },
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setOrderType(mode.id)}
                  className={`py-2 px-1 rounded-xl text-center transition-all ${
                    orderType === mode.id
                      ? 'bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-bold shadow-md'
                      : 'text-chai-300 hover:text-white'
                  }`}
                >
                  <div className="text-xs">{mode.label}</div>
                  <div className="text-[9px] opacity-80">{mode.sub}</div>
                </button>
              ))}
            </div>

            {/* Extra Field based on Order Mode */}
            {orderType === 'dinein' && (
              <div className="bg-[#241610] p-3 rounded-xl border border-terracotta/30">
                <label className="text-xs text-chai-200 block mb-1 font-semibold">Table / Baithak Number:</label>
                <input
                  type="text"
                  placeholder="e.g. Table 04 or Verandah 2"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full bg-[#160D08] border border-[#3D1E0E] rounded-lg px-3 py-1.5 text-xs text-white placeholder-chai-400 outline-none focus:border-saffron"
                />
              </div>
            )}

            {orderType === 'delivery' && (
              <div className="bg-[#241610] p-3 rounded-xl border border-terracotta/30">
                <label className="text-xs text-chai-200 block mb-1 font-semibold">Delivery Address:</label>
                <input
                  type="text"
                  placeholder="House/Office, Street, Landmark"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full bg-[#160D08] border border-[#3D1E0E] rounded-lg px-3 py-1.5 text-xs text-white placeholder-chai-400 outline-none focus:border-saffron"
                />
              </div>
            )}

            {/* Cart Items List */}
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-chai-400 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#241610] mx-auto flex items-center justify-center text-3xl">
                  🪔
                </div>
                <p className="text-sm font-semibold text-white">Your Kulhad basket is empty, bruh!</p>
                <p className="text-xs">Add an authentic Kesariya Dum Chai or Truffle Bun Maska to get started.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item, idx) => {
                  const itemPrice = item.unitPrice || item.price;
                  return (
                    <div
                      key={item.cartItemId || `${item.id}-${idx}`}
                      className="bg-[#22130D] border border-[#3D1E0E] p-3.5 rounded-2xl flex gap-3 items-center justify-between"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                        <div className="text-[11px] text-saffron font-bold">
                          ₹{itemPrice} <span className="text-[9px] text-chai-400 font-normal">each</span>
                        </div>
                        {item.customizations && (
                          <div className="text-[10px] text-chai-300 truncate mt-0.5">
                            {item.customizations.sweetness} • {item.customizations.milk}
                          </div>
                        )}
                      </div>

                      {/* Quantity & Delete */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-[#160D08] border border-[#3D1E0E] rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                            className="p-1 text-chai-300 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                            className="p-1 text-chai-300 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item)}
                          className="p-1.5 text-chai-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Coupon Code Box */}
            {cartItems.length > 0 && (
              <div className="bg-[#1A0E08] p-3 rounded-2xl border border-[#3D1E0E] space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. BRUH10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 bg-[#120B07] border border-[#3D1E0E] rounded-xl px-3 py-1.5 text-xs text-white uppercase placeholder-chai-400 outline-none focus:border-saffron"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-3 py-1.5 bg-terracotta hover:bg-terracotta-light text-white text-xs font-bold rounded-xl"
                  >
                    Apply
                  </button>
                </div>
                {couponMsg && (
                  <p className="text-[11px] text-saffron font-medium">{couponMsg}</p>
                )}
              </div>
            )}

          </div>

          {/* Footer & Checkout Total */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#3D1E0E] bg-[#1D110B] space-y-3">
              <div className="space-y-1.5 text-xs text-chai-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST & Service (5%)</span>
                  <span className="text-white font-medium">₹{gst}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Bruh Discount</span>
                    <span>-₹{appliedDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-[#3D1E0E]">
                  <span>Total Payable</span>
                  <span className="text-saffron font-display text-lg">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                className="w-full py-4 rounded-full bg-gradient-to-r from-terracotta via-terracotta-light to-saffron text-[#120B07] font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Place Order Now • ₹{total}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="text-center text-[10px] text-chai-400">
                🔒 Instant Confirmation & Live Steaming Tracker
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
