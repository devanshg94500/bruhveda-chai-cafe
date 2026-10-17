import React, { useState } from 'react';
import { CAFE_LOCATIONS } from '../data/locationsData';
import { MapPin, Clock, Phone, Navigation, Wifi, Heart, Users, Sparkles, Check } from 'lucide-react';

export default function LocationSection() {
  const [selectedLocationId, setSelectedLocationId] = useState(CAFE_LOCATIONS[0].id);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationDone, setReservationDone] = useState(false);

  const currentLocation = CAFE_LOCATIONS.find(l => l.id === selectedLocationId) || CAFE_LOCATIONS[0];

  const handleBookTable = (e) => {
    e.preventDefault();
    setReservationDone(true);
    setTimeout(() => {
      setReservationDone(false);
      setShowReservationModal(false);
    }, 2500);
  };

  return (
    <section id="locations" className="py-20 relative bg-gradient-to-b from-[#120B07] via-[#160D09] to-[#120B07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-saffron/15 text-saffron border border-saffron/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>Find Our Physical Addas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Drop By For A Hot Kulhad
          </h2>
          <p className="text-sm sm:text-base text-chai-300 mt-3 font-light">
            Earthen brick aesthetics, fragrant chai steam, low wooden baithak seating, and acoustic vibes. Open till 2:00 AM everyday.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CAFE_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocationId(loc.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 flex items-center gap-2.5 ${
                selectedLocationId === loc.id
                  ? 'bg-gradient-to-r from-terracotta to-saffron text-[#120B07] shadow-xl shadow-terracotta/25 scale-105'
                  : 'bg-[#1D110B] text-chai-300 hover:text-white border border-[#3D1E0E]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{loc.city} • {loc.area.split(',')[0]}</span>
            </button>
          ))}
        </div>

        {/* Featured Location Display Card */}
        <div className="bg-[#1A0E08] border border-terracotta/30 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {currentLocation.status}
                </span>
                <span className="text-xs text-chai-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentLocation.hours}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                {currentLocation.name}
              </h3>
              <p className="text-xs sm:text-sm text-chai-300/90 leading-relaxed">
                {currentLocation.vibe}
              </p>
            </div>

            {/* Address & Contact Details */}
            <div className="bg-[#140B07] border border-[#3D1E0E] rounded-2xl p-4 space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-chai-200">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>{currentLocation.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-chai-200">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <span>Call Cafe Adda: <strong className="text-white">{currentLocation.phone}</strong></span>
              </div>
            </div>

            {/* Amenities Pills */}
            <div>
              <div className="text-xs font-bold text-chai-400 uppercase tracking-wider mb-2.5">
                Adda Perks & Amenities:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentLocation.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#241610] text-chai-200 border border-[#3D1E0E] px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-saffron" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={currentLocation.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <button
                onClick={() => setShowReservationModal(true)}
                className="px-6 py-3.5 rounded-full bg-[#241610] hover:bg-[#2F1C14] text-white border border-[#3D1E0E] hover:border-terracotta font-bold text-xs transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-saffron" />
                <span>Reserve a Baithak / Table</span>
              </button>
            </div>

          </div>

          {/* Right Image & Interactive Map Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-terracotta/30 group shadow-xl">
              <img
                src={currentLocation.image}
                alt={currentLocation.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Live Adda Atmosphere
                </span>
                <span className="text-chai-300 font-medium">Free 500Mbps WiFi</span>
              </div>
            </div>

            {/* Interactive Location Badge Map Card */}
            <div className="bg-[#140B07] border border-[#3D1E0E] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-chai-400 uppercase tracking-widest font-bold">GPS Coordinates</span>
                <div className="text-xs font-mono text-saffron font-bold">
                  {currentLocation.coordinates.lat}° N, {currentLocation.coordinates.lng}° E
                </div>
              </div>
              <a
                href={currentLocation.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-terracotta-light hover:underline flex items-center gap-1"
              >
                Open in Maps →
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md bg-[#1D110B] border border-terracotta/40 rounded-3xl p-6 shadow-2xl">
            {reservationDone ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">Baithak Reserved!</h4>
                <p className="text-xs text-chai-300">
                  We have saved a cozy wooden baithak for you at {currentLocation.name}. See you soon for hot chai!
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookTable} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-display text-white">Reserve a Baithak</h4>
                  <button
                    type="button"
                    onClick={() => setShowReservationModal(false)}
                    className="text-chai-400 hover:text-white text-xs"
                  >
                    Close
                  </button>
                </div>

                <p className="text-xs text-chai-300">
                  Book a table or group charcha corner at <strong className="text-saffron">{currentLocation.name}</strong>.
                </p>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="text-chai-300 block mb-1">Your Full Name:</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Aryan Sharma"
                      className="w-full bg-[#140B07] border border-[#3D1E0E] rounded-xl px-3 py-2 text-white outline-none focus:border-saffron"
                    />
                  </div>
                  <div>
                    <label className="text-chai-300 block mb-1">WhatsApp Phone Number:</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#140B07] border border-[#3D1E0E] rounded-xl px-3 py-2 text-white outline-none focus:border-saffron"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-chai-300 block mb-1">Party Size:</label>
                      <select className="w-full bg-[#140B07] border border-[#3D1E0E] rounded-xl px-3 py-2 text-white outline-none focus:border-saffron">
                        <option>2 People</option>
                        <option>3 - 4 People</option>
                        <option>5 - 8 People (Group Adda)</option>
                        <option>8+ People</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-chai-300 block mb-1">Time:</label>
                      <input
                        type="time"
                        defaultValue="18:30"
                        className="w-full bg-[#140B07] border border-[#3D1E0E] rounded-xl px-3 py-2 text-white outline-none focus:border-saffron"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-terracotta to-saffron text-[#120B07] font-extrabold text-xs shadow-lg transition-transform active:scale-95"
                >
                  Confirm Table Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
