"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Smartphone, CheckCircle2, User, ArrowRight, ShieldCheck } from "lucide-react";

export function LoginModal() {
  const { isLoginModalOpen, setIsLoginModalOpen, userProfile, setUserProfile } = useCart();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  if (!isLoginModalOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    setError("");
    setStep("otp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError("Please enter the 4-digit OTP (e.g. 1234)");
      return;
    }

    const profile = {
      name: name.trim() || `Customer (${phone.slice(-4)})`,
      phone,
    };
    setUserProfile(profile);
    localStorage.setItem("sk_nutrition_user", JSON.stringify(profile));
    setIsLoginModalOpen(false);
    setStep("phone");
  };

  const handleLogout = () => {
    setUserProfile(null);
    localStorage.removeItem("sk_nutrition_user");
    setIsLoginModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 border border-gray-200 text-gray-900 space-y-5">
        {/* Close Button */}
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {userProfile ? (
          /* Already Logged In View */
          <div className="text-center space-y-4 py-2">
            <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
              <User className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-black text-lg text-gray-900">Welcome, {userProfile.name}!</h3>
              <p className="text-xs text-gray-500 mt-0.5">+91 {userProfile.phone}</p>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                Verified Peakvitals Member
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-xs uppercase transition cursor-pointer"
            >
              Sign Out / Switch Account
            </button>
          </div>
        ) : step === "phone" ? (
          /* Phone Input Step */
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-orange-600 text-[11px] font-black uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Quick Mobile Login</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mt-1">Sign In / Register</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Enter your mobile number to track orders and save Mughalsarai delivery addresses.
              </p>
            </div>

            {error && <p className="text-xs text-red-600 font-bold">{error}</p>}

            <div>
              <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                Your Full Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 text-sm outline-none transition"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider block mb-1">
                10-Digit Mobile Number *
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 overflow-hidden">
                <span className="px-3 text-sm font-bold text-gray-500 border-r border-gray-200">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="98765 43210"
                  className="flex-1 px-3 py-2.5 text-sm font-bold text-gray-900 outline-none bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>We never spam. Instant OTP verification.</span>
            </div>
          </form>
        ) : (
          /* OTP Verification Step */
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                OTP Sent
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-2">Enter 4-Digit Code</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Sent to <strong className="text-gray-900">+91 {phone}</strong>
              </p>
            </div>

            {error && <p className="text-xs text-red-600 font-bold">{error}</p>}

            <div>
              <input
                type="text"
                autoFocus
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="Enter 1234"
                className="w-full text-center text-2xl font-black tracking-widest px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 outline-none"
              />
              <p className="text-[11px] text-gray-400 text-center mt-1.5">
                (Enter demo OTP: <strong className="text-orange-600">1234</strong>)
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify &amp; Continue</span>
            </button>

            <button
              type="button"
              onClick={() => setStep("phone")}
              className="w-full text-xs text-gray-500 hover:text-gray-900 font-medium py-1"
            >
              Change Mobile Number
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
