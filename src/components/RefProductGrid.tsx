"use client";

import React, { useState } from "react";
import { MA_PRODUCTS, MAProduct } from "@/data/mafitnessProducts";
import { Search, Tag } from "lucide-react";

interface RefProductGridProps {
  onSelectProduct: (product: MAProduct) => void;
}

export const RefProductGrid: React.FC<RefProductGridProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All / Tout" },
    { id: "pre-workout", label: "Pre-Workout" },
    { id: "protein", label: "Protein" },
    { id: "creatine", label: "Creatine" },
    { id: "bcaa", label: "BCAA & EAAS" },
    { id: "gainer", label: "Mass Gainer" },
    { id: "vitamins", label: "Vitamins" },
    { id: "fatloss", label: "Fat Loss" },
    { id: "clothing", label: "Accessories" },
  ];

  const filteredProducts = MA_PRODUCTS.filter((p) => {
    if (activeTab !== "all" && p.category !== activeTab) return false;
    if (searchQuery.trim() !== "") {
      return p.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900">
            RECOMMENDED FOR YOU
          </h2>

          {/* Centered Search Bar with Red Button */}
          <div className="max-w-lg mx-auto flex items-center rounded-full overflow-hidden border border-zinc-300 bg-white shadow-2xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, brand, pre-workout or protein..."
              className="flex-1 px-4 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none"
            />
            <button className="bg-[#D32F2F] hover:bg-red-700 text-white px-5 py-2.5 transition-colors cursor-pointer">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1 text-[11px] font-bold uppercase tracking-wider">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#D32F2F] text-white shadow-xs"
                    : "bg-[#e5e5e5] hover:bg-[#d8d8d8] text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Columns Product Grid (Exact 16 Products with Indian Rupee Prices) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group relative flex flex-col items-center text-center p-3 rounded-lg hover:shadow-lg transition-all duration-300 bg-white cursor-pointer border border-transparent hover:border-zinc-200"
            >
              {/* Red -20% Sticker Badge (on Kaged Hydra Charge) */}
              {product.discountBadge && (
                <div className="absolute top-2 left-2 z-10 w-9 h-9 rounded-full bg-[#D32F2F] text-white font-black text-[11px] flex items-center justify-center shadow">
                  {product.discountBadge}
                </div>
              )}

              {/* Upright Centered Bottle Packaging */}
              <div className="relative h-48 sm:h-56 w-full flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto h-full max-h-44 sm:max-h-52 object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Button 'VIEW PRODUCT' in the center of bottle */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-[#D32F2F] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded shadow">
                    VIEW PRODUCT
                  </span>
                </div>
              </div>

              {/* Product Info with Indian Rupees ₹ */}
              <div className="pt-2 space-y-1 w-full">
                <h3 className="font-extrabold text-[11px] sm:text-xs text-zinc-900 uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors truncate">
                  {product.name}
                </h3>

                {/* Strikethrough Original Price / MRP */}
                {product.originalPrice && (
                  <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider line-through">
                    MRP {product.originalPrice}
                  </p>
                )}

                {/* Main Price in Indian Rupees */}
                <p className="text-sm sm:text-base font-black text-zinc-950">
                  {product.price}
                </p>

                {/* Stock Status Badge */}
                {product.inStock ? (
                  <p className="text-[9px] text-[#2E7D32] font-black uppercase tracking-widest">
                    IN STOCK
                  </p>
                ) : (
                  <p className="text-[9px] text-[#D32F2F] font-black uppercase tracking-widest">
                    OUT OF STOCK
                  </p>
                )}

                {/* Deal Promotion Tag (e.g. BUY 2 GET 1 FREE) */}
                {product.dealBadge && (
                  <p className="text-[9px] text-[#2E7D32] font-bold flex items-center justify-center gap-1">
                    <Tag className="w-2.5 h-2.5" />
                    <span>{product.dealBadge}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Red Button */}
        <div className="text-center pt-6">
          <button
            onClick={() => setActiveTab("all")}
            className="bg-[#D32F2F] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-8 py-2.5 rounded shadow transition-colors active:scale-95 cursor-pointer"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};
