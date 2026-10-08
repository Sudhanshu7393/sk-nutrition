"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const StoreLocationSection: React.FC = () => {
  return (
    <section id="store-location" className="py-12 bg-white border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Store Info */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Official Retail Outlet & Warehouse</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 leading-tight">
              Visit Our Store in <span className="text-orange-500">Ravi Nagar, Mughalsarai</span>
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Prefer to see and verify your supplement before buying? Walk into <strong className="text-gray-900">{SITE_CONFIG.name}</strong> at Ravi Nagar, Mughalsarai. Inspect batch holograms, scan FSSAI QR codes, and pick up your favourite Peakvitals Pre-Workout tub on the spot.
            </p>

            {/* Quick Details Cards */}
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Full Store Address:
                  </h4>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Landmark: {SITE_CONFIG.landmark}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Store Hours:
                    </h4>
                    <p className="text-xs font-bold text-gray-900">
                      {SITE_CONFIG.hours}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Call / WhatsApp:
                    </h4>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-xs font-bold text-gray-900 hover:text-orange-500 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `S.K Nutrition, Ravi Nagar, Mughalsarai, Chandauli`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Maps Directions</span>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20SK%20Nutrition,%20I%20am%20coming%20to%20your%20store%20in%20Ravi%20Nagar%20for%20Peakvitals%20Pre-Workout`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual / Store Advantages */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-5">
              <h3 className="text-base sm:text-lg font-black uppercase text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span>Why Buy from S.K Nutrition Mughalsarai?</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-orange-500 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Instant Local Pickup</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      No waiting 3-4 days for courier. Walk in at Ravi Nagar and take your pre-workout tub home immediately!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-emerald-600 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">100% Genuine Direct Supply</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Direct factory supply from Peakvitals Nutrition. Scratch QR code, batch number & FSSAI verified.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-blue-600 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">All Flavours & Combos in Stock</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Green Apple, Blue Raspberry, Watermelon, Tangy Orange, plus Twin Packs and Triple Stacks available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas Badge */}
              <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs">
                <span className="text-gray-500 block uppercase font-bold text-[10px] mb-1">
                  Local Same-Day Delivery Coverage:
                </span>
                <p className="text-gray-900 font-semibold">
                  Ravi Nagar • Mughalsarai Railway Colony • Chandauli District • Ramnagar • Varanasi Outer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
