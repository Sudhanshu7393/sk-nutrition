"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { Tag, MessageCircle } from "lucide-react";

export const PromoStrip: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white py-12 border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text (Exact Reference Style: 25% OFF WITH CODE...) */}
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold block">
              Special Mughalsarai Offer
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              FLAT 10% OFF <span className="text-red-500">WITH CODE SK10</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Valid on all pre-workouts • Free doorstep local delivery across Ravi Nagar & Chandauli
            </p>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20want%20to%20apply%20coupon%20SK10%20for%20pre-workout`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded shadow-lg transition-all flex items-center gap-2 active:scale-95"
            >
              <Tag className="w-4 h-4" />
              <span>CLAIM OFFER ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
