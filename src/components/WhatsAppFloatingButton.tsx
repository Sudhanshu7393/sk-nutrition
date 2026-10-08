"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const WhatsAppFloatingButton: React.FC = () => {
  const { cart, generateWhatsAppOrderUrl } = useCart();

  const getWhatsAppUrl = () => {
    if (cart.length > 0) {
      return generateWhatsAppOrderUrl();
    }

    const message =
      `🛒 *ORDER INQUIRY - S.K NUTRITION*\n` +
      `📍 *Ravi Nagar, Mughalsarai (Authorised Peakvitals Partner)*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Hello S.K Nutrition! 👋\n\n` +
      `I want to order *Peakvitals Nutrition Pre-Workout*:\n\n` +
      `🔥 *Flavours & Pricing:*\n` +
      `1️⃣ Green Apple Flavour (250g) — ₹1,299\n` +
      `2️⃣ Blue Raspberry Flavour (250g) — ₹1,299\n` +
      `3️⃣ Watermelon Pump (250g) — ₹1,299\n` +
      `4️⃣ Tangy Orange (250g) — ₹1,299\n` +
      `5️⃣ Twin Pack Bundle (+ Free S.K Shaker Bottle) — ₹2,399\n\n` +
      `🚚 *Delivery:* All India Express / Cash on Delivery (COD)\n` +
      `📍 *My City / PIN Code:* [Enter City/PIN]\n\n` +
      `Please confirm stock availability and today's dispatch time. Thank you!`;

    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
      aria-label="Order or Chat on WhatsApp"
      title="Order on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-emerald-600 animate-pulse" />
      </div>
      <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">
        {cart.length > 0 ? `Order Cart (${cart.length}) on WhatsApp` : "Order on WhatsApp"}
      </span>
    </a>
  );
};
