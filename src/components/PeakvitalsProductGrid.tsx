"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PEAKVITALS_PREWORKOUTS, PeakvitalsProduct } from "@/data/peakvitalsProducts";
import { Search, Tag, Zap, ShieldCheck, ShoppingBag, MessageCircle, Star } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

interface PeakvitalsProductGridProps {
  onSelectProduct: (product: PeakvitalsProduct) => void;
  onAddToCart: (product: PeakvitalsProduct) => void;
}

export const PeakvitalsProductGrid: React.FC<PeakvitalsProductGridProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All Flavours & Packs" },
    { id: "green-apple", label: "Green Apple" },
    { id: "blue-raspberry", label: "Blue Raspberry" },
    { id: "watermelon", label: "Watermelon" },
    { id: "orange", label: "Tangy Orange" },
    { id: "combo", label: "Value Bundles" },
  ];

  const filteredProducts = PEAKVITALS_PREWORKOUTS.filter((p) => {
    if (activeTab === "green-apple" && !p.id.includes("green-apple")) return false;
    if (activeTab === "blue-raspberry" && !p.id.includes("blue-raspberry")) return false;
    if (activeTab === "watermelon" && !p.id.includes("watermelon")) return false;
    if (activeTab === "orange" && !p.id.includes("orange")) return false;
    if (activeTab === "combo" && !p.id.includes("pack") && !p.id.includes("stack")) return false;

    if (searchQuery.trim() !== "") {
      return (
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.flavor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <section className="py-16 bg-[#0f1118] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-emerald-400" />
            Pick Your Workout Fuel
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            PEAKVITALS FLAVOURS & VALUE PACKS
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto">
            Choose your favourite flavour or save big with our Double Tub and Triple Power bundle packs with free local delivery.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto flex items-center rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/90 shadow-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search flavours, packs, or formula..."
              className="flex-1 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none"
            />
            <button className="bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold px-5 py-3 transition-colors cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-2 text-xs font-bold uppercase tracking-wider">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-800/80 hover:bg-zinc-750 text-zinc-300 border border-zinc-700/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Badges */}
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black text-xs">
                  {product.discountBadge}
                </span>

                <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-[10px] font-black uppercase tracking-wider">
                  {product.servings}
                </span>
              </div>

              {/* 3D Packshot Image */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative h-60 sm:h-68 w-full flex items-center justify-center p-2 cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={320}
                  className="w-auto h-full max-h-56 sm:max-h-64 object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Info Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      Peakvitals Nutrition
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>4.9</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-black text-sm text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors cursor-pointer mt-1"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    {product.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline justify-between pt-1 border-t border-zinc-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">{product.price}</span>
                    <span className="text-xs text-zinc-500 line-through font-bold">
                      MRP {product.originalPrice}
                    </span>
                  </div>
                  {product.dealBadge && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                      {product.dealBadge}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md shadow-emerald-500/20"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Buy Now</span>
                  </button>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20for%20${encodeURIComponent(product.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-emerald-400 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
