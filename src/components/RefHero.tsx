"use client";

import React from "react";
import Image from "next/image";

interface RefHeroProps {
  onAcheter: () => void;
}

export const RefHero: React.FC<RefHeroProps> = ({ onAcheter }) => {
  return (
    <section className="relative w-full bg-[#f4f2ee] overflow-hidden border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Exact Authentic Studio Hero Banner */}
        <div className="relative w-full aspect-[2.22/1] min-h-[300px] sm:min-h-[440px] md:min-h-[500px] rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/images/ref_hero_hd.png"
            alt="100% Isolated Whey Protein - 30G OF PROTEIN"
            fill
            priority
            className="object-contain sm:object-cover object-center"
            unoptimized
          />

          {/* Seamless Indian Rupees Price Overlay Box */}
          <div className="absolute right-[17.5%] sm:right-[18.2%] top-[10.5%] sm:top-[10.8%] w-[17.5%] sm:w-[17%] h-[35.5%] sm:h-[35.5%] bg-[#ded9ce]/95 sm:bg-[#ded9ce]/90 backdrop-blur-xs rounded-sm p-2 sm:p-3 flex flex-col items-center justify-between text-center border border-zinc-400/30 shadow-xs z-10">
            <span className="text-[7px] sm:text-[9px] md:text-[10px] text-zinc-600 font-bold uppercase tracking-wider block">
              Only / À Seulement
            </span>

            <div className="text-sm sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-none">
              ₹4,999
            </div>

            {/* Flavor Swatches */}
            <div className="hidden sm:flex flex-col items-center gap-0.5">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-[#4a2c1d] inline-block rounded-2xs" title="Chocolate" />
                <span className="w-2.5 h-2.5 bg-[#e8c39e] inline-block rounded-2xs" title="Vanilla" />
                <span className="w-2.5 h-2.5 bg-[#d93838] inline-block rounded-2xs" title="Strawberry" />
                <span className="w-2.5 h-2.5 bg-[#9cb86f] inline-block rounded-2xs" title="Pistachio" />
              </div>
              <span className="text-[7px] md:text-[8px] uppercase font-bold text-zinc-500 tracking-wider">
                FLAVORS AVAILABLE
              </span>
            </div>

            {/* Buy Button */}
            <button
              onClick={onAcheter}
              className="w-full py-1 sm:py-1.5 md:py-2 bg-[#232323] hover:bg-[#D32F2F] text-white font-black text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              BUY NOW / ACHETER
            </button>

            <span className="text-[6px] sm:text-[8px] text-zinc-600 hidden sm:block underline font-medium truncate max-w-full">
              Same-Day Delivery in Chandauli
            </span>
          </div>

          {/* Center Big Bottle Click to Buy Hotspot */}
          <button
            onClick={onAcheter}
            aria-label="Buy 100% Whey Protein"
            className="absolute left-[36%] right-[36%] top-[5%] bottom-[20%] cursor-pointer focus:outline-none"
            title="Click to view & order"
          />

          {/* Left / Right Navigation Arrows */}
          <button
            onClick={onAcheter}
            aria-label="Previous"
            className="absolute left-[0.2%] sm:left-[0.5%] top-[36%] sm:top-[36.5%] w-[3%] h-[6%] cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
          />
          <button
            onClick={onAcheter}
            aria-label="Next"
            className="absolute right-[0.2%] sm:right-[0.5%] top-[36%] sm:top-[36.5%] w-[3%] h-[6%] cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};
