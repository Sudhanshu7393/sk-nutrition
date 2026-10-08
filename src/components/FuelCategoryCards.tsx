"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

export function FuelCategoryCards() {
  const { setSelectedCategoryTab, setSearchQuery } = useCart();
  const { theme } = useTheme();

  const cards = [
    {
      id: "high-stim",
      search: "green apple",
      title: "GREEN APPLE",
      desc: "Original. High Stim. Focus.",
      img: "/images/peakvitals_trans/green_apple.png",
      tag: "FLAGSHIP",
    },
    {
      id: "high-stim",
      search: "blue raspberry",
      title: "BLUE RAZZ",
      desc: "Electric Energy. Zero Crash.",
      img: "/images/peakvitals_trans/blue_raspberry.png",
      tag: "POPULAR",
    },
    {
      id: "pump",
      search: "watermelon",
      title: "WATERMELON",
      desc: "Skin-Tearing Pump. Nitric Oxide.",
      img: "/images/peakvitals_trans/watermelon.png",
      tag: "MAX PUMP",
    },
    {
      id: "endurance",
      search: "orange",
      title: "TANGY ORANGE",
      desc: "Endurance. 2g Beta-Alanine.",
      img: "/images/peakvitals_trans/tangy_orange.png",
      tag: "STAMINA",
    },
    {
      id: "combo",
      search: "twin pack",
      title: "BUNDLES & STACKS",
      desc: "Twin Pack + Free Shaker Bottle.",
      img: "/images/peakvitals_trans/twin_pack.png",
      tag: "SAVE 40%",
    },
  ];

  const handleCardClick = (c: typeof cards[0]) => {
    setSelectedCategoryTab(c.id);
    setSearchQuery(c.search);
    const el = document.getElementById("featured-products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`py-10 border-b font-sans relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-zinc-950 border-zinc-800 text-white" : "bg-zinc-100 border-zinc-200 text-zinc-900"
      }`}
    >
      {/* Background radial glow */}
      <div
        className={`absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          theme === "dark" ? "bg-[#A3E635]/5" : "bg-lime-500/10"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {cards.map((c, i) => (
            <div
              key={i}
              onClick={() => handleCardClick(c)}
              className={`p-[2px] rounded-3xl card-3d-glow animate-border-shine transition-all duration-500 cursor-pointer group shadow-lg hover:-translate-y-1.5 flex flex-col ${
                theme === "dark"
                  ? "bg-gradient-to-br from-zinc-700/80 via-zinc-800 to-zinc-900 hover:from-[#A3E635] hover:via-white/40 hover:to-[#EA580C]"
                  : "bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400 hover:from-[#A3E635] hover:via-white hover:to-[#EA580C] shadow-zinc-200/80"
              }`}
            >
              <div
                className={`h-full p-3.5 sm:p-4 rounded-[22px] flex flex-col justify-between relative overflow-hidden ${
                  theme === "dark" ? "bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" : "bg-white shadow-xs"
                }`}
              >
                {/* 3D Showcase Pod for transparent jar */}
                <div
                  className={`relative w-full h-32 sm:h-38 mb-3 rounded-2xl border flex items-center justify-center overflow-hidden transition-colors ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-zinc-950 via-zinc-900/60 to-black border-zinc-800 group-hover:border-[#A3E635]/50"
                      : "bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-200/50 border-zinc-200 group-hover:border-[#A3E635]/80"
                  }`}
                >
                  {/* Subtle radial glow */}
                  <div className="absolute inset-0 bg-radial from-[#A3E635]/20 to-transparent pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  {/* 3D floor shadow */}
                  <div
                    className={`absolute bottom-1.5 w-3/4 h-2.5 rounded-full blur-xs ${
                      theme === "dark" ? "bg-black/95" : "bg-zinc-400/60"
                    }`}
                  />

                  {/* 3D Light Sweep Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className={`object-contain p-2 group-hover:scale-110 group-hover:-translate-y-1.5 transition-all duration-300 ${
                      theme === "dark"
                        ? "filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.95)]"
                        : "filter drop-shadow-[0_12px_16px_rgba(0,0,0,0.2)]"
                    }`}
                  />
                  <span
                    className={`absolute top-1.5 right-1.5 text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border z-10 shadow-md ${
                      theme === "dark"
                        ? "bg-zinc-900/95 border-zinc-700 text-[#A3E635]"
                        : "bg-white border-zinc-300 text-emerald-700"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-black text-xs sm:text-sm uppercase tracking-tight transition-colors ${
                      theme === "dark"
                        ? "text-white group-hover:text-[#A3E635]"
                        : "text-zinc-900 group-hover:text-emerald-600"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`text-[11px] mt-0.5 leading-snug line-clamp-1 font-medium ${
                      theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                    }`}
                  >
                    {c.desc}
                  </p>

                  <div
                    className={`mt-3 flex items-center gap-1 text-[11px] font-black uppercase tracking-wider transition-colors ${
                      theme === "dark"
                        ? "text-[#A3E635] group-hover:text-white"
                        : "text-emerald-600 group-hover:text-zinc-900"
                    }`}
                  >
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
