"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Zap } from "lucide-react";

interface NutrabayHeroBannerProps {
  onOrderNow: () => void;
}

export function NutrabayHeroBanner({ onOrderNow }: NutrabayHeroBannerProps) {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Super Explosive",
      subtitle: "& High Stim Focus",
      price: "₹1,299 Only",
      mrp: "MRP ₹1,999",
      badge: "Big Energy Savings",
      image: "/images/peakvitals_real/green_apple.png",
      tag: "35 Heavy Servings",
      bgColor: "from-[#a85220] via-[#c26d2d] to-[#d98236]",
    },
    {
      title: "Skin-Splitting Pumps",
      subtitle: "1.5g Citrulline + 2g Arginine",
      price: "₹1,299 Only",
      mrp: "MRP ₹1,999",
      badge: "Vascularity Surge",
      image: "/images/peakvitals_real/blue_raspberry.png",
      tag: "Zero Crash Formula",
      bgColor: "from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]",
    },
    {
      title: "Twin Pack Value Combo",
      subtitle: "2x 250g Tubs + Free Shaker",
      price: "₹2,399 Only",
      mrp: "MRP ₹3,999",
      badge: "Save ₹1,600 Today",
      image: "/images/peakvitals_real/twin_pack.png",
      tag: "70 Total Servings",
      bgColor: "from-[#18181b] via-[#27272a] to-[#3f3f46]",
    },
  ];

  const current = slides[slide];

  const nextSlide = () => setSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="pt-4 pb-2 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-sm group">
          {/* Main Slide Card */}
          <div
            onClick={onOrderNow}
            className={`cursor-pointer relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px] bg-gradient-to-r ${current.bgColor} text-white p-6 sm:p-10 flex items-center justify-between transition-all duration-500 overflow-hidden`}
          >
            {/* Background decorative splash effects */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-black/15 rounded-full blur-2xl pointer-events-none" />

            {/* Left: Medallion Badge (Nutrabay Signature) */}
            <div className="hidden sm:flex flex-col items-center justify-center shrink-0 z-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-red-700/95 border-4 border-amber-300 shadow-xl flex flex-col items-center justify-center text-center p-2 transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="text-amber-200 text-xs md:text-sm font-bold uppercase">⚡ Exclusive</span>
                <span className="text-white text-base md:text-xl font-black leading-tight uppercase">
                  {current.badge.split(" ")[0]} <br />
                  <span className="text-amber-300">{current.badge.split(" ").slice(1).join(" ")}</span>
                </span>
              </div>
            </div>

            {/* Center: 3D Peakvitals Jar (Straight & Crisp) */}
            <div className="relative flex-1 flex items-center justify-center h-48 sm:h-64 md:h-80 z-10 px-2">
              <div className="relative w-44 sm:w-60 md:w-72 h-full flex items-center justify-center">
                <Image
                  src={current.image}
                  alt="Peakvitals Pre-Workout"
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-300"
                />

                {/* TrusTified / 100% Authentic Badge on Jar */}
                <div className="absolute top-2 right-0 sm:right-2 z-20 px-2.5 py-1 rounded-md bg-white text-zinc-900 border border-emerald-500 shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] font-black uppercase text-emerald-800 block">100% AUTHENTIC</span>
                    <span className="text-[7px] text-gray-500 font-bold">BATCH VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price Ribbon & Pitch (Nutrabay Signature) */}
            <div className="shrink-0 text-right space-y-2 z-10 max-w-[45%] sm:max-w-none">
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                  {current.title}
                </h2>
                <p className="text-amber-100 text-xs sm:text-base font-semibold">
                  {current.subtitle}
                </p>
              </div>

              {/* Price Ribbon */}
              <div className="pt-2">
                <span className="text-xs sm:text-sm text-zinc-200 line-through font-bold block pr-2">
                  {current.mrp}
                </span>

                {/* Angled Yellow Ribbon (Exact Nutrabay Style) */}
                <div className="inline-block relative">
                  <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-zinc-950 font-black text-xl sm:text-3xl md:text-4xl py-2 px-6 rounded-md shadow-lg transform skew-x--6">
                    <span className="block transform skew-x-6">{current.price}</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] sm:text-xs text-amber-100/90 font-medium pt-1">
                ⚡ Same-Day Delivery in Mughalsarai & Chandauli
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition opacity-80 group-hover:opacity-100 cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition opacity-80 group-hover:opacity-100 cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
