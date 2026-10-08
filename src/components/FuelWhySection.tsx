"use client";

import React from "react";
import { Zap, Dumbbell, Clock, ShieldCheck, ArrowRight } from "lucide-react";

import { useTheme } from "@/context/ThemeContext";

export function FuelWhySection() {
  const { theme } = useTheme();

  const pillars = [
    {
      icon: Zap,
      title: "MAX PERFORMANCE",
      desc: "High-stim clinically dosed active grams that power your heaviest sets and mental focus.",
    },
    {
      icon: Dumbbell,
      title: "VASCULAR MUSCLE PUMP",
      desc: "1.5g L-Citrulline Malate + 2g Arginine AAKG for skin-splitting roadmap vascularity.",
    },
    {
      icon: Clock,
      title: "ZERO CRASH ENERGY",
      desc: "195mg smooth natural caffeine delivers sustained adrenaline without jitters or post-gym crash.",
    },
    {
      icon: ShieldCheck,
      title: "100% GENUINE & FSSAI",
      desc: "Direct factory partnership from Peakvitals Nutrition with batch certificate holograms.",
    },
  ];

  return (
    <section
      className={`py-14 sm:py-20 border-b font-sans transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white border-zinc-900" : "bg-white text-zinc-900 border-zinc-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-4 space-y-5">
            <h2
              className={`text-3xl sm:text-4xl font-black italic uppercase tracking-tight leading-none ${
                theme === "dark" ? "text-white" : "text-zinc-900"
              }`}
            >
              WHY <br />
              <span className={theme === "dark" ? "text-[#A3E635]" : "text-emerald-600"}>PEAKVITALS?</span>
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                theme === "dark" ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              We don&apos;t just sell supplements. We fuel the driven. The disciplined. The relentless. Every scoop of Peakvitals Pre-Workout delivers uncompromised active grams for pure gym dominance.
            </p>
            <a
              href="#store-location"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all ${
                theme === "dark"
                  ? "border-zinc-700 hover:border-[#A3E635] text-zinc-200 hover:text-[#A3E635]"
                  : "border-zinc-300 hover:border-emerald-600 text-zinc-700 hover:text-emerald-700 shadow-xs"
              }`}
            >
              <span>VISIT OUR STORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`p-5 rounded-2xl border transition-all space-y-3 flex flex-col justify-between ${
                    theme === "dark"
                      ? "bg-zinc-950 border-zinc-800/90 hover:border-zinc-700"
                      : "bg-zinc-50 border-zinc-200 hover:border-zinc-300 shadow-xs"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-zinc-900 border-zinc-800 text-[#A3E635]"
                        : "bg-white border-zinc-200 text-emerald-600 shadow-xs"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-black text-xs sm:text-sm uppercase tracking-tight ${
                        theme === "dark" ? "text-white" : "text-zinc-900"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={`text-[11px] mt-1 leading-relaxed ${
                        theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
