"use client";

import React from "react";
import { ShieldCheck, Truck, Sparkles, Star, Award, CheckCircle } from "lucide-react";

export function PeakvitalsTrustBadges() {
  const reviews = [
    {
      name: "Rohit Verma",
      city: "Mughalsarai, Chandauli",
      comment: "Bhai Green Apple ka flavor aur pump dono next level hai! 1 scoop mein heavy bench press aur deadlift easy lag raha hai. Aur delivery same day sham ko hi mil gayi.",
      rating: 5,
      variant: "Green Apple (35 Servings)",
    },
    {
      name: "Amit Yadav",
      city: "Ravi Nagar, Mughalsarai",
      comment: "Zero crash pre-workout. Usually doosre pre-workout lene ke baad shyam ko thakan lagti thi, Peakvitals se continuous focus rehta hai. 100% authentic seal ke saath mila.",
      rating: 5,
      variant: "Blue Raspberry Blast",
    },
    {
      name: "Vikas Singh",
      city: "Chandauli (Varanasi Border)",
      comment: "Twin pack mangaaya tha shaker free mila. Price bhi online se sasta aur batch verification code verified hai. S.K Nutrition best shop hai Mughalsarai mein.",
      rating: 5,
      variant: "Twin Pack Combo",
    },
  ];

  return (
    <section className="py-16 bg-[#090b10] text-white border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-black text-sm text-white">100% AUTHENTIC</p>
              <p className="text-[11px] text-zinc-400">Scratch & QR Verified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-black text-sm text-white">SAME-DAY DISPATCH</p>
              <p className="text-[11px] text-zinc-400">Mughalsarai & Chandauli</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="font-black text-sm text-white">BEST PRICE ₹1,299</p>
              <p className="text-[11px] text-zinc-400">Direct Dealer Pricing</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-black text-sm text-white">4.9 / 5.0 RATING</p>
              <p className="text-[11px] text-zinc-400">Over 180+ Gym Athletes</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
              Verified Athlete Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
              WHAT ATHLETES ARE SAYING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white flex items-center gap-1">
                      {rev.name} <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </p>
                    <p className="text-[10px] text-zinc-500">{rev.city}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                    {rev.variant}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
