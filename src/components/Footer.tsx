"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  MessageCircle,
  Truck,
} from "lucide-react";

interface FooterProps {
  onOpenCalculator?: () => void;
  onOpenAuthenticity?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAuthenticity,
}) => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
                SK
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                {SITE_CONFIG.name}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs">
              Mughalsarai & Chandauli&apos;s authorised outlet exclusively for{" "}
              <strong className="text-white">Peakvitals Nutrition Pre-Workout</strong>. 100% original, lab-tested, high-stimulant workout formulations with direct factory dispatch.
            </p>

            <div className="flex items-center gap-2 pt-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine & FSSAI Verified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 font-bold text-[11px]">
                <Truck className="w-3.5 h-3.5" /> Same-Day Local Dispatch
              </span>
            </div>
          </div>

          {/* Col 2: Pre-Workout Flavours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Peakvitals Pre-Workout Flavours
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  🍏 Green Apple Flavour (Original)
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  🫐 Blue Raspberry Blast (High Stim)
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  🍉 Watermelon Punch (Max Pump)
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  🍊 Tangy Orange Citrus Rush
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  ⚡ Twin Pack Combo (2 Tubs + Free Shaker)
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-orange-400 transition-colors">
                  🏆 Triple Power Stack (3 Tubs Max Value)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Store Address */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Physical Store & Customer Support
            </h4>

            <div className="space-y-2.5 text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Store Address:</strong>
                  <p className="text-xs mt-0.5">{SITE_CONFIG.address}</p>
                  <p className="text-[11px] text-gray-500">Landmark: {SITE_CONFIG.landmark}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <strong className="text-white">Phone / WhatsApp:</strong>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="ml-2 hover:text-white transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <strong className="text-white">Store Hours:</strong>
                  <span className="ml-2">{SITE_CONFIG.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20want%20to%20order%20Peakvitals%20Pre-Workout`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Executive on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <p>© {new Date().getFullYear()} S.K NUTRITION. All rights reserved. Authorised Partner for Peakvitals Nutrition.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              [🟢] 100% Vegetarian Supplements
            </span>
            <span>•</span>
            <span>Cash on Delivery (COD) &amp; UPI</span>
            <span>•</span>
            <span>Mughalsarai, Uttar Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
