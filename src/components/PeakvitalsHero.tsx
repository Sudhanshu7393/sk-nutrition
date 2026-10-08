"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Flame, ShoppingBag, MessageCircle, Star, ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface PeakvitalsHeroProps {
  onBuyNow: () => void;
  onOpenFormula: () => void;
}

export const PeakvitalsHero: React.FC<PeakvitalsHeroProps> = ({
  onBuyNow,
  onOpenFormula,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState("green_apple");

  const flavorImages: Record<string, { img: string; name: string; color: string }> = {
    green_apple: {
      img: "/images/peakvitals_3d/green_apple.png",
      name: "Green Apple Flavour (Original)",
      color: "#22c55e",
    },
    blue_raspberry: {
      img: "/images/peakvitals_3d/blue_raspberry.png",
      name: "Blue Raspberry Blast",
      color: "#3b82f6",
    },
    watermelon: {
      img: "/images/peakvitals_3d/watermelon.png",
      name: "Watermelon Punch",
      color: "#ef4444",
    },
    tangy_orange: {
      img: "/images/peakvitals_3d/tangy_orange.png",
      name: "Tangy Orange Rush",
      color: "#f97316",
    },
  };

  const current = flavorImages[selectedFlavor] || flavorImages.green_apple;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#090b10] via-[#0f131a] to-[#090b10] text-white pt-8 pb-16 border-b border-zinc-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[540px]">
          {/* Left Column: Bold Value Props & Pitch */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" />
              <span>100% Genuine Peakvitals Pre-Workout</span>
            </div>

            {/* Giant Title */}
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-emerald-400 block">
                PEAKVITALS NUTRITION
              </span>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                BE THE BOSS OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500">
                  YOUR WORKOUT
                </span>
              </h1>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base max-w-lg leading-relaxed">
              Hardcore high-stim pre-workout engineered for insane skin-splitting pumps, razor focus, and sustained power through heavy sets. <strong>35 Powerful Servings</strong> per 250g tub.
            </p>

            {/* 4 Formula Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-lg font-black text-emerald-400 block">195MG</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Natural Caffeine</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-lg font-black text-emerald-400 block">2.0G</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Beta-Alanine</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-lg font-black text-emerald-400 block">1.5G</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Citrulline Malate</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-center">
                <span className="text-lg font-black text-emerald-400 block">2.0G</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Arginine AAKG</span>
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white">₹1,299</span>
                <span className="text-sm text-zinc-500 line-through font-bold">MRP ₹1,999</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-black">
                  -35% OFF
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onBuyNow}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Buy Now • ₹1,299</span>
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20want%20to%20order%20Peakvitals%20Pre-Workout%20(${encodeURIComponent(current.name)})%20for%20Rs.1299`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400/30" />
                  <span className="hidden sm:inline">WhatsApp Order</span>
                </a>
              </div>
            </div>

            {/* Trust Points */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Original
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-amber-400" /> 35 Heavy Servings
              </span>
              <span>•</span>
              <span>Same-Day in Mughalsarai</span>
            </div>
          </div>

          {/* Right Column: High-Res 3D Jar Packshot with Interactive Flavor Swatches */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            {/* Glowing circle backdrop */}
            <div className="relative w-full max-w-md h-80 sm:h-[440px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* 3D Straight Jar Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-300">
                <Image
                  src={current.img}
                  alt={current.name}
                  width={420}
                  height={480}
                  priority
                  className="w-auto h-full max-h-76 sm:max-h-96 object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={onBuyNow}
                />
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-md shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-black text-white uppercase tracking-wider">
                  35 Servings
                </span>
              </div>
            </div>

            {/* Flavor Switcher Bar */}
            <div className="mt-4 p-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2 backdrop-blur-md">
              <span className="text-[10px] uppercase font-bold text-zinc-400 px-2 hidden sm:inline">
                Flavour:
              </span>
              {Object.entries(flavorImages).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFlavor(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedFlavor === key
                      ? "bg-zinc-800 text-white border border-emerald-500/60 shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: val.color }}
                  />
                  <span className="capitalize">{key.replace("_", " ")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
