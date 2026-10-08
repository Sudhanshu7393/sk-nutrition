"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, MapPin, Zap } from "lucide-react";

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-[#090b10]/95 backdrop-blur-md border-b border-zinc-800 text-white shadow-lg">
      {/* Top Ticker */}
      <div className="bg-gradient-to-r from-emerald-950 via-black to-emerald-950 text-emerald-400 text-[11px] font-black py-2 px-4 text-center tracking-wide flex items-center justify-center gap-3 border-b border-emerald-900/40">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 fill-emerald-400" /> 100% GENUINE PEAKVITALS NUTRITION
        </span>
        <span className="hidden sm:inline text-zinc-600">•</span>
        <span className="hidden sm:inline">⚡ SAME-DAY DISPATCH IN MUGHALSARAI & CHANDAULI</span>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Store Info */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-zinc-950 font-black text-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              SK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {SITE_CONFIG.name}
                </span>
                <span className="hidden md:inline px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Peakvitals Authorized
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Ravi Nagar, Mughalsarai, Chandauli</span>
              </p>
            </div>
          </div>

          {/* Direct Actions: WhatsApp + Cart */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20want%20to%20order%20Peakvitals%20Pre-Workout`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-black text-white text-[11px] flex items-center justify-center font-black">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
