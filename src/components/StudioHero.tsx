"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { ChevronLeft, ChevronRight, ShoppingBag, ShieldCheck } from "lucide-react";

export const StudioHero: React.FC = () => {
  const { addToCart } = useCart();
  const heroProduct = PRODUCTS[0]; // Conquer Ultra Maxx Pre-Workout

  const handleBuyNow = () => {
    addToCart(heroProduct, heroProduct.flavors[0], heroProduct.weightOptions[0].label, heroProduct.price, 1);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#EAE6DE] via-[#F4F1EA] to-[#FFFFFF] overflow-hidden pt-8 pb-12 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[460px]">
          {/* Left Column: Spec Highlight (like '30G OF PROTEIN') */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-1">
            <span className="text-3xl sm:text-4xl font-black text-zinc-400/80 tracking-tight block uppercase">
              300MG
            </span>
            <span className="text-base sm:text-lg font-black text-zinc-600 uppercase tracking-widest block">
              PURE CAFFEINE
            </span>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              Clinical pre-workout matrix with 4000mg L-Citrulline Malate for extreme vascular blood flow.
            </p>
          </div>

          {/* Center Column: Big 3D Tub & Big Red 'PRE-WORKOUT' (Exact Reference Style) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* Background Faint Watermark Text */}
            <div className="absolute top-10 text-center select-none pointer-events-none opacity-10 font-black text-6xl sm:text-8xl tracking-widest text-black">
              100%
            </div>

            {/* Central 3D Tub Packshot */}
            <div className="relative z-10 w-64 sm:w-80 h-72 sm:h-84 flex items-center justify-center">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="w-auto h-full max-h-72 sm:max-h-84 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={handleBuyNow}
              />
            </div>

            {/* Giant Bold Red Text Below Bottle (like 'PROTEIN' in reference) */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-red-600 uppercase -mt-4 z-20 drop-shadow-xs">
              PRE-WORKOUT
            </h1>
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest -mt-1">
              S.K NUTRITION • 100% AUTHENTIC FORMULATION
            </span>
          </div>

          {/* Right Column: Floating Price Card & Buy Button (Exact Reference Card) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="bg-white/90 backdrop-blur-sm border border-zinc-200 p-5 rounded-xl shadow-lg text-center space-y-3 w-56">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">
                Special Offer
              </span>
              <div className="text-2xl font-black text-zinc-950">
                ₹999.00
              </div>
              <span className="text-xs text-red-500 line-through block -mt-2">
                ₹1,599.00
              </span>

              {/* Flavor Swatches */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 inline-block" title="Fruit Punch" />
                <span className="w-3.5 h-3.5 rounded-full bg-blue-500 inline-block" title="Blue Slushie" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500 inline-block" title="Green Apple" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 inline-block" title="Watermelon" />
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-2.5 rounded bg-zinc-950 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>BUY NOW</span>
              </button>

              <span className="text-[10px] text-zinc-500 block flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Mughalsarai Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reference Arrow Controls */}
      <button
        onClick={handleBuyNow}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center hidden sm:flex"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleBuyNow}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center hidden sm:flex"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </section>
  );
};
