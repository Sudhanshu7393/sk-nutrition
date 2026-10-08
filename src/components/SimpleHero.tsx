"use client";

import React from "react";
import { ShieldCheck, Truck, Zap } from "lucide-react";

export const SimpleHero: React.FC = () => {
  return (
    <section className="bg-[#FAF7F1] pt-8 pb-4 text-center border-b border-[#ECE5D8]">
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ECE5D8] text-[#A07524] text-xs font-bold uppercase tracking-wider shadow-xs">
          <Zap className="w-3.5 h-3.5 fill-[#C99A3C]" />
          <span>Official Pre-Workout Store</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1B1A17]">
          Pre-Workout <span className="text-[#A07524]">Supplements</span>
        </h1>

        <p className="text-xs sm:text-sm text-[#6B6559] max-w-xl mx-auto leading-relaxed">
          Select your formula below. Formulated for explosive physical energy, skin-tearing vascular pumps, and unbreakable mental focus.
        </p>

        {/* Minimal 3 Badges */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2 text-xs font-semibold text-[#1B1A17] flex-wrap">
          <span className="flex items-center gap-1.5 text-[#128A43]">
            <ShieldCheck className="w-4 h-4" /> 100% Authentic Brand Sourcing
          </span>
          <span className="flex items-center gap-1.5 text-[#A07524]">
            <Truck className="w-4 h-4" /> Same-Day Mughalsarai Delivery
          </span>
          <span className="flex items-center gap-1.5 text-[#1B1A17]">
            ⚡ Pay on Delivery / UPI Available
          </span>
        </div>
      </div>
    </section>
  );
};
