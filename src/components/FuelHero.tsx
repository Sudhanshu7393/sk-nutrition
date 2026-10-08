"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf, FlaskConical, ShieldAlert, Award, Zap } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface FuelHeroProps {
  onShopNow: () => void;
}

export function FuelHero({ onShopNow }: FuelHeroProps) {
  const { theme } = useTheme();

  return (
    <section className={`relative overflow-hidden py-10 sm:py-16 lg:py-20 border-b font-sans transition-colors duration-300 ${theme === "dark" ? "bg-black text-white border-zinc-900" : "bg-white text-zinc-900 border-zinc-200"}`}>
      {/* Subtle gym background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-lime-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Features */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Huge 3-Tone Headline */}
            <div className="space-y-0 tracking-tighter">
              <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none block drop-shadow-sm ${theme === "dark" ? "text-white" : "text-zinc-950"}`}>
                DISCIPLINE.
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none block text-[#A3E635] drop-shadow-sm">
                NUTRITION.
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none block text-[#EA580C] drop-shadow-sm">
                DOMINATION.
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-1">
              <p className={`text-base sm:text-xl font-black uppercase tracking-wider ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"}`}>
                PREMIUM SUPPLEMENTS. REAL RESULTS.
              </p>
              <p className={`text-xs sm:text-sm font-medium max-w-lg ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}>
                Clinically dosed Peakvitals Nutrition Pre-Workout. Formulated for aggressive focus, explosive nitric oxide muscle pumps, and zero post-workout crash.
              </p>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {[
                { icon: Leaf, label: "Clean Ingredients" },
                { icon: FlaskConical, label: "Lab Tested" },
                { icon: ShieldAlert, label: "Banned Substance Free" },
                { icon: Award, label: "100% Genuine Direct" },
              ].map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-2 rounded-xl border transition ${
                      theme === "dark"
                        ? "bg-zinc-900/80 border-zinc-800 text-zinc-300"
                        : "bg-zinc-100 border-zinc-200 text-zinc-800"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#A3E635] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-black uppercase leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button & Pricing Pill */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div
                className={`flex items-baseline gap-2 px-4 py-3 rounded-xl border transition ${
                  theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-300 shadow-xs"
                }`}
              >
                <span className={`text-lg font-black ${theme === "dark" ? "text-[#A3E635]" : "text-emerald-600"}`}>
                  ₹1,299
                </span>
                <span className={`text-xs line-through ${theme === "dark" ? "text-zinc-500" : "text-zinc-400"}`}>
                  MRP ₹1,999
                </span>
                <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                  Save 35%
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Packshot with 3D Glowing Pedestal */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-md h-80 sm:h-96 lg:h-[460px] flex items-center justify-center">
              {/* 3D Glowing Ambient Halo */}
              <div className="absolute inset-0 bg-radial from-[#A3E635]/20 via-[#EA580C]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* 3D Illuminated Floating Floor Pedestal */}
              <div className="absolute bottom-6 w-72 sm:w-80 h-16 bg-gradient-to-r from-[#A3E635]/25 via-[#EA580C]/35 to-[#A3E635]/25 rounded-full blur-xl pointer-events-none animate-pulse" />
              <div className="absolute bottom-10 w-64 sm:w-72 h-7 border border-[#A3E635]/50 rounded-full shadow-[0_0_25px_#A3E635] pointer-events-none" />
              <div
                className={`absolute bottom-12 w-48 sm:w-56 h-3 rounded-full blur-sm pointer-events-none ${
                  theme === "dark" ? "bg-black/90" : "bg-zinc-400/60"
                }`}
              />

              <Image
                src="/images/peakvitals_trans/green_apple.png"
                alt="Peakvitals Pre-Workout"
                fill
                priority
                className={`object-contain hover:scale-105 transition-transform duration-500 z-10 ${
                  theme === "dark"
                    ? "filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)]"
                    : "filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
                }`}
              />

              {/* Floating Active Dose Stats Pill */}
              <div
                className={`absolute -bottom-2 sm:bottom-2 left-2 sm:left-4 z-20 backdrop-blur-md border rounded-2xl p-3 shadow-2xl card-3d-glow ${
                  theme === "dark" ? "bg-zinc-950/95 border-zinc-700" : "bg-white/95 border-zinc-200"
                }`}
              >
                <div className="flex items-center gap-3 text-center">
                  <div>
                    <span className="block text-xs sm:text-sm font-black text-[#A3E635]">1.5G</span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Citrulline
                    </span>
                  </div>
                  <div className={`w-px h-6 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`} />
                  <div>
                    <span className={`block text-xs sm:text-sm font-black ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                      2.0G
                    </span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Arginine
                    </span>
                  </div>
                  <div className={`w-px h-6 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`} />
                  <div>
                    <span className="block text-xs sm:text-sm font-black text-[#EA580C]">195MG</span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Caffeine
                    </span>
                  </div>
                  <div className={`w-px h-6 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"}`} />
                  <div>
                    <span className="block text-xs sm:text-sm font-black text-emerald-500">35</span>
                    <span className={`text-[9px] uppercase tracking-wider ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                      Servings
                    </span>
                  </div>
                </div>
              </div>

              {/* Top Bestseller Badge with 3D Shine */}
              <div className="absolute top-2 right-2 sm:right-4 z-20 px-3 py-1 rounded-full bg-[#EA580C] text-white font-black text-[10px] uppercase tracking-wider shadow-lg shadow-orange-950/40">
                ⚡ #1 Bestseller
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
