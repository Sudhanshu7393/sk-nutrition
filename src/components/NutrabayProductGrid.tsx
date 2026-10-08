"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Star, ChevronDown, ChevronRight, Check, Search, X } from "lucide-react";
import { PEAKVITALS_PREWORKOUTS, PeakvitalsProduct } from "@/data/peakvitalsProducts";
import { useCart } from "@/context/CartContext";

interface NutrabayProductGridProps {
  onSelectProduct: (product: PeakvitalsProduct) => void;
  onAddToCart: (product: PeakvitalsProduct) => void;
}

export function NutrabayProductGrid({
  onSelectProduct,
  onAddToCart,
}: NutrabayProductGridProps) {
  const { searchQuery, setSearchQuery, selectedCategoryTab, setSelectedCategoryTab } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const tabs = [
    { id: "all", label: "All Flavours" },
    { id: "high-stim", label: "High Stim Focus" },
    { id: "pump", label: "Muscle Pump" },
    { id: "endurance", label: "Beta Alanine" },
    { id: "combo", label: "Value Bundles" },
  ];

  const handleAdd = (e: React.MouseEvent, prod: PeakvitalsProduct) => {
    e.stopPropagation();
    onAddToCart(prod);
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const filtered = PEAKVITALS_PREWORKOUTS.filter((p) => {
    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.flavor.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.weight.toLowerCase().includes(q);
      if (!match) return false;
    }

    // 2. Tab Filter
    if (selectedCategoryTab === "high-stim" && !p.id.includes("blue") && !p.id.includes("green")) return false;
    if (selectedCategoryTab === "pump" && !p.id.includes("watermelon")) return false;
    if (selectedCategoryTab === "endurance" && !p.id.includes("orange")) return false;
    if (selectedCategoryTab === "combo" && !p.id.includes("pack") && !p.id.includes("stack")) return false;

    return true;
  });

  return (
    <section id="bestsellers" className="py-8 bg-white font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-1.5">
            <span>Bestsellers in Peakvitals Pre-Workout</span>
            <span
              onClick={() => {
                setSelectedCategoryTab("all");
                setSearchQuery("");
              }}
              className="text-orange-500 font-bold text-sm cursor-pointer hover:underline flex items-center"
            >
              All <ChevronRight className="w-4 h-4" />
            </span>
          </h2>
        </div>

        {/* Active Search indicator */}
        {searchQuery && (
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-xs">
            <Search className="w-4 h-4 text-orange-500 shrink-0" />
            <span className="text-gray-700">
              Showing results for: <strong className="text-gray-900">&ldquo;{searchQuery}&rdquo;</strong> ({filtered.length} found)
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="ml-auto flex items-center gap-1 text-[11px] font-bold text-orange-600 hover:text-orange-700 cursor-pointer"
            >
              Clear <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Category Tabs with Orange Underline (Exact Nutrabay Style) */}
        <div className="flex items-center gap-6 border-b border-gray-200 overflow-x-auto scrollbar-none pb-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategoryTab(tab.id)}
              className={`pb-2.5 text-xs sm:text-sm font-bold transition-colors cursor-pointer shrink-0 relative ${
                selectedCategoryTab === tab.id
                  ? "text-orange-600 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6-Card Product Grid (Exact Nutrabay Card Layout) */}
        {filtered.length === 0 ? (
          <div className="py-12 text-center space-y-3 bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <p className="text-sm font-bold text-gray-800">No flavours match &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-gray-500">Try searching for &quot;Green Apple&quot;, &quot;Blue Razz&quot;, &quot;Watermelon&quot;, or &quot;Combo&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryTab("all");
              }}
              className="px-4 py-2 bg-orange-500 text-white rounded-xl text-xs font-bold uppercase transition hover:bg-orange-600"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-2">
            {filtered.map((prod) => {
              const isAdded = addedId === prod.id;
              const per100g = Math.round((prod.numericPrice / (prod.id.includes("twin") ? 500 : prod.id.includes("triple") ? 750 : 250)) * 100);

              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="group relative flex flex-col justify-between p-3 rounded-2xl bg-white border border-gray-200/90 hover:border-gray-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <div>
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between min-h-[22px]">
                      {prod.discountBadge ? (
                        <span className="text-[10px] sm:text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {prod.discountBadge.replace("-", "")} OFF
                        </span>
                      ) : <span />}

                      {prod.dealBadge && (
                        <span className="text-[9px] font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* 3D Product Image + Orange Plus Button */}
                    <div className="relative w-full h-36 sm:h-44 my-2 flex items-center justify-center">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Nutrabay Signature Orange '+' Button */}
                      <button
                        onClick={(e) => handleAdd(e, prod)}
                        aria-label="Add to cart"
                        className={`absolute bottom-0 right-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-md transition-all active:scale-90 cursor-pointer ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-white hover:bg-orange-50 border border-orange-400 text-orange-500 hover:text-orange-600"
                        }`}
                        title="Quick Add to Cart"
                      >
                        {isAdded ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </button>
                    </div>

                    {/* Veg Icon + Rating */}
                    <div className="flex items-center gap-1.5 mt-1">
                      {/* Indian Veg Mark */}
                      <div className="w-3.5 h-3.5 border border-emerald-600 rounded-2xs flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-gray-500 font-semibold">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-gray-800 font-bold">4.8</span>
                        <span>(1240)</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-bold text-xs sm:text-[13px] text-gray-900 mt-1 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors">
                      {prod.name}
                    </h3>

                    {/* Variant Dropdown Pill (Exact Nutrabay Style) */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(prod);
                      }}
                      className="mt-2 inline-flex items-center justify-between w-full px-2 py-1 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-[11px] text-gray-700 font-medium cursor-pointer"
                    >
                      <span className="truncate">{prod.weight}, {prod.flavor.split(" ")[0]}</span>
                      <ChevronDown className="w-3 h-3 text-gray-400 shrink-0 ml-1" />
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="mt-2.5 pt-2 border-t border-gray-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm sm:text-base font-black text-gray-950">
                        {prod.price}
                      </span>
                      <span className="text-[11px] text-gray-400 line-through">
                        MRP: {prod.originalPrice}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                      ₹{per100g} / 100 g
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Pill at Bottom (Exact Nutrabay) */}
        <div className="flex items-center justify-center pt-4">
          <button
            onClick={() => {
              setSelectedCategoryTab("all");
              setSearchQuery("");
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-bold text-gray-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <span>View All Flavours &amp; Bundles</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
