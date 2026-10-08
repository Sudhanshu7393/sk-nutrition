"use client";

import React, { useState } from "react";
import { Sparkles, Check, Copy, Tag, Zap } from "lucide-react";
import Image from "next/image";

export function RefPromoBanner() {
  const [copied, setCopied] = useState(false);
  const promoCode = "PEAK15";

  const handleCopy = () => {
    navigator.clipboard?.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-10 bg-neutral-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-zinc-950 to-zinc-900 text-white p-6 sm:p-10 shadow-2xl border border-zinc-800">
          {/* Subtle neon glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#2E7D32]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left offer details */}
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32]/20 border border-[#2E7D32]/40 text-[#4CAF50] text-xs font-black tracking-widest uppercase">
                <Zap className="w-3.5 h-3.5 fill-[#4CAF50]" />
                Limited Local Launch Discount
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                FLAT 15% OFF WITH CODE <span className="text-[#4CAF50]">{promoCode}</span>
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm max-w-lg leading-relaxed">
                Order 100% authentic Peakvitals Nutrition Pre-Workout directly from S.K Nutrition, Ravi Nagar, Mughalsarai. Instant WhatsApp checkout & same-day delivery.
              </p>

              {/* Code copy & Activate CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1b5e20] text-white font-black text-xs uppercase px-5 py-3 rounded-lg shadow-lg transition duration-200 cursor-pointer active:scale-95"
                >
                  <Tag className="w-4 h-4" />
                  {copied ? "CODE COPIED!" : "ACTIVATE CODE"}
                </button>

                <div
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-xs transition hover:bg-zinc-750"
                >
                  <span className="text-[10px] uppercase text-zinc-400 font-bold">Code:</span>
                  <span className="font-black text-[#4CAF50] tracking-wider">{promoCode}</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  )}
                </div>
              </div>
            </div>

            {/* Right product showcase lineup */}
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="relative w-44 h-52 sm:w-52 sm:h-60 transform hover:scale-105 transition duration-300">
                <Image
                  src="/images/peakvitals_hero_upright.jpg"
                  alt="Peakvitals Nutrition Pre-Workout Tub"
                  fill
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(46,125,50,0.35)]"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
