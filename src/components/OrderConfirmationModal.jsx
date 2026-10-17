import React, { useEffect, useState } from 'react';
import { CheckCircle2, Clock, MapPin, Share2, Sparkles, X, Coffee, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderConfirmationModal({ orderData, isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(2); // Simulated tracking step

  useEffect(() => {
    if (isOpen) {
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C85A32', '#F39C12', '#2D5A43', '#FFFFFF']
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  if (!isOpen || !orderData) return null;

  const orderId = `BV-${Math.floor(1000 + Math.random() * 9000)}`;

  const TRACKING_STEPS = [
    { id: 1, title: 'Order Received & Verified', time: 'Just now', icon: CheckCircle2, desc: 'Punched at the live adda counter' },
    { id: 2, title: 'Pounding Fresh Spices & Herbs', time: 'In progress', icon: Flame, desc: 'Crushing ginger, cardamom & Kashmiri kesar' },
    { id: 3, title: 'Simmering over Charcoal Embers', time: 'Est. 4 mins', icon: Sparkles, desc: 'Slow dum infusion in earthen degchi' },
    { id: 4, title: 'Poured in Mitti Kulhad & Ready', time: 'Est. 8 mins', icon: Coffee, desc: 'Steaming hot & aromatic for pickup/serve' }
  ];

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hey! I just ordered authentic Vedic Kulhad Chai from bruhVeda (Order #${orderId})! Total: ₹${orderData.total}. Check out their menu at bruhveda.in ☕✨`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#241610] via-[#1A0F0A] to-[#120B07] border border-terracotta/40 rounded-3xl p-6 sm:p-8 shadow-2xl glow-terracotta max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#120B07] text-chai-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Success Badge */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="inline-block text-[11px] font-black uppercase tracking-widest text-saffron bg-saffron/15 px-3 py-1 rounded-full border border-saffron/30">
            Order Confirmed • Table / Pickup Ready
          </span>
          <h2 className="text-2xl font-black font-display text-white">
            Your Kulhad is Brewing, Bruh!
          </h2>
          <p className="text-xs text-chai-300">
            Order ID: <strong className="text-white">{orderId}</strong> • Estimated Time: <strong className="text-saffron">8-12 Mins</strong>
          </p>
        </div>

        {/* Live Steaming Progress Tracker */}
        <div className="bg-[#160D08] border border-[#3D1E0E] rounded-2xl p-4 mb-6">
          <div className="text-xs font-bold text-chai-200 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Live Kitchen Status</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Live
            </span>
          </div>

          <div className="space-y-4">
            {TRACKING_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isDone = step.id < activeStep;
              const isCurrent = step.id === activeStep;

              return (
                <div key={step.id} className="flex items-start gap-3 relative">
                  {idx !== TRACKING_STEPS.length - 1 && (
                    <div className={`absolute left-3.5 top-7 bottom-0 w-0.5 ${isDone ? 'bg-emerald-500' : 'bg-[#3D1E0E]'}`} />
                  )}

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    isDone 
                      ? 'bg-emerald-500 text-black' 
                      : isCurrent 
                        ? 'bg-saffron text-black ring-4 ring-saffron/20 animate-pulse' 
                        : 'bg-[#241610] text-chai-400 border border-[#3D1E0E]'
                  }`}>
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className={`text-xs font-bold ${isCurrent ? 'text-saffron' : isDone ? 'text-white' : 'text-chai-400'}`}>
                        {step.title}
                      </div>
                      <span className="text-[10px] text-chai-400 font-medium">{step.time}</span>
                    </div>
                    <p className="text-[11px] text-chai-300">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Receipt Summary */}
        <div className="bg-[#1A0E08] border border-[#3D1E0E] rounded-2xl p-4 text-xs space-y-2 mb-6">
          <div className="text-chai-200 font-bold uppercase tracking-wider text-[11px] pb-1 border-b border-[#3D1E0E]">
            Receipt Summary ({orderData.orderType.toUpperCase()})
          </div>

          {orderData.items.map((item, idx) => (
            <div key={idx} className="flex justify-between text-chai-300">
              <span>{item.quantity}x {item.name}</span>
              <span className="font-semibold text-white">₹{(item.unitPrice || item.price) * item.quantity}</span>
            </div>
          ))}

          <div className="pt-2 border-t border-[#3D1E0E] flex justify-between font-bold text-white text-sm">
            <span>Total Paid</span>
            <span className="text-saffron">₹{orderData.total}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleShareWhatsApp}
            className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            <span>Send Order Updates to WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 px-6 rounded-full bg-[#241610] hover:bg-[#2F1C14] text-chai-200 hover:text-white border border-[#3D1E0E] text-xs font-semibold transition-colors"
          >
            Back to Chai Chowk
          </button>
        </div>

      </div>
    </div>
  );
}
