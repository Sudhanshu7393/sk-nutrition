"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function NutrabayCategoriesRow({
  onSelectCategory,
}: {
  onSelectCategory?: (id: string) => void;
}) {
  const { setSelectedCategoryTab, setSearchQuery } = useCart();

  const categories = [
    { id: "high-stim", search: "green apple", name: "Green Apple", img: "/images/peakvitals_real/green_apple.png", tag: "Original" },
    { id: "high-stim", search: "blue raspberry", name: "Blue Raspberry", img: "/images/peakvitals_real/blue_raspberry.png", tag: "Energy" },
    { id: "pump", search: "watermelon", name: "Watermelon", img: "/images/peakvitals_real/watermelon.png", tag: "Pump" },
    { id: "endurance", search: "orange", name: "Tangy Orange", img: "/images/peakvitals_real/tangy_orange.png", tag: "Citrus" },
    { id: "combo", search: "twin pack", name: "Twin Pack (2 Tubs)", img: "/images/peakvitals_real/twin_pack.png", tag: "Free Shaker" },
    { id: "combo", search: "triple stack", name: "Triple Stack", img: "/images/peakvitals_real/triple_stack.png", tag: "Max Value" },
  ];

  const handleCategoryClick = (cat: typeof categories[0]) => {
    if (onSelectCategory) {
      onSelectCategory(cat.id);
    } else {
      setSelectedCategoryTab(cat.id);
      setSearchQuery(cat.search);
      const el = document.getElementById("bestsellers");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight flex items-center gap-1.5">
            <span>Peakvitals Pre-Workout Flavours</span>
            <button
              onClick={() => {
                setSelectedCategoryTab("all");
                setSearchQuery("");
                const el = document.getElementById("bestsellers");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-orange-500 font-bold text-sm cursor-pointer hover:underline flex items-center"
            >
              All <ChevronRight className="w-4 h-4" />
            </button>
          </h2>
        </div>

        {/* Thumbnail Cards Row (Exact Nutrabay Style) */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className="flex flex-col items-center p-3 rounded-2xl bg-gray-50/80 hover:bg-orange-50/50 border border-gray-200/70 hover:border-orange-300 transition-all cursor-pointer shrink-0 w-28 sm:w-34 group shadow-2xs hover:shadow-xs"
            >
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 flex items-center justify-center">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>

              <span className="font-bold text-[11px] sm:text-xs text-gray-800 text-center mt-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                {cat.name}
              </span>
              <span className="text-[9px] text-gray-400 font-medium">
                {cat.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
