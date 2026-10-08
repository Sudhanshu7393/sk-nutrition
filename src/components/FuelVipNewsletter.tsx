"use client";

import React, { useState } from "react";
import { Mail, Check, ArrowRight } from "lucide-react";

export function FuelVipNewsletter() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setInput("");
      }, 3500);
    }
  };

  return (
    <section className="bg-black text-white py-8 border-b border-zinc-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#A3E635] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black italic uppercase text-base sm:text-lg tracking-tight">
                JOIN THE <span className="text-[#A3E635]">S.K NUTRITION VIP CLUB</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Get secret flash sale codes, free shaker bottle deals &amp; Mughalsarai restock alerts.
              </p>
            </div>
          </div>

          {/* Right Input Form (Exact Fuel Nation layout) */}
          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto gap-2 max-w-md">
            <input
              type="text"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your mobile or email..."
              className="flex-1 lg:w-72 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-[#A3E635] text-xs font-bold text-white outline-none placeholder-zinc-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#A3E635] hover:bg-[#84cc16] text-black font-black text-xs uppercase tracking-wider rounded-xl transition shadow-md active:scale-95 cursor-pointer shrink-0"
            >
              {submitted ? (
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> JOINED!
                </span>
              ) : (
                "SUBSCRIBE"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
