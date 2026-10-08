"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { SITE_CONFIG } from "@/data/config";
import { Star, ShoppingBag, MessageCircle, Eye, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0] || "Standard");
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const selectedWeight = product.weightOptions[selectedWeightIndex] || {
    label: "Standard",
    priceMultiplier: 1.0,
  };

  const calculatedPrice = Math.round(product.price * selectedWeight.priceMultiplier);
  const calculatedOriginalPrice = Math.round(product.originalPrice * selectedWeight.priceMultiplier);
  const discountPercent = Math.round(
    ((calculatedOriginalPrice - calculatedPrice) / calculatedOriginalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart(product, selectedFlavor, selectedWeight.label, calculatedPrice, 1);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 1500);
  };

  const whatsAppDirectUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${SITE_CONFIG.name}, I want to order:\n- *${product.name}*\n- Size: ${selectedWeight.label}\n- Flavor: ${selectedFlavor}\n- Price: Rs.${calculatedPrice}\n\nPlease confirm availability and delivery in Mughalsarai/Chandauli.`
  )}`;

  return (
    <div className="group relative flex flex-col bg-white rounded-lg p-4 sm:p-5 border border-zinc-200/90 hover:border-zinc-300 hover:shadow-xl transition-all duration-300 text-center">
      {/* Round Red Discount Badge (Exact Reference Style: e.g. -20%) */}
      {discountPercent > 0 && (
        <div className="absolute top-3 left-3 z-10 w-11 h-11 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center shadow-md">
          -{discountPercent}%
        </div>
      )}

      {/* Upright Centered 3D Product Packshot Container */}
      <div
        onClick={() => onQuickView(product)}
        className="relative h-64 sm:h-72 w-full flex items-center justify-center cursor-pointer p-2 overflow-hidden bg-white"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-full max-h-60 sm:max-h-64 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
        />

        {/* Hover Action Overlay (like reference: 'VOIR LE PRODUIT') */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="bg-red-600 text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Product
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Title in Bold Clean Uppercase */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-extrabold text-xs sm:text-sm text-zinc-900 uppercase tracking-tight group-hover:text-red-600 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-sm sm:text-base font-black text-zinc-950">
              ₹{calculatedPrice.toLocaleString("en-IN")}.00
            </span>
            {calculatedOriginalPrice > calculatedPrice && (
              <span className="text-xs text-red-500 line-through font-medium">
                ₹{calculatedOriginalPrice.toLocaleString("en-IN")}.00
              </span>
            )}
          </div>

          {/* Green Stock Indicator (like reference: 'EN STOCK') */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-600 font-bold uppercase tracking-wider mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
            <span>IN STOCK • SAME DAY DISPATCH</span>
          </div>

          {/* Size / Servings Selector Pills */}
          <div className="flex justify-center gap-1.5 mt-2.5">
            {product.weightOptions.map((opt, idx) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedWeightIndex(idx)}
                className={`text-[11px] px-2.5 py-1 rounded font-bold border transition-all ${
                  selectedWeightIndex === idx
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Flavor Dropdown */}
          {product.flavors.length > 0 && (
            <div className="mt-2">
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-[11px] text-zinc-800 font-medium focus:outline-none focus:border-red-600"
              >
                {product.flavors.map((f) => (
                  <option key={f} value={f}>
                    Flavor: {f}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-100">
          <button
            onClick={handleAddToCart}
            className={`py-2 px-3 rounded text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all ${
              isAddedFeedback
                ? "bg-emerald-600 text-white"
                : "bg-zinc-950 hover:bg-red-600 text-white active:scale-95"
            }`}
          >
            {isAddedFeedback ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
              </>
            )}
          </button>

          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
