"use client";

import React, { useState } from "react";
import { ShieldCheck, Percent, Copy, Check, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function NutrabayQuickStrips({ onVerifyClick }: { onVerifyClick?: () => void }) {
  const { applyCoupon, setIsCartOpen } = useCart();
  const [copied, setCopied] = useState(false);
  const coupon = "PEAKVITALS5";

  const handleCopy = () => {
    navigator.clipboard?.writeText(coupon);
    applyCoupon(coupon);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-4 bg-gray-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Left: Authentic Products (Exact Nutrabay Style) */}
          <div
            onClick={onVerifyClick}
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 hover:bg-emerald-50 border border-emerald-200/80 text-emerald-900 transition-colors cursor-pointer group shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-sm sm:text-base tracking-tight text-emerald-950 block">
                  Authentic Products Guarantee
                </span>
                <span className="text-[11px] text-emerald-700">
                  100% Sourced Direct from Peakvitals with Verification Seal
                </span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-emerald-100/80 group-hover:bg-emerald-200 flex items-center justify-center text-emerald-800 transition-transform group-hover:translate-x-1">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Right: 5% Off for New Users (Exact Nutrabay Style) */}
          <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 text-orange-950 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow-xs">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-sm sm:text-base tracking-tight text-orange-950 block">
                  5% off for All Customers
                </span>
                <span className="text-[11px] text-orange-700">
                  Click code to auto-apply in cart
                </span>
              </div>
            </div>

            {/* Copyable & Auto-Applying Code Pill */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-300 hover:border-orange-400 text-orange-600 font-black text-xs uppercase shadow-2xs transition active:scale-95 cursor-pointer"
              title="Click to apply coupon"
            >
              <span>{coupon}</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-600 text-[10px]">
                  <Check className="w-3.5 h-3.5" /> Applied!
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5 text-orange-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
