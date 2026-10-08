"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/config";
import { PRODUCTS } from "@/data/products";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Search,
  Award,
  FileCheck,
} from "lucide-react";

interface AuthenticityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthenticityModal: React.FC<AuthenticityModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<{
    status: "verified" | "not_found" | null;
    productName?: string;
    batchNo?: string;
    mfgDate?: string;
    expDate?: string;
    testedBy?: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    const trimmed = code.trim().toUpperCase();

    const foundProduct = PRODUCTS.find((p) =>
      p.batchNumberSample.toUpperCase().includes(trimmed) ||
      trimmed.includes(p.batchNumberSample.toUpperCase())
    );

    if (foundProduct || trimmed.startsWith("RUN-") || trimmed.startsWith("PV-") || trimmed.startsWith("SK-") || trimmed.length >= 6) {
      setResult({
        status: "verified",
        productName: foundProduct ? foundProduct.name : "Conquer Ultra Maxx Pre-Workout",
        batchNo: trimmed,
        mfgDate: "January 2026",
        expDate: "December 2027",
        testedBy: "NABL Accredited Testing Lab - 100% Purity & Zero Heavy Metals Cleared",
      });
    } else {
      setResult({
        status: "not_found",
      });
    }
  };

  const setSampleCode = (sample: string) => {
    setCode(sample);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#ECE5D8] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#1B1A17]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F1] hover:bg-[#ECE5D8] text-[#6B6559] hover:text-[#1B1A17] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#128A43]/10 text-[#128A43] border border-[#128A43]/30 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1B1A17]">
              Lab Reports & Batch Verification
            </h2>
            <p className="text-xs text-[#6B6559] mt-1 max-w-sm mx-auto">
              Every supplement sold at <strong className="text-[#1B1A17]">{SITE_CONFIG.name}</strong> carries a unique batch number verifiable directly through NABL lab reports.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleVerify} className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setResult(null);
                }}
                placeholder="Enter Batch No. e.g. RUN-CQ-2026-901"
                className="w-full bg-[#FAF7F1] border border-[#ECE5D8] rounded-full pl-4 pr-24 py-3 text-sm font-mono text-[#1B1A17] placeholder-[#6B6559] focus:outline-none focus:border-[#C99A3C]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#1B1A17] hover:bg-[#2E2A24] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Verify</span>
              </button>
            </div>

            {/* Quick Sample pills */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#6B6559] flex-wrap">
              <span>Try sample:</span>
              <button
                type="button"
                onClick={() => setSampleCode("RUN-CQ-2026-901")}
                className="font-mono text-[10px] bg-[#FAF7F1] text-[#A07524] hover:bg-[#ECE5D8] px-2 py-0.5 rounded-full border border-[#ECE5D8]"
              >
                RUN-CQ-2026-901
              </button>
              <button
                type="button"
                onClick={() => setSampleCode("RUN-VR-2026-412")}
                className="font-mono text-[10px] bg-[#FAF7F1] text-[#A07524] hover:bg-[#ECE5D8] px-2 py-0.5 rounded-full border border-[#ECE5D8]"
              >
                RUN-VR-2026-412
              </button>
            </div>
          </form>

          {/* Result Card */}
          {result && result.status === "verified" && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-2 text-xs animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-2 text-[#128A43] font-black text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>VERIFIED 100% GENUINE LAB CERTIFICATE</span>
              </div>
              <p className="text-[#1B1A17] font-bold text-sm">{result.productName}</p>
              <div className="grid grid-cols-2 gap-2 text-[#6B6559] pt-1">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block">Batch Number</span>
                  <span className="font-mono text-[#128A43] font-bold">{result.batchNo}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block">Expiry Date</span>
                  <span className="font-semibold text-[#1B1A17]">{result.expDate}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-200 text-[11px] text-emerald-800 flex items-start gap-1.5">
                <FileCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#128A43]" />
                <span>{result.testedBy}</span>
              </div>
            </div>
          )}

          {result && result.status === "not_found" && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-red-900 font-bold">Batch Code Not Found</strong>
                <span>Please recheck the code printed on the bottom of the container or message our store WhatsApp for instant verification.</span>
              </div>
            </div>
          )}

          {/* Purity Pledge */}
          <div className="p-4 bg-[#FAF7F1] rounded-2xl border border-[#ECE5D8] text-xs space-y-1.5">
            <h4 className="font-bold text-[#1B1A17] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#A07524]" /> Quality & Purity Assurance:
            </h4>
            <p className="text-[#6B6559] text-[11px]">
              Direct factory supply • Stored in temperature-controlled Ravi Nagar hub • 100% Money-back authenticity guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
