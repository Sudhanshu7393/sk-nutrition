"use client";

import React from "react";
import { Star, ArrowRight, Quote } from "lucide-react";

export function FuelTransformations() {
  const reviews = [
    {
      name: "RAHUL SHARMA",
      city: "Mughalsarai Gym Hub",
      stat: "+15KG SQUAT PR",
      quote:
        "Peakvitals Green Apple gives insane tunnel-vision focus. I lift 6 days a week at Mughalsarai and this is the only pre-workout that gives pure drive with zero crash.",
      flavour: "Green Apple Flavour",
    },
    {
      name: "VIKAS TIWARI",
      city: "Chandauli Fitness Club",
      stat: "SKIN-SPLITTING PUMPS",
      quote:
        "The 1.5g Citrulline Malate + 2g Arginine pump on chest day is unreal. Veins popping on every set. Local delivery from Ravi Nagar store reached in 3 hours!",
      flavour: "Watermelon Punch",
    },
    {
      name: "AMIT KUMAR",
      city: "Varanasi Powerlifter",
      stat: "ZERO JITTER CRASH",
      quote:
        "Switched from expensive imported brands to Peakvitals. The taste is 10/10 and caffeine energy is super clean. Best pre-workout value in Uttar Pradesh.",
      flavour: "Blue Raspberry Blast",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-18 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
            REAL PEOPLE. <span className="text-[#EA580C]">REAL RESULTS.</span>
          </h2>
          <span className="text-xs font-black uppercase text-gray-500 flex items-center gap-1">
            Verified Local Athletes <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* 3 Review Cards (Exact Fuel Nation layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                    {r.stat}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-1 opacity-40 pointer-events-none" />
                  <p className="text-xs text-gray-700 leading-relaxed italic pl-3">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-xs text-gray-900 uppercase">
                    {r.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    {r.city}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  {r.flavour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
