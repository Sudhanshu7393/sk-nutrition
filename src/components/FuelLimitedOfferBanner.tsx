"use client";

import React, { useState, useEffect } from "react";
import { Clock, Copy, Check, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function FuelLimitedOfferBanner() {
  const { applyCoupon } = useCart();
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hrs: "02", mins: "47", secs: "19" });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const s = 59 - now.getSeconds();
      const m = 59 - now.getMinutes();
      const h = 23 - now.getHours();
      setTimeLeft({
        hrs: String(Math.max(0, h)).padStart(2, "0"),
        mins: String(Math.max(0, m)).padStart(2, "0"),
        secs: String(Math.max(0, s)).padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleApply = () => {
    applyCoupon("PEAKVITALS5");
    navigator.clipboard?.writeText("PEAKVITALS5");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    const el = document.getElementById("featured-products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white font-sans overflow-hidden border-y border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Orange Wedge Ribbon */}
        <div className="bg-[#EA580C] text-white py-4 px-6 sm:px-10 flex items-center gap-3 w-full lg:w-auto shrink-0 justify-center lg:justify-start">
          <Clock className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse shrink-0" />
          <div className="leading-tight">
            <span className="block text-xs font-black uppercase tracking-widest text-orange-200">
              FLASH SAVINGS
            </span>
            <span className="block text-xl sm:text-2xl font-black italic uppercase tracking-tighter">
              LIMITED TIME OFFER!
            </span>
          </div>
        </div>

        {/* Center: Discount & Coupon Code Box */}
        <div className="py-4 px-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xl sm:text-3xl font-black italic uppercase tracking-tight text-[#A3E635]">
                GET 5% OFF
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-300">
                ON PEAKVITALS ORDERS
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Instant discount on Green Apple, Blue Razz, Watermelon, Orange &amp; Bundles.
            </p>
          </div>

          {/* Coupon Code Pill */}
          <div
            onClick={handleApply}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#A3E635] text-xs font-mono font-black tracking-wider text-white cursor-pointer transition shadow-xs"
          >
            <span className="text-zinc-400 font-sans text-[10px]">USE CODE:</span>
            <span className="text-[#A3E635]">PEAKVITALS5</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1" />
            )}
          </div>
        </div>

        {/* Right: Live Countdown Clock & Shop Button */}
        <div className="py-4 px-6 sm:px-8 flex items-center gap-4 sm:gap-6 w-full lg:w-auto justify-center lg:justify-end border-t lg:border-t-0 border-zinc-800">
          {/* Timer digits */}
          <div className="text-center">
            <span className="text-[9px] font-black uppercase text-zinc-400 block tracking-wider mb-1">
              OFFER ENDS IN:
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono font-black">
              <div className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-white">
                {timeLeft.hrs}
              </div>
              <span className="text-zinc-600">:</span>
              <div className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-[#A3E635]">
                {timeLeft.mins}
              </div>
              <span className="text-zinc-600">:</span>
              <div className="bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-[#EA580C]">
                {timeLeft.secs}
              </div>
            </div>
          </div>

          {/* Shop Button */}
          <button
            onClick={handleApply}
            className="px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>SHOP NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
