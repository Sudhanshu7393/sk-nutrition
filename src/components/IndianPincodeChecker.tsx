"use client";

import React, { useState } from "react";
import {
  MapPin,
  CheckCircle2,
  Truck,
  Zap,
  Globe2,
  Loader2,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

export function IndianPincodeChecker() {
  const { pincode, pincodeInfo, isPincodeLoading, updatePincode } = useCart();
  const { theme } = useTheme();
  const [inputVal, setInputVal] = useState(pincode);

  const handleInputChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 6);
    setInputVal(clean);
    if (clean.length === 6) {
      updatePincode(clean);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.length === 6) {
      updatePincode(inputVal);
    }
  };

  return (
    <div
      className={`border-y py-3 px-4 sm:px-8 font-sans transition-colors duration-300 ${
        theme === "dark"
          ? "bg-zinc-900/90 border-zinc-800/80 text-white"
          : "bg-white border-zinc-200 text-zinc-900 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
        {/* Left: Quick Label + Live Detected Location */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            className={`flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            <Globe2 className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>All India Delivery:</span>
          </div>

          {pincodeInfo && pincodeInfo.valid ? (
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] ${
                theme === "dark"
                  ? "bg-zinc-950 border-zinc-700/80 text-zinc-300"
                  : "bg-zinc-50 border-zinc-300 text-zinc-800 shadow-xs"
              }`}
            >
              <span className="flex items-center gap-1 text-emerald-600 dark:text-[#A3E635] font-black">
                <MapPin className="w-3 h-3 shrink-0" />
                {pincodeInfo.area ? `${pincodeInfo.area}, ` : ""}
                {pincodeInfo.district}, {pincodeInfo.state}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="font-semibold flex items-center gap-1">
                {pincodeInfo.isLocal ? (
                  <Zap className="w-3 h-3 text-[#A3E635]" />
                ) : (
                  <Truck className="w-3 h-3 text-orange-500" />
                )}
                {pincodeInfo.isLocal ? "Same-Day Delivery" : "2-4 Days Express"}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-emerald-500 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> COD Available
              </span>
            </div>
          ) : (
            <span className={theme === "dark" ? "text-zinc-400 font-medium" : "text-zinc-500 font-medium"}>
              Check delivery speed &amp; Cash on Delivery for your pincode:
            </span>
          )}
        </div>

        {/* Right: Ultra-Compact Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-1.5 self-start md:self-auto shrink-0">
          <div className="relative w-36 sm:w-44">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter Pincode"
              maxLength={6}
              className={`w-full pl-3 pr-7 py-1.5 border rounded-xl text-xs font-bold tracking-wider focus:outline-none focus:border-[#A3E635] ${
                theme === "dark"
                  ? "bg-zinc-950 border-zinc-700 text-white placeholder-zinc-500"
                  : "bg-zinc-100 border-zinc-300 text-zinc-900 placeholder-zinc-400"
              }`}
            />
            {isPincodeLoading && (
              <Loader2 className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#A3E635] animate-spin" />
            )}
          </div>
          <button
            type="submit"
            disabled={inputVal.length !== 6 || isPincodeLoading}
            className="px-3.5 py-1.5 bg-[#A3E635] hover:bg-[#86efac] text-black font-black text-[11px] uppercase rounded-xl transition cursor-pointer disabled:opacity-40 shrink-0"
          >
            Check
          </button>
        </form>
      </div>
    </div>
  );
}
