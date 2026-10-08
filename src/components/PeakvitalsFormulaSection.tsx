"use client";

import React from "react";
import { Zap, Activity, Flame, ShieldAlert, CheckCircle2 } from "lucide-react";

export function PeakvitalsFormulaSection() {
  const ingredients = [
    {
      title: "1.5G L-Citrulline Malate",
      tag: "Maximum Pump",
      icon: Activity,
      desc: "Increases nitric oxide production in blood vessels, maximizing nutrient delivery and giving skin-tearing muscle fullness on every set.",
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      accent: "text-emerald-400",
    },
    {
      title: "2.0G Arginine AAKG",
      tag: "Vascularity Surge",
      icon: Flame,
      desc: "Alpha-Ketoglutarate compound enhances blood flow, vascular roadmaps, and sustained muscle pump without fatigue.",
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/30",
      accent: "text-green-400",
    },
    {
      title: "195MG Natural Caffeine",
      tag: "Laser Focus",
      icon: Zap,
      desc: "Smooth, clean central nervous system activation for extreme alertness, aggressive workout drive, and zero jittery crash.",
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/30",
      accent: "text-amber-400",
    },
    {
      title: "2.0G Beta-Alanine",
      tag: "High Endurance",
      icon: CheckCircle2,
      desc: "Buffers lactic acid build-up inside muscle fibers, allowing you to smash through the rep barrier and lift heavier for longer.",
      color: "from-teal-500/20 to-teal-500/5",
      border: "border-teal-500/30",
      accent: "text-teal-400",
    },
  ];

  return (
    <section className="py-12 bg-gray-50/70 text-gray-900 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            100% Transparent Active Formulation
          </div>
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-gray-900">
            Why Peakvitals Hits Harder
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Clinically dosed ingredients with zero fillers. Every scoop delivers exact active grams for peak workout aggression.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
          {ingredients.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all duration-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-black text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
